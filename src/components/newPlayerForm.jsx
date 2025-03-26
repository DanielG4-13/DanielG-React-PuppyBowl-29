import { fetchAllPlayers } from "../API";
import { useState, useEffect } from "react";

// export const newPlayerForm = fetchAllPlayers.map((player) => {
//     const card = document.createElement("li");

//     card.innerHTML = `
//     <h3>${player.id}</h3>
//     <h4>${player.name}</h4>
//     <h4>${player.breed}</h4>
//     <p>${player.status}</p> 
//     <img src=${player.imageUrl}>
//     <button class="viewButton" data-id="${player.id}">VIEW</button>
//     <button class="deleteButton" data-id="${player.id}">DELETE</button>`;
// })