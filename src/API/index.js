const COHORT = "2502-FTB-ET-WEB-FT"
const baseURL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}`;

export async function fetchAllPlayers() {
    try {
        const response = await fetch(`${baseURL}/players`);
        const result= await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}
export async function fetchSinglePlayer(id) {
    try {
        const response = await fetch(`${baseURL}/players/${id}`)
        
        const result= await response.json();
        
        return result
    } catch (error) {
        console.error(error)
    }
}
export async function fetchNewPlayer(player) {
    try {
        const response= await fetch(`${baseURL}/players`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(player),
        })
        const result = await response.json();
        console.log(result);
        return result
        
    } catch (error) {
        console.error(error)
    }
    
}