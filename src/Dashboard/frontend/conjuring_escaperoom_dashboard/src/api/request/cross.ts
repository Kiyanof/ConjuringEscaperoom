const httpReq = async (url: string) => {
    try {
        const res = await fetch(`http://${url}`)
        console.log(res.json)
    } catch (error) {
        console.log(error)
    }
}

export const handleLED = (ip: string, index: number, state: boolean) => {
    const url = `${ip}/health?led=${index}&state=${state}`
    httpReq(url)
}

export const handleMissionTime = (ip: string, duration: number) => {
    const url = `${ip}/setduration?duration=${duration}`
    httpReq(url)
}

export const handleMissionStart = (ip: string) => {
    const url = `${ip}/start`
    httpReq(url)
}

export const handleMissionPause = (ip: string) => {
    const url = `${ip}/pause`
    httpReq(url)
}

export const handleMissionStop = (ip: string) => {
    const url = `${ip}/stop`
    httpReq(url)
}

export const handleBuzzerActive = (ip: string, state: boolean) => {
    const url = `${ip}/buzzer?active=${state}`
    httpReq(url)
}

export const handleChangeUUID = (ip: string, value: string) => {
    const url = `${ip}/uuid?newuuid=${value}`
    httpReq(url)
}

export const handleUUID = (ip: string, type: string, index: number, value: string) => {
    let url = ``
    switch (type) {
        case 'add': url = `${ip}/adduuid?uuid=${value}`;break;
        case 'remove': url = `${ip}/removeuuid?index=${index}`;break;
        case 'change': url = `${ip}/changeuuid?index=${index}&uuid=${value}`;break;
    }
    httpReq(url)
}

export const handleRSSI = (ip: string, type: string, index: number, value: string) => {
    let url = ``
    switch (type) {
        case 'add': url = `${ip}/addrssi?rssi=${value}`;break;
        case 'remove': url = `${ip}/removerssi?index=${index}`;break;
        case 'change': url = `${ip}/changerssi?index=${index}&rssi=${value}`;break;
    }
    httpReq(url)
}


