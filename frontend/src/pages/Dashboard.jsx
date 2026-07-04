import { motion } from "framer-motion";
import {
Sparkles,
Search,
Mail,
Bot,
Plus,
Users,
Send,
Megaphone,
TrendingUp
} from "lucide-react";
import {
LineChart,
Line,
BarChart,
Bar,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
ResponsiveContainer
} from "recharts";

import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard(){

const salesData = [
{
month:"Jan",
leads:400,
conversion:240
},
{
month:"Feb",
leads:700,
conversion:390
},
{
month:"Mar",
leads:900,
conversion:500
},
{
month:"Apr",
leads:1200,
conversion:700
},
{
month:"May",
leads:1600,
conversion:900
},
{
month:"Jun",
leads:2100,
conversion:1200
}
];

const navigate = useNavigate();

useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {

        navigate("/");

    }

}, []);

return(



<div
className="
min-h-screen
bg-[#020617]
text-white
flex
overflow-hidden
"
>


{/* Aurora Background */}

<div
className="
absolute
top-0
left-20
w-[500px]
h-[500px]
bg-cyan-500
rounded-full
blur-[180px]
opacity-20
animate-pulse
"
></div>


<div
className="
absolute
bottom-0
right-20
w-[500px]
h-[500px]
bg-purple-600
rounded-full
blur-[180px]
opacity-20
animate-pulse
"
></div>



{/* Sidebar */}

<Sidebar />



{/* Main Content */}

<div
className="
flex-1
min-h-screen
p-8
relative
z-10
overflow-y-auto
"
>

<Navbar />
{/* Header */}

<motion.div

initial={{
opacity:0,
y:-30
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.7
}}

className="
max-w-full
"

>

<h1
className="
text-4xl
font-black
"
>

Hello!

</h1>


<p
className="
text-gray-400
mt-2
text-lg
"
>

Here is your AI sales performance overview

</p>


</motion.div>




{/* Hero Card */}


<motion.div

initial={{
opacity:0,
scale:.8
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:.8
}}

className="
mt-14
w-full
max-w-7xl
bg-gradient-to-r
from-indigo-600/40
via-purple-600/40
to-cyan-500/40
backdrop-blur-xl
border
border-white/20
rounded-[35px]
p-6
shadow-2xl
"

>


<div
className="
flex
flex-col
lg:flex-row
justify-between
items-center
gap-8
"
>


<div>


<div
className="
flex
items-center
gap-3
"
>

<Sparkles
className="text-cyan-300"
/>


<span
className="
text-cyan-300
font-semibold
"
>

AI Powered

</span>


</div>



<h2
className="
text-4xl
font-black
mt-2
"
>

Grow Your Sales With AI

</h2>


<p
className="
text-gray-300
mt-3
max-w-xl
text-lg
leading-8
"
>

LeadFlow AI helps you discover prospects,
generate personalized emails,
and automate your complete sales workflow.

</p>



</div>





<div
className="
grid
grid-cols-2
gap-5
"
>


<ActionCard
icon={<Search/>}
title="Find Leads"
/>


<ActionCard
icon={<Mail/>}
title="Generate Email"
/>


<ActionCard
icon={<Bot/>}
title="AI Assistant"
/>


<ActionCard
icon={<Plus/>}
title="New Campaign"
/>


</div>



</div>


</motion.div>
{/* Statistics Cards */}


<div
className="
grid
grid-cols-1
sm:grid-cols-2
xl:grid-cols-4
gap-10
mt-14
"
>


<StatCard

icon={<Users size={28}/>}

title="Total Leads"

value="50K+"

description="AI discovered prospects"

/>



<StatCard

icon={<Send size={28}/>}

title="Emails Generated"

value="24K+"

description="Personalized AI emails"

/>



<StatCard

icon={<Megaphone size={28}/>}

title="Active Campaigns"

value="120"

description="Running campaigns"

/>



<StatCard

icon={<TrendingUp size={28}/>}

title="Conversion Rate"

value="38%"

description="Sales growth"

/>



</div>

{/* QUICK ACTIONS */}

<div className="mt-20">


<h2 className="
text-white
text-3xl
font-bold
mb-6
">

Quick Actions ⚡

</h2>



<div className="
grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-4
gap-6
">



<motion.div

whileHover={{scale:1.05}}

className="
bg-white/10
backdrop-blur-xl
border
border-white/20
rounded-3xl
p-7
cursor-pointer
hover:border-cyan-400
transition
"

>

<div className="
text-4xl
mb-5
">

🔍

</div>


<h3 className="text-white text-xl font-bold">

Find Leads

</h3>


<p className="text-gray-400 mt-3">

Search millions of potential customers using AI.

</p>


</motion.div>





<motion.div

whileHover={{scale:1.05}}

className="
bg-white/10
backdrop-blur-xl
border
border-white/20
rounded-3xl
p-5
cursor-pointer
hover:border-purple-400
transition
"

>

<div className="
text-4xl
mb-3
">

✉️

</div>


<h3 className="text-white text-xl font-bold">

Generate Email

</h3>


<p className="text-gray-400 mt-3">

Create personalized AI outreach emails.

</p>


</motion.div>






<motion.div

whileHover={{scale:1.05}}

className="
bg-white/10
backdrop-blur-xl
border
border-white/20
rounded-3xl
p-7
cursor-pointer
hover:border-blue-400
transition
"

>

<div className="
text-4xl
mb-5
">

🤖

</div>


<h3 className="text-white text-xl font-bold">

AI Assistant

</h3>


<p className="text-gray-400 mt-3">

Chat with your sales AI assistant.

</p>


</motion.div>






<motion.div

whileHover={{scale:1.05}}

className="
bg-white/10
backdrop-blur-xl
border
border-white/20
rounded-3xl
p-7
cursor-pointer
hover:border-green-400
transition
"

>

<div className="
text-4xl
mb-5
">

🚀

</div>


<h3 className="text-white text-xl font-bold">

New Campaign

</h3>


<p className="text-gray-400 mt-3">

Launch automated marketing campaigns.

</p>


</motion.div>




</div>
{/* ANALYTICS SECTION */}

<div className="mt-16 grid grid-cols-1 xl:grid-cols-2 gap-8">


{/* LEAD GROWTH */}

<div
className="
bg-white/10
backdrop-blur-xl
border border-white/20
rounded-3xl
p-8
shadow-xl
"
>

<h2 className="
text-white
text-2xl
font-bold
mb-6
">

Lead Growth Analytics 📈

</h2>


<ResponsiveContainer width="100%" height={300}>

<LineChart data={salesData}>


<CartesianGrid strokeDasharray="3 3"/>


<XAxis 
dataKey="month"
stroke="white"
/>


<YAxis
stroke="white"
/>


<Tooltip/>


<Line

type="monotone"

dataKey="leads"

stroke="#22d3ee"

strokeWidth={4}

animationDuration={1500}

/>


</LineChart>


</ResponsiveContainer>


</div>





{/* CONVERSION */}

<div
className="
bg-white/10
backdrop-blur-xl
border border-white/20
rounded-3xl
p-8
shadow-xl
"
>


<h2 className="
text-white
text-2xl
font-bold
mb-6
">

Conversion Performance 🚀

</h2>



<ResponsiveContainer width="100%" height={300}>


<BarChart data={salesData}>


<CartesianGrid strokeDasharray="3 3"/>


<XAxis
dataKey="month"
stroke="white"
/>


<YAxis
stroke="white"
/>


<Tooltip/>


<Bar

dataKey="conversion"

fill="#6366f1"

radius={[10,10,0,0]}

/>


</BarChart>


</ResponsiveContainer>


</div>


</div>

</div>

</div>
</div>




)

}



function ActionCard({icon,title}){


return(


<motion.div

whileHover={{
scale:1.08
}}

className="
w-32
h-24
bg-white/10
backdrop-blur-xl
border
border-white/20
rounded-3xl
flex
flex-col
items-center
justify-center
gap-2
cursor-pointer
"

>


<div
className="
text-cyan-400
"
>

{icon}

</div>


<p
className="
text-sm
font-semibold
text-gray-200
text-center
"
>

{title}

</p>


</motion.div>


)

}



export default Dashboard;