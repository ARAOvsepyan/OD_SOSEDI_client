import {$authHost, $host} from "./index";

export const createPost = async (blog) => {
    const {data} = await $authHost.post('api/blog', blog)
    return data
}

export const deletePost = async (title) => {
    const {data} = await $authHost.post('api/blog/' + title)
    return data
}

export const fetchBlog = async () => {
    const {data} = await $host.get('api/blog/')
    return data
}

export const fetchLastBlog = async () => {
    const {data} = await $host.get('api/blog/last' )
    return data
}

export const fetchBlogTitles = async () => {
    const {data} = await $authHost.get('api/blog/titles')
    return data
}