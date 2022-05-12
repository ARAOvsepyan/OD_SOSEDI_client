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
                <title> ОД «СОСЕДИ» | Новости</title>
            </Helmet>
            <h2 className='blog_page_title'>Последние новости</h2>
            <p>Здесь публикуются самые интересные новости из наших каналов</p>
            <BlogList/>
        </main>
    )
}

export default Blog;