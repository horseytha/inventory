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
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-rose-100 flex items-center justify-center px-6">
      <div className="w-full max-w-5xl flex gap-8 items-center">
        
        {/* Image with Window Mask */}
        <div className="flex-1 hidden md:flex justify-center">
          <div className="relative w-[350px] h-[450px] overflow-hidden shadow-2xl" style={{borderRadius: '175px 175px 20px 20px'}}>
            <img 
              src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600" 
              alt="yarn and crafts"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Login Form */}
        <div className="flex-1 w-full">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-rose-100">
            <div className="text-center mb-8">
              <h1 className="font-bold text-4xl text-rose-900 mb-2" style={{fontFamily: 'Georgia, serif'}}>
                Welcome Back
              </h1>
              <p className="text-rose-700 text-sm">Log in to continue your creative journey</p>
            </div>
            
            <form onSubmit={login} className="space-y-5">
              <div>
                <label className="block text-rose-800 font-semibold mb-2 text-sm">Email</label>
                <input 
                  type="email"
                  className="w-full p-4 rounded-xl border-2 border-rose-200 focus:border-rose-500 focus:outline-none transition-all bg-rose-50/50" 
                  placeholder="your@email.com" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <label className="block text-rose-800 font-semibold mb-2 text-sm">Password</label>
                <input 
                  type="password" 
                  className="w-full p-4 rounded-xl border-2 border-rose-200 focus:border-rose-500 focus:outline-none transition-all bg-rose-50/50" 
                  placeholder="••••••••" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white p-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl mt-6"
              >
                Log In
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-rose-600 text-sm">
                Don't have an account? <a href="/signup" className="font-semibold hover:text-rose-800 transition-colors">Sign up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
