import { fetchWeapons } from "./fetchs.js"
import { guns } from "./consts.js"

export const iconGunsRender = async () => {
    const fetchGuns = await fetchWeapons()
    const response = fetchGuns.data
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