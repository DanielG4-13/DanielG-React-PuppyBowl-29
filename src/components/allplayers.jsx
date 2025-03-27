import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../API";
import PlayerDetails from "./singlePlayer";
import { fetchNewPlayer } from "../API";

const AllPlayers = () => {
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState(null);
    const [searchParam, setSearchParam] = useState("");
    const [selectedPlayer, setSelectedPlayer] = useState(null); 
    const [newPlayer, setNewPlayer] = useState(""); 
    const [name, setName] = useState(""); 
    const [breed, setbreed] = useState(""); 
    const [imgUrl, setimgUrl] = useState(""); 

    useEffect(() => {
        async function getAllPlayers() {
            try {
                const APIResponse = await fetchAllPlayers();
                if (APIResponse.success) {
                    setPlayers(APIResponse.data.players);
                } else {
                    setError(APIResponse.error);
                }
            } catch (error) {
                console.error(error);
            }
        }
        getAllPlayers();
    }, []);

    const playersToDisplay = searchParam
        ? players.filter((player) =>
              player.name.toLowerCase().includes(searchParam.toLowerCase())
          )
        : players;

    const handleViewPlayer = (player) => {
        setSelectedPlayer(player); 
    };

    const handleBackToList = () => {
        setSelectedPlayer(null); 
    };


    const handleAddPlayer = async () => {
        try {
            const newPlayer= {name, breed, imgUrl}
            const addedPlayer = await fetchNewPlayer(newPlayer);
            console.log("Player added successfully:", addedPlayer);
            setNewPlayer(addedPlayer); 
        } catch (error) {
            console.error("Failed to add player:", error);
        }
    };

    const handleNewPlayerChange = (e) => {
        const { name, value } = e.target.name;
        setNewPlayer( player => ({
            ...player,
            [name]: value,
        }));
    };

    const handleDeletePlayer = (id) => {
        setPlayers(players.filter((player) => player.id !== id));
    };

    return (
        <div>
            {selectedPlayer ? (
             
                <div>
                    <button onClick={handleBackToList}>Back to List</button>
                    <PlayerDetails player={selectedPlayer} />
                </div>
            ) : (
              
                <div>
                    <div>
                        <label>
                            Search:{" "}
                            <input
                                type="text"
                                placeholder="search"
                                value={searchParam}
                                onChange={(e) => setSearchParam(e.target.value)}
                            />
                        </label>
                    </div>

                    <div>
                        <form>
                            <h3>Add New Player</h3>
                        <input
                            type="text"
                            name="name"
                            placeholder="Player Name"
                            value={newPlayer.name}
                            onChange={handleNewPlayerChange}
                        />
                         <input
                            type="text"
                            name="breed"
                            placeholder="Player Breed"
                            value={newPlayer.breed}
                            onChange={handleNewPlayerChange}
                        />
                         {/* <input
                            type="text"
                            name="id"
                            placeholder="Player ID"
                            value={newPlayer.id}
                            onChange={handleNewPlayerChange}
                        />
                        <input
                            type="text"
                            name="status"
                            placeholder="Player Status"
                            value={newPlayer.status}
                            onChange={handleNewPlayerChange}
                        /> */}
                        <input
                        type="img"
                        name="imgUrl"
                        placeholder="Player Image"
                        value={newPlayer.imgUrl}
                        onChange={handleNewPlayerChange}
                        />
                        <button onClick={handleAddPlayer}>Add Player</button>
                        </form>
                        
                    </div>

                    {playersToDisplay.map((player) => (
                        <div key={player.id}>
                            <h3>{player.name}</h3>
                            <button onClick={() => handleViewPlayer(player)}>
                                View Details
                            </button>
                            <button
                                onClick={() => handleDeletePlayer(player.id)}>
                                Delete Player
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllPlayers;
