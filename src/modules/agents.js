import { fetchAgents } from "./fetchs.js"
import { character } from "./consts.js"


export const iconCharRender = async () => {
    const fetch = await fetchAgents()
    const response = fetch.data
    const charList = response.map(item =>
        `<div class="card-char">
            <div class="card-char-img">
                <img src="${item.displayIcon}" alt="${item.displayName}">
            </div>

            <div class="card-char-check">
                <span class="card-char-name">${item.displayName}</span>
                <span class="card-char-go" id="${item.uuid}" data-name="${item.displayName}">Ver Mais</span>
            </div>
        </div>`)
    character.innerHTML = charList.join('')
}