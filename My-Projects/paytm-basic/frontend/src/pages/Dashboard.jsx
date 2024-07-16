import axios from "axios";
import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/User";

export const Dashboard = () => {
    const [balance, setBalance] = useState(null);

    const getBalance = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("authorization")
                }
            });
            setBalance(parseFloat(response.data.balance).toFixed(2));
        } catch (error) {
            console.error("Error fetching balance:", error);
        }
    };

    useEffect(() => {
        getBalance();
    }, []);

    return (
        <div>
            <Appbar />
            <div className="m-8">
                {balance !== null ? (
                    <Balance value={balance} />
                ) : (
                    <p>Loading balance...</p>
                )}
                <Users />
            </div>
        </div>
    );
};
