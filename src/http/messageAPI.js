import {$authHost, $host} from "./index";

export const createMessage = async (message) => {
    const {data} = await $host.post('api/message', message)
    return data
}

export const messageIsRead = async (id) => {
    const {data} = await $authHost.post('api/message/read', id)
    return data
}

export const fetchMessage = async () => {
    const {data} = await $authHost.get('api/message' )
    return data
}


export const fetchNoReadMessage = async () => {
    const {data} = await $authHost.get('api/message/no_read' )
    return data
}