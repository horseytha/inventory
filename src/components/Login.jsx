import { useState } from "react";
import { useNavigate } from 'react-router'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    })

    const data = await res.json();

    if (res.status === 200) {
      const userWithToken = { ...data.user, token: data.token };
      localStorage.setItem("user", JSON.stringify(userWithToken));
      localStorage.setItem("token", data.token);
      if (data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
      window.location.reload();
    } else {
      alert("invalid credentials");
    }
  }

  return (
    <div className="py-6 px-10 flex flex-col gap-4 w-[500px] mx-auto mt-20 bg-rose-100 rounded-lg">
      <h1 className="font-bold text-2xl text-rose-800 text-center">Log-in to your account.</h1>
      <form onSubmit={login}>
        <input className="p-2 rounded border border-rose-300 bg-white w-full mb-4" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" className="p-2 rounded border border-rose-300 bg-white w-full mb-4" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit" className="bg-rose-700 text-white p-2 rounded w-full">Login</button>
      </form>
    </div>
  )
}

export default Login;
