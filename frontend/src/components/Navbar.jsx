import { useNavigate } from "react-router-dom";
import { LogOut, UserCircle } from "lucide-react";

function Navbar() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");

        navigate("/");

    };

    return (

        <div className="w-full h-20 bg-slate-900 border-b border-slate-700 flex justify-between items-center px-8">

            <div>

                <h1 className="text-3xl font-bold text-cyan-400">

                    LeadFlow AI

                </h1>

            </div>

            <div className="flex items-center gap-6">

                <button

                    onClick={() => navigate("/profile")}

                    className="flex items-center gap-2 text-white hover:text-cyan-400"

                >

                    <UserCircle size={24} />

                    Profile

                </button>

                <button

                    onClick={logout}

                    className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"

                >

                    <LogOut size={20} />

                    Logout

                </button>

            </div>

        </div>

    );

}

export default Navbar;