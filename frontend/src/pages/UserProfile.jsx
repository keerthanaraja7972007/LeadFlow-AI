import { useEffect, useState } from "react";
import api from "../services/api";

function UserProfile() {

    const [user, setUser] = useState(null);

    useEffect(() => {

        getProfile();

    }, []);

    const getProfile = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await api.get(
                "/profile",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setUser(response.data);

        }

        catch (error) {

            console.log(error);

        }

    };

    if (!user) {

        return (

            <div className="text-white text-center mt-20">

                Loading...

            </div>

        );

    }

    return (

        <div className="min-h-screen bg-slate-950 flex justify-center items-center">

            <div className="bg-slate-900 w-[500px] rounded-3xl p-10">

                <div className="flex justify-center">

                    <img
                        src="https://ui-avatars.com/api/?name=User"
                        alt=""
                        className="w-28 h-28 rounded-full"
                    />

                </div>

                <h1 className="text-white text-3xl font-bold text-center mt-5">

                    User Profile

                </h1>

                <div className="mt-8 space-y-5">

                    <div>

                        <p className="text-gray-400">

                            Name

                        </p>

                        <h2 className="text-white text-xl">

                            {user.name}

                        </h2>

                    </div>

                    <div>

                        <p className="text-gray-400">

                            Email

                        </p>

                        <h2 className="text-white text-xl">

                            {user.email}

                        </h2>

                    </div>

                    <div>

                        <p className="text-gray-400">

                            Status

                        </p>

                        <h2 className="text-green-400">

                            {user.is_verified ? "Verified ✅" : "Not Verified"}

                        </h2>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default UserProfile;