import express from "express";
import { authenticateJwt, SECRET } from "../middleware/index";
import { Summary } from "../db";

const router = express.Router();

router.post("/summary", authenticateJwt, (req, res) => {
  const { title, description, date } = req.body;
  const done = false;
  const userId = req.headers["userId"];

  const newTodo = new Summary({ title, description, done, userId });

  newTodo
    .save()
    .then((savedTodo) => {
      res.status(201).json(savedTodo);
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to create a new todo" });
    });
});

router.get("/todos", authenticateJwt, (req, res) => {
  const userId = req.headers["userId"];

  Summary.find({ userId })
    .then((todos) => {
      res.json(todos);
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to retrieve todos" });
    });
});

export default router;
