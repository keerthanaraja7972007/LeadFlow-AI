import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import api from "../services/api";

function GenerateEmail() {

  const [leads, setLeads] = useState([]);
  const [selectedLead, setSelectedLead] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const response = await api.get("/leads");
      setLeads(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const generateEmail = async () => {

  if (!selectedLead) {
    alert("Please select a lead");
    return;
  }

  const lead = leads.find(
    (item) => item.id === Number(selectedLead)
  );

  try {

    setLoading(true);

    const response = await api.post("/generate-message", {

      name: lead.full_name,

      company: lead.company_name,

      job_title: lead.job_title

    });

    setEmail(response.data.generated_message);

  } catch (error) {

    console.log(error);

  } finally {

    setLoading(false);

  }

};
const sendEmail = async () => {

  if (!selectedLead) {
    alert("Please select a lead");
    return;
  }

  const lead = leads.find(
    item => item.id === Number(selectedLead)
  );

  try {

    setSending(true);

    const response = await api.post("/send-email", {

      to: lead.email,

      subject: "Opportunity to Connect",

      message: email

    });

    alert(response.data.message);

  }

  catch(error){

    console.log(error);

    alert("Failed to send email.");

  }

  finally{

    setSending(false);

  }

};


  return (
    <div className="ml-64 min-h-screen bg-[#020617] p-10">

      <h1 className="text-5xl font-black text-white">
        AI Email Generator ✉️
      </h1>

      <p className="text-gray-400 mt-3 text-xl">
        Generate personalized outreach emails using Gemini AI.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8"
      >

        <h2 className="text-white text-2xl font-bold mb-6">
          Select Lead
        </h2>

        <select
          value={selectedLead}
          onChange={(e) => setSelectedLead(e.target.value)}
          className="
            w-full
            p-4
            rounded-2xl
            bg-black/30
            text-white
            border
            border-white/20
            outline-none
          "
        >

          <option value="">
            Choose a Lead
          </option>

          {leads.map((lead) => (
            <option key={lead.id} value={lead.id}>
              {lead.full_name} - {lead.company_name}
            </option>
          ))}

        </select>

        <button
  onClick={generateEmail}
  className="
    mt-6
    w-full
    py-4
    rounded-2xl
    bg-gradient-to-r
    from-cyan-500
    to-blue-600
    text-white
    font-bold
  "
>
  {loading ? "Generating..." : "Generate AI Email"}
</button>

{email && (

<div
className="
mt-8
bg-black/30
rounded-2xl
p-6
border
border-white/20
"
>

<h3 className="text-white text-xl font-bold mb-4">
Generated Email
</h3>

<div className="flex justify-between items-center mb-4">

<h3 className="text-white text-xl font-bold">
Generated Email
</h3>

<button

onClick={()=>{
navigator.clipboard.writeText(email);
alert("Email Copied!");
}}

className="
bg-cyan-500
hover:bg-cyan-600
text-white
px-5
py-2
rounded-xl
"

>

Copy

</button>

<button

onClick={sendEmail}

className="
mt-6
w-full
py-4
rounded-2xl
bg-gradient-to-r
from-green-500
to-emerald-600
text-white
font-bold
hover:scale-105
transition
"

>

{sending ? "Sending..." : "Send Email"}

</button>

</div>

<textarea
value={email}
onChange={(e)=>setEmail(e.target.value)}
rows={12}
className="
w-full
bg-transparent
text-gray-300
outline-none
resize-none
"
/>

<div
className="
mt-8
bg-white/10
border
border-white/20
rounded-2xl
p-6
"
>

<h3 className="text-white text-xl font-bold mb-4">

Email Preview

</h3>

<div
className="
bg-black/20
rounded-xl
p-6
text-gray-300
whitespace-pre-wrap
leading-8
"
>

{email}

</div>

</div>

<p className="text-gray-400 mt-3 text-right">

Characters: {email.length}

</p>

</div>

)}

      </motion.div>

    </div>
  );
}

export default GenerateEmail;