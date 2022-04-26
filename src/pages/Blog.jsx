import React, { useContext, useEffect } from 'react'
import { Helmet } from 'react-helmet';
import { Context } from '../index';
import BlogList from '../components/BlogList';
import {fetchBlog} from '../http/blogApi'
import '../css/blog.css'

const Blog = () => {
    const {blog} = useContext(Context)

    useEffect(() => {
        fetchBlog().then(data => {blog.setBlog(data.rows)})
    }, [])

    return (
        <main className='main_blog'>
            <Helmet>
                <title> ОД «СОСЕДИ» | Блог</title>
            </Helmet>
            <h2>Блог</h2>
            <p>*Текст который я не придумал)</p>
            <BlogList/>
        </main>
    )
}

export default Blog;