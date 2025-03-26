import { useState, useEffect } from "react";
import { fetchSinglePlayer } from "../API";

const PlayerDetails = ({ player}) => {
    
    const [playerData, setPlayerData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchPlayerDetails() {
            try {
                const result = await fetchSinglePlayer(player.id)
                ;
                console.log(result)
                if (result.success) {
                    setPlayerData(result.data.player); 
                } else {
                    setError(result.error);
                }
            } catch (error) {
                setError("An error occurred");
                console.error(error);
            }
        }

        fetchPlayerDetails();
    }, [player?.id]); 
    if (error) {
        return <p style={{ color: "red" }}>Error: {error}</p>;
    }
    if (!playerData) {
        return <p>Loading player details...</p>;
    }
    else {return (
        <div>
            <h2>Player Details</h2>
            <p><strong>Name:</strong> {playerData.name}</p>
            <p><strong>Breed:</strong> {playerData.breed}</p>
            <p><strong>ID:</strong> {playerData.id}</p>
            <p><strong>Status:</strong> {playerData.status}</p>
        </div>
    );}
    
};

export default PlayerDetails;
