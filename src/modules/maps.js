import { fetchMaps } from "./fetchs.js"
import { map } from "./consts.js"

export const mapsRender = async () => {
    const fetch = await fetchMaps()
    const response = fetch.data
    const mapList = response.map(item =>
        `<div class="card-maps">
                <img id="${item.uuid}" src="${item.splash}" alt="${item.displayName}">
                <span class="card-map-name">${item.displayName}</span>
        </div>`)
    map.innerHTML = mapList.join('')
}