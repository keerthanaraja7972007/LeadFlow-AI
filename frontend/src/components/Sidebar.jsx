import {
Home,
Search,
Mail,
Bot,
BarChart3,
Settings,
LogOut
} from "lucide-react";

import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";

function Sidebar(){
const navigate = useNavigate();
const menu = [
  {
    name: "Dashboard",
    icon: <Home size={22} />,
    path: "/dashboard"
  },
  {
    name: "AI Assistant",
    icon: <Bot size={22} />,
    path: "/chatbot"
  },
  {
    name: "Search Leads",
    icon: <Search size={22} />,
    path: "/search"
  },
  {
    name: "Generate Email",
    icon: <Mail size={22} />,
    path: "/generate-email"
  },
  {
    name: "Campaigns",
    icon: <BarChart3 size={22} />,
    path: "/campaigns"
  },
  {
    name: "Settings",
    icon: <Settings size={22} />,
    path: "/settings"
  }
];


return(

<motion.aside

initial={{
x:-100,
opacity:0
}}

animate={{
x:0,
opacity:1
}}

transition={{
duration:.6
}}

className="
hidden
md:flex
h-screen
w-52
shrink-0
bg-white/10
backdrop-blur-2xl
border-r
border-white/20
flex-col
p-6
z-20
"

>


<h1
className="
text-3xl
font-black
bg-gradient-to-r
from-cyan-400
via-indigo-400
to-purple-500
bg-clip-text
text-transparent
mb-12
"
>

LeadFlow AI

</h1>



<div className="space-y-4">


{
menu.map((item,index)=>(

<motion.div

key={index}

onClick={()=>navigate(item.path)}

whileHover={{
scale:1.05,
x:8
}}

className="
flex
items-center
gap-4
text-gray-300
hover:text-white
cursor-pointer
p-4
rounded-2xl
hover:bg-white/10
transition
"

>

{item.icon}

<span>
{item.name}
</span>


</motion.div>

))
}


</div>



<div className="mt-auto">


<button

className="
flex
items-center
gap-4
text-red-400
p-4
rounded-xl
hover:bg-red-500/10
"

>

<LogOut size={22}/>

Logout

</button>


</div>


</motion.aside>


)

}


export default Sidebar;