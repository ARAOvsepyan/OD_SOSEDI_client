import {$host} from './index';

export const fetchAdress = async (address) => {
    const {data} = await $host.get('api/adress/?adress=' + address)
    return data
}