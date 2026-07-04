import { motion } from "framer-motion";
import { Sparkles, BrainCircuit } from "lucide-react";
import { useEffect, useState } from "react";


function LoadingScreen({finishLoading}){


const messages=[

"Initializing AI Engine...",

"Analyzing Sales Intelligence...",

"Connecting Lead Database...",

"Preparing Smart Workspace..."

];


const [index,setIndex]=useState(0);



useEffect(()=>{


const interval=setInterval(()=>{


setIndex((prev)=>{


if(prev===messages.length-1){

clearInterval(interval);

setTimeout(()=>{

finishLoading();

},800);


return prev;

}


return prev+1;


});


},700);



return()=>clearInterval(interval);



},[]);



return(

<div className="
min-h-screen
bg-[#020617]
flex
items-center
justify-center
relative
overflow-hidden
">


{/* Aurora Lights */}


<div className="
absolute
top-0
left-0
w-[500px]
h-[500px]
bg-indigo-600
rounded-full
blur-[180px]
opacity-30
animate-pulse
">

</div>



<div className="
absolute
bottom-0
right-0
w-[500px]
h-[500px]
bg-cyan-500
rounded-full
blur-[180px]
opacity-30
animate-pulse
">

</div>





<motion.div

initial={{
opacity:0,
scale:0.7
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:1
}}


className="
relative
z-10
text-center
"


>


{/* Logo */}


<motion.div


animate={{

rotate:[0,360]

}}


transition={{

duration:4,

repeat:Infinity,

ease:"linear"

}}


className="
mx-auto
w-32
h-32
rounded-full
bg-gradient-to-r
from-indigo-500
via-cyan-500
to-purple-600
flex
items-center
justify-center
shadow-[0_0_80px_rgba(34,211,238,.5)]
"


>


<Sparkles

size={55}

color="white"

/>


</motion.div>





<h1 className="
mt-8
text-6xl
font-black
bg-gradient-to-r
from-cyan-400
via-indigo-400
to-purple-500
bg-clip-text
text-transparent
">


LeadFlow AI


</h1>



<p className="
text-gray-300
text-xl
mt-4
">


AI Powered Sales Automation


</p>

{/* Loading Message */}

<motion.p

key={index}

initial={{
opacity:0,
y:10
}}

animate={{
opacity:1,
y:0
}}

className="
text-cyan-400
mt-10
text-lg
font-semibold
"

>

{messages[index]}

</motion.p>





{/* Progress Bar */}


<div className="
mt-8
w-80
h-3
bg-white/10
rounded-full
overflow-hidden
mx-auto
border
border-white/10
">


<motion.div

initial={{
width:"0%"
}}


animate={{
width:"100%"
}}


transition={{

duration:3,

ease:"linear"

}}


className="
h-full
bg-gradient-to-r
from-indigo-500
via-cyan-400
to-purple-500
rounded-full
"


>

</motion.div>


</div>





<motion.div

initial={{
opacity:0
}}

animate={{
opacity:1
}}

transition={{
delay:1
}}


className="
flex
items-center
justify-center
gap-2
mt-6
text-gray-400
"


>


<BrainCircuit size={20}/>


Powered by Gemini AI


</motion.div>




</motion.div>


</div>


);


}


export default LoadingScreen;