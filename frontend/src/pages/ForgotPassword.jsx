import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowLeft, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function ForgotPassword(){

const navigate = useNavigate();

const [email,setEmail] = useState("");

const [sent,setSent] = useState(false);


const handleSubmit = async (e) => {

    e.preventDefault();

    try {

        const response = await api.post("/forgot-password", {

            email

        });

        alert(response.data.message);

        setSent(true);

        navigate("/reset-password", {

            state: {
                email
            }

        });

    }

    catch (error) {

        alert(

            error.response?.data?.message ||

            "Something went wrong"

        );

    }

};



return(

<div className="
min-h-screen
flex
items-center
justify-center
bg-[#020617]
relative
overflow-hidden
">


{/* Background */}

<div className="
absolute
top-10
left-20
w-96
h-96
bg-indigo-600
rounded-full
blur-[150px]
opacity-30
animate-pulse
">
</div>


<div className="
absolute
bottom-10
right-20
w-96
h-96
bg-cyan-500
rounded-full
blur-[150px]
opacity-30
animate-pulse
">
</div>




<motion.div

initial={{
opacity:0,
y:50
}}

animate={{
opacity:1,
y:0
}}

className="
relative
z-10
w-full
max-w-md
p-10
rounded-[35px]
bg-white/10
backdrop-blur-3xl
border
border-white/20
shadow-2xl
"

>


{/* Logo */}

<div className="
flex
justify-center
mb-8
">


<div className="
w-24
h-24
rounded-full
bg-gradient-to-r
from-indigo-500
via-cyan-500
to-purple-600
flex
items-center
justify-center
">


<Sparkles
size={42}
color="white"
/>


</div>


</div>




<h1 className="
text-4xl
font-black
text-white
text-center
">


Forgot Password?


</h1>


<p className="
text-gray-300
text-center
mt-3
">


Reset your LeadFlow AI account password


</p>



{

sent ?

(

<div className="
mt-8
p-5
rounded-2xl
bg-green-500/20
border
border-green-400
text-green-300
text-center
">


OTP has been sent to your email 📧


</div>

)

:

(

<form
onSubmit={handleSubmit}
className="mt-8 space-y-6"
>


<label className="
text-gray-200
text-sm
">


Email Address


</label>


<div className="
mt-3
flex
items-center
bg-white/10
border
border-white/20
rounded-2xl
px-5
py-4
">


<Mail
className="text-cyan-400"
/>


<input

type="email"

required

placeholder="Enter your email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

className="
bg-transparent
outline-none
text-white
ml-4
flex-1
placeholder:text-gray-400
"

/>


</div>



<motion.button

whileHover={{
scale:1.03
}}

className="
w-full
py-4
rounded-2xl
bg-gradient-to-r
from-indigo-600
to-cyan-500
text-white
font-bold
"


>

Send OTP

</motion.button>


</form>

)

}



<button

onClick={()=>navigate("/")}

className="
mt-8
text-cyan-400
flex
items-center
justify-center
gap-2
w-full
"

>


<ArrowLeft size={18}/>

Back to Login


</button>



</motion.div>


</div>


);

}


export default ForgotPassword;