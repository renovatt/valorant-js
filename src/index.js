import { gearRender } from './modules/gear.js'
import { mapsRender } from './modules/maps.js'
import { iconCharRender } from './modules/agents.js'
import { iconGunsRender } from './modules/weapons.js'
import { fetchAgents, fetchSkills } from './modules/fetchs.js'

import { open_menu, close_menu } from './modules/consts.js'
import { a_home, a_agents, a_weapons, a_gears, a_maps } from './modules/consts.js'
import { m_home, m_agents, m_weapons, m_gears, m_maps } from './modules/consts.js'
import { header, home, agents, weapons, gears, maps, footer } from './modules/consts.js'

import { fullPortrait, sound, voice } from './modules/consts.js'
import { logo, character, content_modal, home_btn, back } from './modules/consts.js'
import { role_name, role_icon, char_name, char_desc, list_skills_img, skill_description } from './modules/consts.js'

let char_uuid
let checking_both_names
let saved_skill_name

iconCharRender()
iconGunsRender()
gearRender()
mapsRender()

const openModal = async () => {
    const data_agents = await fetchAgents()
    const data_skills = await fetchSkills()
    const response_agents = data_agents.data
    const response_skills = data_skills.result.data.allContentstackAgentList.nodes[0].agent_list
    const valorant_api_1 = response_agents.find(item => item.uuid === char_uuid)
    const valorant_api_2 = response_skills.find(item => item.title === checking_both_names)

    if (valorant_api_1) {

        role_name.innerHTML = `${valorant_api_1.role.displayName}`
        role_icon.src = `${valorant_api_1.role.displayIcon}`
        char_name.innerHTML = `${valorant_api_1.displayName}`
        char_desc.innerHTML = `${valorant_api_1.description}`
        fullPortrait.src = `${valorant_api_1.fullPortrait}`
        voice.src = `${valorant_api_1.voiceLine.mediaList[0].wave}`

        controlModalScreen()
    }

    if(valorant_api_2){

        const list_data_skills = [{
            name_skill_0: valorant_api_2.abilities[0].ability_name,
            name_skill_1: valorant_api_2.abilities[1].ability_name,
            name_skill_2: valorant_api_2.abilities[2].ability_name,
            name_skill_3: valorant_api_2.abilities[3].ability_name,
            
            description_skill_0: valorant_api_2.abilities[0].ability_description,
            description_skill_1: valorant_api_2.abilities[1].ability_description,
            description_skill_2: valorant_api_2.abilities[2].ability_description,
            description_skill_3: valorant_api_2.abilities[3].ability_description,

            video_skill_0: valorant_api_2.abilities[0].ability_video[0].video.file.url,   
            video_skill_1: valorant_api_2.abilities[1].ability_video[0].video.file.url,       
            video_skill_2: valorant_api_2.abilities[2].ability_video[0].video.file.url,
            video_skill_3: valorant_api_2.abilities[3].ability_video[0].video.file.url
        }]

        const list_skills = valorant_api_2.abilities
        
        const render_skills = list_skills.map( skill => 
           `<div>
                <img src= "${skill.ability_icon.url}" data-skill="${skill.ability_name}">
            </div>`).join('')
            list_skills_img.innerHTML = render_skills

        const zero_skill = list_data_skills.map(item => `
                    <div class="skills-desc">
                        <h4>${item.name_skill_0}</h4>
                        <p class="control">${item.description_skill_0}</p>
                    </div>

                    <div class="skills-video">
                        <video autoplay loop muted src="${item.video_skill_0}"></video>
                    </div>`)
                skill_description.innerHTML = zero_skill

            list_skills_img.addEventListener('click', (event) => {
                saved_skill_name = event.target.dataset.skill
                renderInfoSkills()
            })

            function renderInfoSkills(){
                const check_zero_skill = list_data_skills.find(item => item.name_skill_0 === saved_skill_name)
                const check_first_skill = list_data_skills.find(item => item.name_skill_1 === saved_skill_name)
                const check_second_skill = list_data_skills.find(item => item.name_skill_2 === saved_skill_name)
                const check_third_skill = list_data_skills.find(item => item.name_skill_3 === saved_skill_name)

                if(check_zero_skill){
                    const zero_skill = list_data_skills.map(item => `
                        <div class="skills-desc">
                            <h4>${item.name_skill_0}</h4>
                            <p class="control">${item.description_skill_0}</p>
                        </div>

                        <div class="skills-video">
                            <video autoplay loop muted src="${item.video_skill_0}"></video>
                        </div>`)
                    skill_description.innerHTML = zero_skill
                } 
                
                if(check_first_skill){
                    const first_skill = list_data_skills.map(item => `
                    <div class="skills-desc">
                        <h4>${item.name_skill_1}</h4>
                        <p class="control">${item.description_skill_1}</p>
                    </div>
                    
                    <div class="skills-video">
                        <video autoplay loop muted src="${item.video_skill_1}"></video>
                    </div>`)
                    skill_description.innerHTML = first_skill
                } 
                
                if(check_second_skill){
                    const second_skill = list_data_skills.map(item => `
                    <div class="skills-desc">
                        <h4>${item.name_skill_2}</h4>
                        <p class="control">${item.description_skill_2}</p>
                    </div>
                    
                    <div class="skills-video">
                        <video autoplay loop muted src="${item.video_skill_2}"></video>
                    </div>`)
                    skill_description.innerHTML = second_skill
                }
                
                if(check_third_skill){
                    const third_skill = list_data_skills.map(item => `
                    <div class="skills-desc">
                        <h4>${item.name_skill_3}</h4>
                        <p class="control">${item.description_skill_3}</p>
                    </div>
                    
                    <div class="skills-video">
                        <video autoplay loop muted src="${item.video_skill_3}"></video>
                    </div>`)
                    skill_description.innerHTML = third_skill
                }
            }
    }
}

function controlModalScreen(){
    window.scrollTo(0,0)
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

character.addEventListener('click', (event) => {
    char_uuid = event.target.id
    checking_both_names = event.target.dataset.name
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

logo.addEventListener('click', () => {
    home.style.display = "flex"
    agents.style.display = "none"
    weapons.style.display = "none"
    gears.style.display = "none"
    maps.style.display = "none"
})


home_btn.addEventListener('click', () => {
    home.style.display = "none"
    agents.style.display = "flex"
    weapons.style.display = "none"
    gears.style.display = "none"
    maps.style.display = "none"
})

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

open_menu.addEventListener('click', () => {
    document.getElementById('menu-mobile').style.width = '100%'
})

close_menu.addEventListener('click', () => {
    document.getElementById('menu-mobile').style.width = '0'
})

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