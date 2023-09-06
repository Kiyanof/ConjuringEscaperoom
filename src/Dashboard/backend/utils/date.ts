export const getDate = (date: Date = new Date()) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return year + '-' + month + '-' + day + '_' + hour + ':' + minute + ':' + second 
}