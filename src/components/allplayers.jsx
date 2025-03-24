import { useState, useEffect } from "react";
import { fetchAllPlayers} from "..";
import { data } from "react-router-dom";

const AllPlayers= () => {
const [players, setPlayers] = useState([]);
const [error, setError] = useState(null);
const [searchParam, setSearchParam]= useState("");

useEffect(() => {
    async function getAllplayers() {
        const APIResponse = await fetchAllPlayers();
        if (APIResponse.succes) {setPlayers(APIResponse.data.players);
        } else {setError(APIResponse.error);
    }
    }
    getAllplayers();
}, []);

const playersToDisplay= searchParam
    ? players.filter((player) => player.name.includes(searchParam))
    : players;
    return (
        <>
        <div>
            <label> 
                Search: <input 
                type="text"
                placeholder="search"
                onChange={(e) => setSearchParam(e.target.value)}/>
            </label>
        </div>

        {playersToDisplay.map((player) => {
            return <h3 key={player.id}>{player.name}</h3>;
        })}
        
        </>
    );
}
 
export default AllPlayers;