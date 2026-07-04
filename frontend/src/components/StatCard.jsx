import { motion } from "framer-motion";


function StatCard({icon,title,value,description}){


return(

<motion.div

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.6
}}

whileHover={{
scale:1.05,
y:-8
}}

className="
bg-white/10
backdrop-blur-xl
border
border-white/20
rounded-3xl
p-6
shadow-xl
cursor-pointer
"

>


<div className="
flex
justify-between
items-center
">


<div
className="
w-14
h-14
rounded-2xl
bg-gradient-to-r
from-cyan-400
to-indigo-500
flex
items-center
justify-center
text-white
"
>

{icon}

</div>



</div>



<h2
className="
text-4xl
font-black
text-white
mt-6
"
>

{value}

</h2>


<h3
className="
text-gray-200
font-semibold
mt-2
"
>

{title}

</h3>


<p
className="
text-gray-400
text-sm
mt-2
"
>

{description}

</p>


</motion.div>

)

}


export default StatCard;