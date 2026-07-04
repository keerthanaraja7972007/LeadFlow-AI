import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Eye,
  Download,
  Trash2
} from "lucide-react";

import api from "../services/api";

function Campaigns() {

  const [campaigns, setCampaigns] = useState([]);
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  useEffect(() => {
    fetchCampaigns();
  }, []);

  useEffect(() => {

    const filtered = campaigns.filter((campaign) =>

      campaign.name
        ?.toLowerCase()
        .includes(search.toLowerCase())

      ||

      campaign.company
        ?.toLowerCase()
        .includes(search.toLowerCase())

      ||

      campaign.job_title
        ?.toLowerCase()
        .includes(search.toLowerCase())

    );

    setFilteredCampaigns(filtered);

  }, [search, campaigns]);



  const fetchCampaigns = async () => {

    try {

      const response = await api.get("/campaigns");

      setCampaigns(response.data);

      setFilteredCampaigns(response.data);

    }

    catch (error) {

      console.log(error);

    }

    finally {

      setLoading(false);

    }

  };
  const deleteCampaign = async (id) => {

  try {

    await api.delete(`/campaigns/${id}`);

    setCampaigns(
      campaigns.filter(
        (campaign) => campaign.id !== id
      )
    );

  }

  catch (error) {

    console.log(error);

  }

};

const downloadCampaign = (campaign) => {

  const csvContent =
`Campaign Name,Company,Job Title,Message
"${campaign.name}","${campaign.company}","${campaign.job_title}","${campaign.message}"`;

  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;"
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;

  link.download = `${campaign.name}.csv`;

  link.click();

  URL.revokeObjectURL(url);

};

  return (

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
          opacity: 0,
          y: -30
        }}

        animate={{
          opacity: 1,
          y: 0
        }}

      >

        <h1
          className="
          text-5xl
          font-black
          text-white
          "
        >

          Campaign Manager 📢

        </h1>

        <p
          className="
          text-gray-400
          text-xl
          mt-3
          "
        >

          Manage all your AI generated campaigns

        </p>

      </motion.div>


      {/* SEARCH BAR */}

      <div
        className="
        mt-10
        flex
        items-center
        bg-white/10
        backdrop-blur-xl
        border
        border-white/20
        rounded-2xl
        px-6
        py-4
        "
      >

        <Search className="text-cyan-400" />

        <input

          value={search}

          onChange={(e) =>
            setSearch(e.target.value)
          }

          placeholder="Search campaigns..."

          className="
          bg-transparent
          outline-none
          text-white
          ml-4
          w-full
          placeholder:text-gray-500
          "

        />

      </div>


      {/* TABLE */}

      <div
        className="
        mt-10
        bg-white/10
        backdrop-blur-xl
        rounded-3xl
        border
        border-white/20
        overflow-hidden
        "
      >

        <table className="w-full">

          <thead
            className="
            bg-cyan-600/20
            text-cyan-300
            "
          >

            <tr>

              <th className="p-5 text-left">

                Campaign

              </th>

              <th className="p-5 text-left">

                Company

              </th>

              <th className="p-5 text-left">

                Job Title

              </th>

              <th className="p-5 text-left">

                Status

              </th>

              <th className="p-5 text-center">

                Actions

              </th>

            </tr>

          </thead>

          <tbody>

            {

              loading ?

                (

                  <tr>

                    <td
                      colSpan="5"
                      className="
                      text-center
                      p-10
                      text-white
                      "
                    >

                      Loading Campaigns...

                    </td>

                  </tr>

                )

                :

                filteredCampaigns.length === 0 ?

                  (

                    <tr>

                      <td
                        colSpan="5"
                        className="
                        text-center
                        p-10
                        text-gray-400
                        "
                      >

                        No Campaigns Found

                      </td>

                    </tr>

                  )

                  :

                  (

                    filteredCampaigns.map((campaign) => (

                      <motion.tr

                        key={campaign.id}

                        whileHover={{
                          backgroundColor: "rgba(255,255,255,0.05)"
                        }}

                        className="
                        border-t
                        border-white/10
                        "

                      >

                        <td className="p-5 text-white">

                          {campaign.name}

                        </td>

                        <td className="p-5 text-gray-300">

                          {campaign.company}

                        </td>

                        <td className="p-5 text-gray-300">

                          {campaign.job_title}

                        </td>

                        <td className="p-5">

                          <span
                            className="
                            px-4
                            py-2
                            rounded-full
                            bg-green-500/20
                            text-green-400
                            text-sm
                            "
                          >

                            Draft

                          </span>

                        </td>

                        <td
                          className="
                          p-5
                          flex
                          justify-center
                          gap-4
                          "
                        >

                          <button

                          onClick={() => setSelectedCampaign(campaign)}

                          className="
                          text-cyan-400
                          hover:text-cyan-300
                          "

                          >

                          <Eye size={20} />

                          </button>

                          <button

onClick={() => downloadCampaign(campaign)}

className="
text-green-400
hover:text-green-300
"

title="Download"

>

<Download size={20}/>

</button>

                          <button

onClick={() => deleteCampaign(campaign.id)}

className="
text-red-400
hover:text-red-300
"

title="Delete"

>

<Trash2 size={20} />

</button>

                        </td>

                      </motion.tr>

                    ))

                  )

            }

          </tbody>

        </table>

      </div>
      {
selectedCampaign && (

<div
className="
fixed
inset-0
bg-black/60
flex
items-center
justify-center
z-50
"
>

<div
className="
bg-[#0f172a]
rounded-3xl
p-8
w-[700px]
max-w-[90%]
border
border-cyan-500/20
"
>

<h2
className="
text-3xl
font-bold
text-white
mb-6
"
>

Generated Email

</h2>

<p className="text-cyan-400 mb-3">

Campaign:
{selectedCampaign.name}

</p>

<div
className="
bg-slate-900
rounded-2xl
p-6
text-gray-300
leading-8
whitespace-pre-wrap
"
>

{selectedCampaign.message}

</div>

<button

onClick={() => setSelectedCampaign(null)}

className="
mt-8
px-8
py-3
rounded-xl
bg-cyan-500
text-white
font-bold
"

>

Close

</button>

</div>

</div>

)
}

    </div>

  );

}

export default Campaigns;