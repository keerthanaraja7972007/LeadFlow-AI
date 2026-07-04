import { useState } from "react";
import api from "../services/api";

function ChangePassword() {

    const [currentPassword, setCurrentPassword] = useState("");

    const [newPassword, setNewPassword] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");

    const changePassword = async () => {

    if(newPassword !== confirmPassword){

        alert("Passwords do not match");

        return;

    }

    try{

        const token = localStorage.getItem("token");

        const response = await api.post(

            "/change-password",

            {

                current_password: currentPassword,

                new_password: newPassword

            },

            {

                headers:{

                    Authorization:`Bearer ${token}`

                }

            }

        );

        alert(response.data.message);

        setCurrentPassword("");

        setNewPassword("");

        setConfirmPassword("");

    }

    catch(error){

        alert(

            error.response?.data?.message ||

            "Failed"

        );

    }

};

    return (

<div className="min-h-screen bg-slate-950 flex justify-center items-center">

<div className="bg-slate-900 p-10 rounded-3xl w-[450px]">

<h1 className="text-3xl text-white font-bold mb-8">

Change Password

</h1>

<input

type="password"

placeholder="Current Password"

value={currentPassword}

onChange={(e)=>setCurrentPassword(e.target.value)}

className="w-full p-4 rounded-xl mb-5"

/>

<input

type="password"

placeholder="New Password"

value={newPassword}

onChange={(e)=>setNewPassword(e.target.value)}

className="w-full p-4 rounded-xl mb-5"

/>

<input

type="password"

placeholder="Confirm Password"

value={confirmPassword}

onChange={(e)=>setConfirmPassword(e.target.value)}

className="w-full p-4 rounded-xl mb-7"

/>

<button

onClick={changePassword}

className="w-full bg-cyan-500 p-4 rounded-xl text-white font-bold"

>

Change Password

</button>

</div>

</div>

);

}

export default ChangePassword;