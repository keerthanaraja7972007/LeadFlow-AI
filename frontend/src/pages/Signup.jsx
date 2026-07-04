import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function Signup(){

const navigate = useNavigate();


const [name,setName] = useState("");

const [email,setEmail] = useState("");

const [password,setPassword] = useState("");

const [confirmPassword,setConfirmPassword] = useState("");

const [showPassword,setShowPassword] = useState(false);

const [showConfirm,setShowConfirm] = useState(false);


return(

<div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617]">


{/* Aurora Background */}


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
blur-[160px]
opacity-30
animate-pulse
">
</div>



<div className="
absolute
top-1/2
left-1/2
w-80
h-80
bg-purple-600
rounded-full
blur-[160px]
opacity-20
">
</div>



{/* Signup Card */}



<motion.div


initial={{
opacity:0,
y:60
}}


animate={{
opacity:1,
y:0
}}


transition={{
duration:0.8
}}


className="
w-full
max-w-md
p-10
rounded-[35px]
bg-white/10
backdrop-blur-3xl
border
border-white/20
shadow-[0_30px_80px_rgba(0,0,0,.5)]
relative
z-10
"


>


{/* Logo */}


<div className="flex justify-center mb-8">


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
shadow-[0_0_60px_rgba(34,211,238,.5)]
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
text-center
text-white
">


Create Account


</h1>



<p className="
text-center
text-gray-300
mt-3
">


Join LeadFlow AI and automate your sales


</p>



<form className="mt-8 space-y-5">



{/* Name */}


<div>


<label className="
text-gray-200
text-sm
">


Full Name


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
">


<User
className="text-cyan-400"
/>


<input


type="text"


placeholder="John Smith"


value={name}


onChange={(e)=>setName(e.target.value)}


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


</div>
{/* Email */}

<div>

<label className="
text-gray-200
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
">


<Mail
className="text-cyan-400"
/>


<input


type="email"


placeholder="john@gmail.com"


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


</div>




{/* Password */}


<div>


<label className="
text-gray-200
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
">


<Lock
className="text-cyan-400"
/>



<input


type={showPassword ? "text":"password"}


placeholder="Create password"


value={password}


onChange={(e)=>setPassword(e.target.value)}



className="
bg-transparent
outline-none
text-white
ml-4
flex-1
placeholder:text-gray-400
"



/>




{

showPassword ?

<EyeOff

className="
text-gray-300
cursor-pointer
"

onClick={()=>setShowPassword(false)}

/>


:

<Eye

className="
text-gray-300
cursor-pointer
"

onClick={()=>setShowPassword(true)}

/>


}



</div>


</div>





{/* Password Strength */}


<div className="mt-2">


<div className="
h-2
rounded-full
bg-white/20
overflow-hidden
">


<div

className={`
h-full
transition-all
duration-500

${
password.length < 4
?
"w-1/4 bg-red-500"

:

password.length < 8
?
"w-2/4 bg-yellow-400"

:

"w-full bg-green-400"

}

`}

>

</div>


</div>



<p className="
text-xs
text-gray-400
mt-2
">


{
password.length < 4

?

"Weak password"

:

password.length < 8

?

"Medium password"

:

"Strong password"

}


</p>


</div>







{/* Confirm Password */}



<div>


<label className="
text-gray-200
text-sm
">


Confirm Password


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
">


<Lock

className="text-cyan-400"

/>



<input


type={showConfirm ? "text":"password"}


placeholder="Confirm password"



value={confirmPassword}



onChange={(e)=>setConfirmPassword(e.target.value)}



className="
bg-transparent
outline-none
text-white
ml-4
flex-1
placeholder:text-gray-400
"


/>




{

showConfirm ?

<EyeOff

className="
text-gray-300
cursor-pointer
"

onClick={()=>setShowConfirm(false)}

/>


:

<Eye

className="
text-gray-300
cursor-pointer
"

onClick={()=>setShowConfirm(true)}

/>


}


</div>


</div>
// Password match message

{
confirmPassword && password !== confirmPassword && (

<p className="
text-red-400
text-sm
mt-2
">

Passwords do not match

</p>

)

}



{/* Terms */}

<div className="
flex
items-center
gap-2
text-gray-300
text-sm
">


<input
type="checkbox"
className="w-4 h-4"
/>


<span>

I agree to the Terms & Conditions

</span>


</div>





{/* Create Account Button */}


<motion.button


whileHover={{
scale:1.03
}}


whileTap={{
scale:0.97
}}


type="submit"


className="
w-full
py-4
rounded-2xl
bg-gradient-to-r
from-indigo-600
via-blue-600
to-cyan-500
text-white
font-bold
flex
items-center
justify-center
gap-3
shadow-[0_0_40px_rgba(34,211,238,.4)]
"


>


Create Account


<ArrowRight size={20}/>


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
">

</div>


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
">


OR


</span>


</div>


</div>







{/* Google Signup */}



<motion.button


whileHover={{
scale:1.03
}}


whileTap={{
scale:0.97
}}


className="
w-full
py-4
rounded-2xl
bg-white
text-gray-800
font-semibold
flex
items-center
justify-center
gap-4
shadow-xl
"


>


<FaGoogle size={22}/>


Continue with Google


</motion.button>






{/* Login Redirect */}



<div className="
text-center
mt-8
">


<p className="
text-gray-300
">


Already have an account?


<button


type="button"


onClick={()=>navigate("/")}


className="
ml-2
text-cyan-400
font-bold
hover:text-cyan-300
"


>


Login


</button>


</p>


</div>



</motion.div>

</div>


);

}


export default Signup;