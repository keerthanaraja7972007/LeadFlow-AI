import { useState } from "react";
import { motion } from "framer-motion";

function Settings() {

  const [name, setName] = useState("Username");
  const [email, setEmail] = useState("username@example.com");
  const [theme, setTheme] = useState("Dark");
  const [emailNotification, setEmailNotification] = useState(true);

const [aiRecommendation, setAiRecommendation] = useState(true);

const [campaignAlert, setCampaignAlert] = useState(false);

  const handleSave = () => {
    alert("Profile updated successfully!");
  };

  return (

    <div className="min-h-screen bg-[#020617] ml-64 p-10">

      {/* Header */}

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >

        <h1 className="text-5xl font-black text-white">
          Settings ⚙️
        </h1>

        <p className="text-gray-400 text-xl mt-3">
          Manage your account and application preferences
        </p>

      </motion.div>

      {/* Profile Card */}

      <motion.div

        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}

        className="
        mt-10
        bg-white/10
        backdrop-blur-xl
        border
        border-white/20
        rounded-3xl
        p-8
        "

      >

        <h2 className="text-white text-3xl font-bold mb-8">
          👤 Profile
        </h2>

        <div className="space-y-6">

          <div>

            <label className="text-gray-300 block mb-2">
              Full Name
            </label>

            <input

              value={name}

              onChange={(e) => setName(e.target.value)}

              className="
              w-full
              bg-slate-900
              text-white
              rounded-xl
              p-4
              outline-none
              border
              border-white/10
              "

            />

          </div>

          <div>

            <label className="text-gray-300 block mb-2">
              Email Address
            </label>

            <input

              value={email}

              onChange={(e) => setEmail(e.target.value)}

              className="
              w-full
              bg-slate-900
              text-white
              rounded-xl
              p-4
              outline-none
              border
              border-white/10
              "

            />

          </div>

          <button

            onClick={handleSave}

            className="
            mt-4
            px-8
            py-3
            rounded-xl
            bg-cyan-500
            text-white
            font-bold
            hover:bg-cyan-600
            transition
            "

          >

            Save Profile

          </button>

        </div>

      </motion.div>
      <motion.div

initial={{ opacity: 0, y: 30 }}

animate={{ opacity: 1, y: 0 }}

transition={{ delay: 0.2 }}

className="
mt-8
bg-white/10
backdrop-blur-xl
border
border-white/20
rounded-3xl
p-8
"

>

<h2 className="text-white text-3xl font-bold mb-8">

🌙 Theme

</h2>

<div className="flex items-center justify-between">

<div>

<p className="text-white text-xl">

Application Theme

</p>

<p className="text-gray-400 mt-2">

Choose your preferred appearance.

</p>

</div>

<select

value={theme}

onChange={(e) => setTheme(e.target.value)}

className="
bg-slate-900
text-white
rounded-xl
px-5
py-3
outline-none
border
border-white/20
"

>

<option>Dark</option>

<option>Light</option>

</select>

</div>

</motion.div>
<motion.div

initial={{ opacity: 0, y: 30 }}

animate={{ opacity: 1, y: 0 }}

transition={{ delay: 0.3 }}

className="
mt-8
bg-white/10
backdrop-blur-xl
border
border-white/20
rounded-3xl
p-8
"

>

<h2 className="text-white text-3xl font-bold mb-8">

🔔 Notifications

</h2>

<div className="space-y-6">

{/* Email Notifications */}

<div className="flex justify-between items-center">

<div>

<p className="text-white text-lg">

Email Notifications

</p>

<p className="text-gray-400">

Receive updates through email.

</p>

</div>

<input

type="checkbox"

checked={emailNotification}

onChange={() =>
setEmailNotification(!emailNotification)
}

className="w-6 h-6 accent-cyan-500"

/>

</div>

{/* AI Recommendations */}

<div className="flex justify-between items-center">

<div>

<p className="text-white text-lg">

AI Recommendations

</p>

<p className="text-gray-400">

Receive AI-generated suggestions.

</p>

</div>

<input

type="checkbox"

checked={aiRecommendation}

onChange={() =>
setAiRecommendation(!aiRecommendation)
}

className="w-6 h-6 accent-cyan-500"

/>

</div>

{/* Campaign Alerts */}

<div className="flex justify-between items-center">

<div>

<p className="text-white text-lg">

Campaign Alerts

</p>

<p className="text-gray-400">

Notify when campaign status changes.

</p>

</div>

<input

type="checkbox"

checked={campaignAlert}

onChange={() =>
setCampaignAlert(!campaignAlert)
}

className="w-6 h-6 accent-cyan-500"

/>

</div>

</div>

</motion.div>

    </div>

  );
}

export default Settings;