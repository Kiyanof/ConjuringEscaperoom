import ipTables from "@/configs/ip"

const net = ipTables.protocol + ipTables.subnet

const send = async (id: number, overload: string = '') => {
    console.log(net+id+overload)

    try {
        const res = await fetch(net + id + overload)
        if(!res.ok){
            return false
        }
        return true
    } catch (error) {
        return false
    }
}

export const changeIpAPI = async (lastIP: string, newIP: string) => {
    try {
        const res = await fetch(ipTables.protocol + lastIP + "/setIP?newIP=" + newIP)
        if(!res.ok){
            return false
        }
        return true
    } catch (error) {
        return false
    }
}

export const changeBluUuidAPI = async (ip: string, uuid: string) => {
    try {
        const res = await fetch(ipTables.protocol + ip + "/uuid?newUuid=" + uuid)
        if(!res.ok){
            return false
        }
        return true
    } catch (error) {
        return false
    }
}

export const startAPI = async (id: number) => {
    return await send(id, '/start')
}

export const stopAPI = async (id: number) => {
    return await send(id, '/stop')
}

export const pauseAPI = async (id: number) => {
    return await send(id, '/pause')
}

export const buzzerActiveAPI = async (id: number, state: boolean) => {
    return await send(id, '/buzzer?active' + (state ? 1 : 0))
}

export const setDurationAPI = async (id: number, inp: number) => {
    return await send(id, '/setduration?duration=' + inp)
}

export const setBuzzerDelayAPI = async (id: number, inp: number) => {
    return await send(id, '/setBuzzerDelay?duration=' + inp)
}

export const setRSSIAPI = async (id: number, inp: number) => {
    return await send(id, '/setrssi?rssi=' + inp)
}

export const setHealthAPI = async (id: number, led: number, state: boolean) => {
    return await send(id, '/health?led=' + led + '&state=' + (state ? 1 : 0))
}

