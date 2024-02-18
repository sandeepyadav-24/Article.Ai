import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignup = async () => {
    const response = await fetch("http://localhost:3000/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await response.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      navigate("/login");
    } else {
      console.log(data.message);
      alert("Invalid Signup");
    }
  };
  return (
    <div className="flex flex-row h-screen ">
      <div className="flex-1 bg-black text-white flex flex-col px-20 py-52">
        <div className="text-xl font-bold text-center">
          Welcome to Article.Ai,<span className="text-[#946AFF]"> Buddy</span>
        </div>
        <div className="text-center px-28">
          <div className="flex flex-col">
            <label htmlFor="" className="text-[#B1B1B1] w-[430px] text-left">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="bg-[#1A1A1A] border-white border-2 rounded-md px-3 py-2 mb-3 w-[430px] "
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-[#B1B1B1] w-[430px] text-left">
              Email
            </label>
            <input
              type="text"
              placeholder="youremail@gmail.com"
              className="bg-[#1A1A1A] border-white border-2 rounded-md px-3 py-2 mb-3 w-[430px]"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-[#B1B1B1] w-[430px] text-left">
              Password
            </label>
            <input
              type="text"
              className="bg-[#1A1A1A] border-white border-2 rounded-md px-3 py-2 mb-3 w-[430px]"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <span
          className="bg-white text-black  my-3 p-2 rounded-md text-center w-[430px] mx-auto"
          onClick={handleSignup}
        >
          Sign Up
        </span>
        <div className="text-[#7C7C7C] text-center my-5">
          Already have an account?{" "}
          <span className="text-[#8F66FD]">
            <Link to="/login">Log In</Link>
          </span>
        </div>
      </div>
      <div className="flex-1 ">
        <img src="login_theme.png" alt="" className="h-screen" />
      </div>
    </div>
  );
};
export default Signup;
