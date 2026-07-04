import {useState,useEffect} from "react";

import {motion} from "framer-motion";

import {
Search,
Filter,
Download,
Bookmark,
MapPin,
Building2,
ExternalLink
} from "lucide-react";
import api from "../services/api";



function SearchLeads(){


const [search,setSearch]=useState("");

const [leads,setLeads]=useState([]);

const [loading,setLoading]=useState(true);
const [location,setLocation]=useState("");

const [minScore,setMinScore]=useState("");
const [savedLeads, setSavedLeads] = useState(() => {

  const saved = localStorage.getItem("savedLeads");

  return saved ? JSON.parse(saved) : [];

});

// Fetch leads from backend

useEffect(()=>{

fetchLeads();

},[]);



const fetchLeads=async()=>{


try{


const response = await api.get("/leads");


console.log(response.data);


setLeads(response.data);


}

catch(error){

console.log(
"Error fetching leads:",
error
);

}


finally{

setLoading(false);

}


};

const saveLead = (lead) => {

  const alreadySaved = savedLeads.find(
    (item) => item.id === lead.id
  );

  if (alreadySaved) {

    alert("Lead already saved");

    return;

  }

  const updated = [...savedLeads, lead];

  setSavedLeads(updated);

  localStorage.setItem(
    "savedLeads",
    JSON.stringify(updated)
  );

  alert("Lead saved successfully");

};

const exportCSV = () => {

  const headers = [
    "Name",
    "Job Title",
    "Company",
    "Location",
    "Email",
    "Score"
  ];

  const rows = filteredLeads.map((lead) => [

    lead.full_name,

    lead.job_title,

    lead.company_name,

    lead.location,

    lead.email,

    lead.score

  ]);

  const csvContent = [

    headers,

    ...rows

  ]
  .map((row) => row.join(","))

  .join("\n");

  const blob = new Blob(
    [csvContent],
    {
      type: "text/csv;charset=utf-8;"
    }
  );

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;

  link.download = "leads.csv";

  link.click();

};

const searchLeads = async()=>{


try{

setLoading(true);


const response = await api.get(
"/search",
{

params:{

job:search,

location:location,

min_score:minScore

}

}

);


setLeads(response.data);


}

catch(error){

console.log(error);

}


finally{

setLoading(false);

}


};


// Frontend search filtering

const filteredLeads = leads.filter((lead)=>

lead.full_name
?.toLowerCase()
.includes(search.toLowerCase())

||

lead.company_name
?.toLowerCase()
.includes(search.toLowerCase())

||

lead.job_title
?.toLowerCase()
.includes(search.toLowerCase())

);



return(


<div
className="
min-h-screen
bg-[#020617]
ml-64
p-10
"
>



{/* HEADER */}


<motion.div

initial={{
opacity:0,
y:-30
}}

animate={{
opacity:1,
y:0
}}

>


<h1
className="
text-5xl
font-black
text-white
"
>

AI Lead Search 🔍

</h1>



<p
className="
text-gray-400
text-xl
mt-3
"
>

Find your next customer using Artificial Intelligence

</p>


</motion.div>





{/* SEARCH BAR */}


<div
className="
mt-10
flex
gap-4
"
>


<div
className="
flex-1
bg-white/10
backdrop-blur-xl
border
border-white/20
rounded-2xl
flex
items-center
px-6
"
>


<Search
className="text-cyan-400"
/>


<input


value={search}


onChange={(e)=>
setSearch(e.target.value)
}


placeholder="Search company, person, job title..."


className="
bg-transparent
outline-none
text-white
w-full
ml-4
py-5
placeholder:text-gray-500
"

/>


</div>




<button
onClick={searchLeads}

className="
px-8
rounded-2xl
bg-gradient-to-r
from-cyan-500
to-blue-600
text-white
font-bold
flex
items-center
gap-3
"

>


<Search/>

Search


</button>



</div>





{/* FILTER BUTTONS */}



<div
className="
flex
gap-4
mt-8
"
>


<button

className="
bg-white/10
border
border-white/20
px-5
py-3
rounded-xl
text-white
flex
gap-2
"

>


<Filter size={18}/>

Industry


</button>




<button

className="
bg-white/10
border
border-white/20
px-5
py-3
rounded-xl
text-white
"

>

Location

</button>




<button

className="
bg-white/10
border
border-white/20
px-5
py-3
rounded-xl
text-white
"

>

Company Size

</button>



</div>







{/* LOADING */}



{

loading &&

<h2
className="
text-white
text-2xl
mt-10
"
>

Loading Leads...

</h2>


}







{/* LEAD CARDS */}



<div

className="
grid
md:grid-cols-2
xl:grid-cols-3
gap-8
mt-10
"

>


{


filteredLeads.map((lead)=>(



<motion.div


key={lead.id}


whileHover={{
scale:1.05
}}



className="
bg-white/10
backdrop-blur-xl
border
border-white/20
rounded-3xl
p-7
"



>



<h2

className="
text-white
text-2xl
font-bold
"

>

{lead.full_name}


</h2>





<p

className="
text-cyan-400
mt-2
"

>

{lead.job_title}


</p>







<div

className="
mt-5
space-y-3
text-gray-300
"

>



<p
className="flex gap-3"
>

<Building2 size={18}/>


{lead.company_name}


</p>





<p
className="flex gap-3"
>

<MapPin size={18}/>


{lead.location}


</p>





<div className="flex items-center justify-between mt-5">


<div>

<p className="text-gray-400">

AI Lead Score

</p>


<p className="text-white text-3xl font-bold">

{lead.score}%

</p>


</div>



<div>


{

lead.score >= 90 ?

<span
className="
px-4
py-2
rounded-full
bg-red-500/20
text-red-400
font-bold
"
>

🔥 Hot Lead

</span>


:

lead.score >=70 ?

<span
className="
px-4
py-2
rounded-full
bg-yellow-500/20
text-yellow-300
font-bold
"
>

⚡ Warm Lead

</span>


:

<span
className="
px-4
py-2
rounded-full
bg-blue-500/20
text-blue-300
font-bold
"
>

❄️ Cold Lead

</span>


}


</div>


</div>





<p>

Email:

<span className="text-white">

{" "}
{lead.email}

</span>

</p>



</div>









<div

className="
flex
justify-between
mt-6
"

>

{
lead.linkedin_url &&

<a

href={lead.linkedin_url}

target="_blank"

className="
text-blue-400
flex
gap-2
items-center
hover:text-blue-300
"

>

<ExternalLink size={18}/>

LinkedIn

</a>

}

<button

onClick={() => saveLead(lead)}

className="
text-cyan-400
flex
gap-2
"

>

<Bookmark size={18}/>

Save

</button>






<button

onClick={exportCSV}

className="
text-green-400
flex
gap-2
"

>

<Download size={18}/>

CSV

</button>



</div>







</motion.div>



))


}





</div>





</div>



)


}


export default SearchLeads;