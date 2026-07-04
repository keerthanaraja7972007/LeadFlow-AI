import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import api from "../services/api";


function Login(){

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [show,setShow] = useState(false);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState("");


  const handleLogin = async (e) => {

    e.preventDefault();

    setLoading(true);
    setError("");

    try {

        const response = await api.post("/login", {

            email,

            password

        });

        localStorage.setItem(

            "token",

            response.data.access_token

        );

        navigate("/dashboard");

    }

    catch (error) {

        setError(
            error.response?.data?.detail ||
            "Login Failed"
        );

    }

    finally {

        setLoading(false);

    }

};  

return(

<div className="
min-h-screen 
relative 
overflow-hidden
flex
items-center
justify-center
bg-[#020617]
">


{/* Aurora Background */}

<div className="
absolute
w-[500px]
h-[500px]
bg-cyan-500/30
rounded-full
blur-[150px]
top-[-200px]
left-[-150px]
animate-pulse
"></div>


<div className="
absolute
w-[600px]
h-[600px]
bg-purple-600/30
rounded-full
blur-[170px]
bottom-[-200px]
right-[-200px]
animate-pulse
"></div>

<div
className="
absolute
top-24
left-24
w-8
h-8
rounded-full
bg-cyan-400/50
backdrop-blur-lg
animate-bounce
shadow-[0_0_25px_rgba(34,211,238,.8)]
">
</div>

<div
className="
absolute
bottom-36
right-28
w-6
h-6
rounded-full
bg-purple-500/50
animate-pulse
shadow-[0_0_20px_rgba(168,85,247,.8)]
">
</div>

<div
className="
absolute
top-1/2
left-10
w-4
h-4
rounded-full
bg-blue-400
animate-ping
">
</div>

<div
className="
absolute
top-40
right-52
w-5
h-5
rounded-full
bg-pink-500/70
animate-bounce
">
</div>

<div
className="
absolute
bottom-20
left-48
w-7
h-7
rounded-full
bg-indigo-400/50
animate-pulse
">
</div>

<div
className="
absolute
top-20
left-20
grid
grid-cols-6
gap-3
opacity-20
">

{
Array.from({ length: 36 }).map((_, index) => (

<div
key={index}
className="
w-1.5
h-1.5
rounded-full
bg-cyan-300
"
/>

))

}

</div>

<div
className="
absolute
bottom-20
right-20
grid
grid-cols-6
gap-3
opacity-20
">

{
Array.from({ length: 36 }).map((_, index) => (

<div
key={index}
className="
w-1.5
h-1.5
rounded-full
bg-purple-400
"
/>

))

}

</div>

<div
className="
absolute
top-10
right-10
w-72
h-72
rounded-full
border
border-cyan-400/20
backdrop-blur-sm
">
</div>

<div
className="
absolute
top-10
right-10
w-72
h-72
rounded-full
border
border-cyan-400/20
backdrop-blur-sm
">
</div>

<div className="
absolute
top-20
right-28
w-5
h-5
rounded-full
bg-cyan-400
opacity-70
animate-bounce
"></div>

<div className="
absolute
bottom-24
left-20
w-4
h-4
rounded-full
bg-purple-500
opacity-70
animate-ping
"></div>

<div className="
absolute
top-1/2
left-10
w-3
h-3
rounded-full
bg-blue-500
opacity-60
animate-pulse
"></div>

{
Array.from({ length: 20 }).map((_, index) => (

<div

key={index}

className="
absolute
w-1
h-1
rounded-full
bg-white
opacity-70
animate-pulse
"

style={{

top: `${Math.random() * 100}%`,
left: `${Math.random() * 100}%`

}}

></div>

))
}



{/* Logo */}

<div className="
flex
justify-center
mb-8
">

</div>


{/* Login Card */}

<motion.div

initial={{
opacity:0,
y:50
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:0.8
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
shadow-[0_0_80px_rgba(34,211,238,.25)]
hover:shadow-[0_0_100px_rgba(34,211,238,.45)]
transition-all
duration-500
"

>


{/* Logo */}

<div className="
flex
justify-center
mb-8
">

<motion.div

animate={{
scale:[1,1.08,1]
}}

transition={{
duration:3,
repeat:Infinity
}}

className="
w-24
h-24
rounded-full
bg-gradient-to-r
from-cyan-400
to-purple-600
flex
items-center
justify-center
shadow-[0_0_50px_rgba(34,211,238,.5)]
">


<Sparkles
size={45}
color="white"
/>


</motion.div>

</div>



<h1 className="
text-4xl
font-black
text-center
text-white
">

LeadFlow
<span className="
text-cyan-400
">
 AI
</span>

</h1>


<p className="
text-center
text-gray-400
mt-3
">

AI Powered Sales Automation

</p>

<h2 className="
text-white
text-2xl
font-bold
text-center
mt-8
">

Welcome Back 👋

</h2>

<p className="
text-center
text-gray-400
mt-2
mb-6
">

Sign in to continue managing your leads.

</p>
{/* Login Form */}


<div className="flex justify-center mb-6">

<div className="
w-14
h-14
rounded-full
bg-cyan-500/20
flex
items-center
justify-center
border
border-cyan-500/40
">

🔒

</div>

</div>


<form
onSubmit={handleLogin}
className="
mt-10
space-y-6
"
>


{/* Email */}

<div>

<label className="
text-gray-300
text-sm
">
Email Address
</label>


<div className="
mt-2
flex
items-center
bg-white/10
border
border-white/20
rounded-2xl
px-5
py-4
focus-within:border-cyan-400
focus-within:shadow-[0_0_25px_rgba(34,211,238,.35)]
transition-all
duration-300
">


<Mail
className="
text-cyan-400
"
/>


<input

type="email"

placeholder="Enter your email"

value={email}

onChange={(e)=>
setEmail(e.target.value)
}

className="
ml-4
w-full
bg-transparent
outline-none
text-white
placeholder-gray-500
"

/>


</div>

</div>




{/* Password */}


<div>


<label className="
text-gray-300
text-sm
">

Password

</label>



<div className="
mt-2
flex
items-center
bg-white/10
border
border-white/20
rounded-2xl
px-5
py-4
focus-within:border-cyan-400
focus-within:shadow-[0_0_25px_rgba(34,211,238,.35)]
transition-all
duration-300
">


<Lock
className="
text-cyan-400
"
/>



<input


type={
show
?
"text"
:
"password"
}


placeholder="Enter password"


value={password}


onChange={(e)=>
setPassword(e.target.value)
}


className="
ml-4
w-full
bg-transparent
outline-none
text-white
placeholder-gray-500
"

/>



{

show ?

<EyeOff

className="
text-gray-400
cursor-pointer
"

onClick={()=>
setShow(false)
}

/>


:

<Eye

className="
text-gray-400
cursor-pointer
"

onClick={()=>
setShow(true)
}

/>

}


</div>


</div>





{/* Remember + Forgot */}


<div className="
flex
justify-between
items-center
text-sm
">


<label className="
flex
gap-2
items-center
text-gray-300
">


<input
type="checkbox"
/>


Remember me


</label>



<button

type="button"

onClick={()=>navigate("/forgot-password")}

className="
text-cyan-400
hover:text-cyan-300
"

>

Forgot Password?

</button>


</div>





{/* Error */}


{

error &&

<div className="
bg-red-500/20
border
border-red-500/40
rounded-xl
p-3
text-red-300
text-sm
">

{error}

</div>

}






{/* Login Button */}


<motion.button


whileHover={{
scale:1.03
}}


whileTap={{
scale:0.97
}}



disabled={loading}


className="
w-full
py-4
rounded-2xl
hover:shadow-[0_0_50px_rgba(59,130,246,.7)]
transition-all
duration-300
bg-gradient-to-r
from-cyan-500
via-blue-600
to-purple-600
text-white
font-bold
flex
items-center
justify-center
gap-3
shadow-[0_0_40px_rgba(34,211,238,.4)]
"


>


{

loading

?

"Signing In..."

:

"Login"

}



<ArrowRight
size={20}
/>


</motion.button>


</form>
{/* Divider */}

<div className="
relative
my-8
">


<div className="
absolute
inset-0
flex
items-center
">

<div className="
w-full
border-t
border-white/20
"></div>


</div>



<div className="
relative
flex
justify-center
">

<span className="
bg-[#020617]
px-5
text-gray-400
text-sm
">

OR

</span>


</div>


</div>


{/* Signup */}

<div className="
text-center
mt-8
">


<p className="
text-gray-300
">


Don't have an account?


<button

type="button"

onClick={() => navigate("/register")}

className="
ml-2
text-cyan-400
font-bold
hover:text-cyan-300
"

>

Create Account

</button>


</p>


</div>







{/* Footer */}


<div className="
mt-8
text-center
text-gray-500
text-sm
">


Powered by


<span className="
text-cyan-400
font-bold
">

 Gemini AI

</span>


{" "} • {" "}


React


{" "} • {" "}


FastAPI


{" "} • {" "}


PostgreSQL



<p className="
text-center
text-gray-600
text-xs
mt-4
">

Version 2.0 • Secure Authentication

</p>



</div>



</motion.div>


</div>


);

}


export default Login;