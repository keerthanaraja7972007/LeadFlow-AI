import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../services/api";

function VerifyOTP() {

  const navigate = useNavigate();
  const location = useLocation();

  // Email passed from Register.jsx
  const email = location.state?.email || "";

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const verifyOTP = async () => {

    try {

      setLoading(true);

      const response = await api.post("/verify-otp", {
        email,
        otp
      });

      alert(response.data.message);

      navigate("/");

    } catch (error) {

      alert(
        error.response?.data?.message || "Invalid OTP"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-slate-950 flex items-center justify-center">

      <div className="bg-slate-900 p-10 rounded-3xl w-[420px]">

        <h1 className="text-3xl text-white font-bold">

          Verify Email

        </h1>

        <p className="text-gray-400 mt-3">

          Enter the OTP sent to

        </p>

        <p className="text-cyan-400 mb-6">

          {email}

        </p>

        <input

          type="text"

          placeholder="Enter OTP"

          value={otp}

          onChange={(e)=>setOtp(e.target.value)}

          className="w-full p-4 rounded-xl mb-6"

        />

        <button

          onClick={verifyOTP}

          className="w-full bg-cyan-500 text-white p-4 rounded-xl"

        >

          {loading ? "Verifying..." : "Verify OTP"}

        </button>

      </div>

    </div>

  );

}

export default VerifyOTP;