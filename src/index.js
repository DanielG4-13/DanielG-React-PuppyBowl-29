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
