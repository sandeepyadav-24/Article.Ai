import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const summarySchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Number,
  userId: String,
});

const recentSearch = new mongoose.Schema({
  search: [String],
  userId: String,
});

export const User = mongoose.model("User", userSchema);
export const Summary = mongoose.model("Summary", summarySchema);
export const Search = mongoose.model("Search", recentSearch);
