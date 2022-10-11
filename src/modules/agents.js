import { fetchAgents } from "./fetchs.js"
import { character } from "./consts.js"


export const iconCharRender = async () => {
    const fetch = await fetchAgents()
    const response = fetch.data
    const charList = response.map(item =>
        `<div class="card-char">
            <span class="card-char-name">${item.displayName}</span>
            <img id="${item.uuid}" src="${item.displayIcon}" alt="${item.displayName}" data-name="${item.displayName}">
        </div>`)
    character.innerHTML = charList.join('')
}