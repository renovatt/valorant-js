export const fetchAgents = async () => {
    const fetchA = await fetch(`https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=pt-BR`)
    if (fetchA.status === 200) {
        const response = await fetchA.json()
        return response
    }
    
}

fetchAgents()

export const fetchWeapons = async () => {
    const fetchW = await fetch(`https://valorant-api.com/v1/weapons?language=pt-BR`)
    if (fetchW.status === 200) {
        const response = await fetchW.json()
        return response
    }
}

fetchWeapons()

export const fetchGear = async () => {
    const fetchG = await fetch(`https://valorant-api.com/v1/gear?language=pt-BR`)
    if (fetchG.status === 200) {
        const response = await fetchG.json()
        return response
    }
    
}

fetchGear()

export const fetchMaps = async () => {
    const fetchM = await fetch(`https://valorant-api.com/v1/maps?language=pt-BR`)
    if (fetchM.status === 200) {
        const response = await fetchM.json()
        return response
    }
}

fetchMaps()