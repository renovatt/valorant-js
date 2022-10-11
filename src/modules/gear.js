import { fetchGear } from "./fetchs.js"
import { gear } from "./consts.js"

export const gearRender = async () => {
    const fetchG = await fetchGear()
    const response = fetchG.data
    const gearList = response.map(item =>
        `<div class="gear-content">
            <div class="gear-desc">
                <div>Nome:<span>${item.displayName}</span></div>
                <div>Descrição:<span>${item.description}</span></div>
                <div>Categoria:<span>${item.shopData.categoryText}</span></div>
                <div>Custo:<span>${item.shopData.cost}</span></div>
            </div>
            <img src="${item.displayIcon}" alt="${item.displayName}">
        </div>`)
    gear.innerHTML = gearList.join('')
}