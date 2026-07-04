import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {

    try {

    const response = await api.post("/register",{

        name,
        email,
        password

    });

    alert(response.data.message);

    navigate("/verify-otp",{

        state:{
            email
        }

    });

}
catch(error){

    alert(error.response.data.message);

}

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-slate-950">

      <div className="bg-slate-900 p-10 rounded-2xl w-[420px]">

        <h1 className="text-3xl text-white font-bold mb-8">

          Create Account

        </h1>

        <input
          placeholder="Name"
          className="w-full p-3 rounded mb-4"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          placeholder="Email"
          className="w-full p-3 rounded mb-4"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded mb-6"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          onClick={registerUser}
          className="w-full bg-cyan-500 text-white p-3 rounded-lg"
        >

          Register

        </button>

      </div>

    </div>

  );

}

export default Register;