import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../services/api";

function ResetPassword() {

    const navigate = useNavigate();
    const location = useLocation();

    const email = location.state?.email || "";

    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");

    const resetPassword = async () => {

        try {

            const response = await api.post("/reset-password", {

                email,

                otp,

                password

            });

            alert(response.data.message);

            navigate("/");

        }

        catch (error) {

            alert(

                error.response?.data?.message ||

                "Invalid OTP"

            );

        }

    };

    return (

        <div className="min-h-screen bg-slate-950 flex items-center justify-center">

            <div className="bg-slate-900 p-10 rounded-3xl w-[420px]">

                <h1 className="text-3xl text-white font-bold mb-6">

                    Reset Password

                </h1>

                <input

                    className="w-full p-4 rounded-xl mb-4"

                    placeholder="OTP"

                    value={otp}

                    onChange={(e)=>setOtp(e.target.value)}

                />

                <input

                    type="password"

                    className="w-full p-4 rounded-xl mb-6"

                    placeholder="New Password"

                    value={password}

                    onChange={(e)=>setPassword(e.target.value)}

                />

                <button

                    onClick={resetPassword}

                    className="w-full bg-cyan-500 text-white p-4 rounded-xl"

                >

                    Reset Password

                </button>

            </div>

        </div>

    );

}

export default ResetPassword;