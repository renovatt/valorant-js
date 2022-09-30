import { fetchAgents, fetchWeapons, fetchGear, fetchMaps } from './modules/fetchs.js'
import { a_home, a_agents, a_weapons, a_gears, a_maps } from './modules/consts.js'
import { m_home, m_agents, m_weapons, m_gears, m_maps } from './modules/consts.js'
import { open_menu, close_menu } from './modules/consts.js'
import { header, home, agents, weapons, gears, maps, footer } from './modules/consts.js'
import { character, content_modal, back, guns, gear, map } from './modules/consts.js'
import { role_name, role_icon, char_name, char_desc } from './modules/consts.js'
import { abilities_slot_0, abilities_slot_0_displayName, abilities_slot_0_description } from './modules/consts.js'
import { abilities_slot_1, abilities_slot_1_displayName, abilities_slot_1_description } from './modules/consts.js'
import { abilities_slot_2, abilities_slot_2_displayName, abilities_slot_2_description } from './modules/consts.js'
import { abilities_slot_3, abilities_slot_3_displayName, abilities_slot_3_description } from './modules/consts.js'
import { fullPortrait, sound, sound_2, voice } from './modules/consts.js'

let char_uuid

const iconCharRender = async () => {
    const fetch = await fetchAgents()
    const response = fetch.data
    const charList = response.map(item =>
        `<div class="card">
            <span class="card-name">${item.displayName}</span>
            <img id="${item.uuid}" src="${item.displayIcon}" alt="${item.displayName}">
        </div>`)
    character.innerHTML = charList.join('')
}

iconCharRender()

//função que cria e abre o modal
const openModal = async () => {
    const data = await fetchAgents()
    const response = data.data
    const search = response.find(item => item.uuid === char_uuid)
    if (search) {

        role_name.innerHTML = `${search.role.displayName}`
        role_icon.src = `${search.role.displayIcon}`

        char_name.innerHTML = `${search.displayName}`
        char_desc.innerHTML = `${search.description}`

        abilities_slot_0.src = `${search.abilities[0].displayIcon}`
        abilities_slot_0_displayName.innerHTML = `${search.abilities[0].displayName}`
        abilities_slot_0_description.innerHTML = `${search.abilities[0].description}`

        abilities_slot_1.src = `${search.abilities[1].displayIcon}`
        abilities_slot_1_displayName.innerHTML = `${search.abilities[1].displayName}`
        abilities_slot_1_description.innerHTML = `${search.abilities[1].description}`

        abilities_slot_2.src = `${search.abilities[2].displayIcon}`
        abilities_slot_2_displayName.innerHTML = `${search.abilities[2].displayName}`
        abilities_slot_2_description.innerHTML = `${search.abilities[2].description}`

        abilities_slot_3.src = `${search.abilities[3].displayIcon}`
        abilities_slot_3_displayName.innerHTML = `${search.abilities[3].displayName}`
        abilities_slot_3_description.innerHTML = `${search.abilities[3].description}`

        fullPortrait.src = `${search.fullPortrait}`
        voice.src = `${search.voiceLine.mediaList[0].wave}`

        header.style.display = "none"
        home.style.display = "none"
        agents.style.display = "none"
        weapons.style.display = "none"
        gears.style.display = "none"
        maps.style.display = "none"
        character.style.display = "none"
        footer.style.display = "none"
        content_modal.style.display = "flex"
    }
}

const iconGunsRender = async () => {
    const fetch = await fetchWeapons()
    const response = fetch.data
    const gunsList = response.map(item => 
            
            `<div class="card-guns">
            <span class="name">${item.displayName}</span>
            <img id="${item.uuid}" src="${item.displayIcon}" alt="${item.displayName}">
           
            <section class="guns-context">
                    ${item.shopData?.categoryText ? (
                `<div class="info">Categoria:<span>${item.shopData?.categoryText}</span></div>`
                    ) : '<div class="info"></div>'}
                    
                    ${item.weaponStats?.fireRate ? (
                `<div class="info">Taxa de Incêndio:<span>${item.weaponStats?.fireRate}</span></div>`
                    ) : '<div class="info"></div>'}
                    
                    ${item.weaponStats?.magazineSize ? (
                `<div class="info">Tempo da Revista:<span>${item.weaponStats?.magazineSize}</span></div>`
                    ) : '<div class="info"></div>'}
                    
                    ${item.weaponStats?.reloadTimeSeconds ? (
                `<div class="info">Tempo de Recarga:<span>${item.weaponStats?.reloadTimeSeconds}</span></div>`
                    ) : '<div class="info"></div>'}
                    
                    ${item.shopData?.cost ? (
                `<div class="info">Custo:<span>${item.shopData?.cost}</span></div>`
                    ) : '<div class="info"></div>'}
            </section>

            <section class="guns-info-dmg">

                ${item.weaponStats?.damageRanges[0]?.rangeStartMeters || item.weaponStats?.damageRanges[0]?.rangeEndMeters ?`
                <section class="guns-dmg">
                        <div class="info"><span>${item.weaponStats?.damageRanges[0]?.rangeStartMeters} -
                            ${item.weaponStats?.damageRanges[0]?.rangeEndMeters}m</span>
                        </div>` : '<div class="info"></div>'
                        }

                    <section class="guns-desc">
                        ${item.weaponStats?.damageRanges[0]?.headDamage.toFixed(2) ? 
                        `<div class="info">Cabeça:<span>${item.weaponStats?.damageRanges[0]?.headDamage.toFixed(2)}
                        </span></div>` : '<div class="info"></div>' }

                        ${item.weaponStats?.damageRanges[0]?.bodyDamage.toFixed(2) ?
                        `<div class="info">Corpo:<span>${item.weaponStats?.damageRanges[0]?.bodyDamage.toFixed(2)}
                        </span></div>` : '<div class="info"></div>' }

                        ${item.weaponStats?.damageRanges[0]?.legDamage.toFixed(2) ?
                        `<div class="info">Perna:<span>${item.weaponStats?.damageRanges[0]?.legDamage.toFixed(2)}
                        </span></div>` : '<div class="info"></div>' }
                    </section>
                </section>

                ${item.weaponStats?.damageRanges[1]?.rangeStartMeters || item.weaponStats?.damageRanges[1]?.rangeEndMeters ? `
                <section class="guns-dmg">
                        <div class="info"><span>${item.weaponStats?.damageRanges[1]?.rangeStartMeters} -
                            ${item.weaponStats?.damageRanges[1]?.rangeEndMeters}m</span>
                        </div>` : '<div class="info"></div>'
                        }

                    <section class="guns-desc">
                        ${item.weaponStats?.damageRanges[1]?.headDamage.toFixed(2) ?
                         `<div class="info">Cabeça:<span>${item.weaponStats?.damageRanges[1]?.headDamage.toFixed(2)}
                        </span></div>` : '<div class="info"></div>'}

                        ${item.weaponStats?.damageRanges[1]?.bodyDamage.toFixed(2) ?
                        `<div class="info">Corpo:<span>${item.weaponStats?.damageRanges[1]?.bodyDamage.toFixed(2)}
                        </span></div>` : '<div class="info"></div>'}

                        ${item.weaponStats?.damageRanges[1]?.legDamage.toFixed(2) ?
                        `<div class="info">Perna:<span>${item.weaponStats?.damageRanges[1]?.legDamage.toFixed(2)}
                        </span></div>` : '<div class="info"></div>' }
                    </section>
                </section>
            </section>
        </div>
        `)
    guns.innerHTML = gunsList.join('')
}

iconGunsRender()

const gearRender = async () => {
    const fetch = await fetchGear()
    const response = fetch.data
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

gearRender()

const mapsRender = async () => {
    const fetch = await fetchMaps()
    const response = fetch.data
    const mapList = response.map(item =>
        `<div class="card-maps">
                <img id="${item.uuid}" src="${item.splash}" alt="${item.displayName}">
                <span class="card-map-name">${item.displayName}</span>
        </div>`)
    map.innerHTML = mapList.join('')
}

mapsRender()

//Eventos de controle e modal
character.addEventListener('click', (event) => {
    char_uuid = event.target.id
    openModal()
})

back.addEventListener('click', () => {
    header.style.display = "flex"
    agents.style.display = "flex"
    character.style.display = "flex"
    home.style.display = "none"
    content_modal.style.display = "none"
    weapons.style.display = "none"
    gears.style.display = "none"
    maps.style.display = "none"
    footer.style.display = "flex"
})

sound.addEventListener('click', () => {
    voice.play()
})

sound_2.addEventListener('click', () => {
    voice.play()
})

//Eventos de controle das telas
a_home.addEventListener('click', () => {
    home.style.display = "flex"
    agents.style.display = "none"
    weapons.style.display = "none"
    gears.style.display = "none"
    maps.style.display = "none"
})

a_agents.addEventListener('click', () => {
    home.style.display = "none"
    agents.style.display = "flex"
    weapons.style.display = "none"
    gears.style.display = "none"
    maps.style.display = "none"
})

a_weapons.addEventListener('click', () => {
    home.style.display = "none"
    agents.style.display = "none"
    weapons.style.display = "flex"
    gears.style.display = "none"
    maps.style.display = "none"
})

a_gears.addEventListener('click', () => {
    home.style.display = "none"
    agents.style.display = "none"
    weapons.style.display = "none"
    gears.style.display = "flex"
    maps.style.display = "none"
})

a_maps.addEventListener('click', () => {
    home.style.display = "none"
    agents.style.display = "none"
    weapons.style.display = "none"
    gears.style.display = "none"
    maps.style.display = "flex"
})

//Menu mobile
open_menu.addEventListener('click', () => {
    document.getElementById('menu-mobile').style.width = '100%'
})

close_menu.addEventListener('click', () => {
    document.getElementById('menu-mobile').style.width = '0'
})

//Eventos de controle das telas mobile
m_home.addEventListener('click', () => {
    document.getElementById('menu-mobile').style.width = '0'
    home.style.display = "flex"
    agents.style.display = "none"
    weapons.style.display = "none"
    gears.style.display = "none"
    maps.style.display = "none"
})

m_agents.addEventListener('click', () => {
    document.getElementById('menu-mobile').style.width = '0'
    home.style.display = "none"
    agents.style.display = "flex"
    weapons.style.display = "none"
    gears.style.display = "none"
    maps.style.display = "none"
})

m_weapons.addEventListener('click', () => {
    document.getElementById('menu-mobile').style.width = '0'
    home.style.display = "none"
    agents.style.display = "none"
    weapons.style.display = "flex"
    gears.style.display = "none"
    maps.style.display = "none"
})

m_gears.addEventListener('click', () => {
    document.getElementById('menu-mobile').style.width = '0'
    home.style.display = "none"
    agents.style.display = "none"
    weapons.style.display = "none"
    gears.style.display = "flex"
    maps.style.display = "none"
})

m_maps.addEventListener('click', () => {
    document.getElementById('menu-mobile').style.width = '0'
    home.style.display = "none"
    agents.style.display = "none"
    weapons.style.display = "none"
    gears.style.display = "none"
    maps.style.display = "flex"
})