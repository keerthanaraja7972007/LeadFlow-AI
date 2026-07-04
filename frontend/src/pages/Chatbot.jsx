import { useState } from "react";
import { Send } from "lucide-react";
import api from "../services/api";

function Chatbot() {

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      type: "chat",
      text: "👋 Hello! I'm LeadFlow AI. How can I help you today?"
    }
  ]);

  const [generatedEmail, setGeneratedEmail] = useState("");
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);

  // ============================
  // CHAT
  // ============================

  const sendMessage = async () => {

    if (!message.trim()) return;

    const currentMessage = message;

    setMessages(prev => [
      ...prev,
      {
        sender: "user",
        type: "chat",
        text: currentMessage
      }
    ]);

    setMessage("");

    try {

      const response = await api.post("/chat", {
        message: currentMessage
      });

      console.log(response.data);

      // ================= CHAT =================

      if (response.data.type === "chat") {

        setMessages(prev => [
          ...prev,
          {
            sender: "ai",
            type: "chat",
            text: response.data.response
          }
        ]);

        return;
      }

      // ================= EMAIL =================

      if (response.data.type === "email") {

        setMessages(prev => [
          ...prev,
          {
            sender: "ai",
            type: "chat",
            text: response.data.response
          }
        ]);

        return;
      }

      // ================= LEAD SEARCH =================

      if (response.data.type === "lead_search") {

        if (!response.data.results || response.data.results.length === 0) {

          setMessages(prev => [
            ...prev,
            {
              sender: "ai",
              type: "chat",
              text: "❌ No matching leads found."
            }
          ]);

          return;
        }

        setMessages(prev => [
          ...prev,
          {
            sender: "ai",
            type: "lead_search",
            leads: response.data.results
          }
        ]);

      }

    }

    catch (error) {

      console.log(error);

      setMessages(prev => [
        ...prev,
        {
          sender: "ai",
          type: "chat",
          text: "❌ Something went wrong."
        }
      ]);

    }

  };

  // ============================
  // GENERATE EMAIL
  // ============================

  const generateEmail = async (lead) => {

    try {

      const response = await api.post("/generate-message", {

        name: lead.name,
        company: lead.company,
        job_title: lead.job_title

      });

      setGeneratedEmail(response.data.generated_message);
      setSelectedLead(lead);
      setShowEmailModal(true);

    }

    catch (error) {

      console.log(error);

      alert("Failed to generate email.");

    }

  };

  // ============================
  // SEND EMAIL
  // ============================

  const sendEmail = async (lead) => {

    try {

      await api.post("/send-email", {

        to: lead.email,

        subject: "LeadFlow AI",

        message: generatedEmail

      });

      alert("✅ Email Sent Successfully!");

    }

    catch (error) {

      console.log(error);

      alert("Failed to send email.");

    }

  };

  // ============================
  // SAVE LEAD
  // ============================

  const saveLead = (lead) => {

    alert(`${lead.name} saved successfully.`);

  };

  return (

    <div className="ml-64 min-h-screen bg-[#020617] p-10">

      {/* Header */}

      <h1 className="text-5xl font-black text-white">

        AI Assistant 🤖

      </h1>

      <p className="text-gray-400 mt-3 text-xl">

        Chat with LeadFlow AI to search leads, generate emails and answer your questions.

      </p>

      {/* Chat Container */}

      <div
        className="
        mt-10
        bg-white/10
        backdrop-blur-xl
        border
        border-white/20
        rounded-3xl
        h-[600px]
        flex
        flex-col
      "
      >

        {/* Messages */}

        <div className="flex-1 overflow-y-auto p-6 space-y-4">

          {messages.map((msg, index) => (

            <div
              key={index}
              className={`flex ${
                msg.sender === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              <div
                className={`max-w-[70%] rounded-2xl px-5 py-4 ${
                  msg.sender === "user"
                    ? "bg-cyan-600 text-white"
                    : "bg-gray-800 text-gray-200"
                }`}
              >

                {msg.type === "lead_search" ? (

                  <div className="space-y-5">

                    {msg.leads.map((lead, index) => (

                      <div
                        key={index}
                        className="bg-black/30 rounded-2xl p-5 border border-cyan-500"
                      >

                        <h2 className="text-xl font-bold text-cyan-400">

                          👤 {lead.name}

                        </h2>

                        <p>{lead.job_title}</p>

                        <p>🏢 {lead.company}</p>

                        <p>📍 {lead.location}</p>

                        <p>📧 {lead.email || "Not Available"}</p>

                        <p>⭐ {lead.score}</p>

                        <p>🔥 {lead.status}</p>

                        <div className="flex gap-3 mt-4">

                          <a
                            href={lead.linkedin_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 px-4 py-2 rounded-xl"
                          >
                            View LinkedIn
                          </a>

                          <button
                            onClick={() => generateEmail(lead)}
                            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-xl"
                          >
                            Generate Email
                          </button>

                          <button
                            onClick={() => saveLead(lead)}
                            className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-xl"
                          >
                            Save Lead
                          </button>
                        </div>

                      </div>

                    ))}

                  </div>

                ) : (

                  <p>{msg.text}</p>

                )}

              </div>

            </div>

          ))}

        </div>

        {/* Input */}

        <div className="border-t border-white/20 p-5 flex gap-4">

          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            placeholder="Ask LeadFlow AI..."
            className="
              flex-1
              bg-black/30
              text-white
              rounded-2xl
              px-5
              py-4
              outline-none
            "
          />

          <button
            onClick={sendMessage}
            className="
              bg-cyan-500
              hover:bg-cyan-600
              px-6
              rounded-2xl
              text-white
            "
          >
            <Send />
          </button>

        </div>

      </div>

      {/* ================= EMAIL MODAL ================= */}

      {showEmailModal && (

        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

          <div className="bg-[#111827] w-[700px] rounded-3xl p-8 border border-cyan-500 shadow-2xl">

            <h2 className="text-3xl font-bold text-cyan-400 mb-6">

              📧 Generated Email

            </h2>

            <div className="bg-black/30 rounded-2xl p-5 h-[300px] overflow-y-auto">

              <pre className="whitespace-pre-wrap text-gray-300">

                {generatedEmail}

              </pre>

            </div>

            <div className="flex justify-end gap-4 mt-6">

              <button
                onClick={() => setShowEmailModal(false)}
                className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-xl"
              >
                Close
              </button>

              <button
                onClick={() => sendEmail(selectedLead)}
                className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl"
              >
                 Send Email
              </button>

            </div>

          </div>

        </div>

      )}

    </div>

  );

}

export default Chatbot;