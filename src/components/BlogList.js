import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import BlogItem from "./BlogItem";
import '../css/blog.css'

const BlogList = observer(() => {
    const {blog} = useContext(Context)
    
    return (
        <div class="container_blog">   
            {blog.blog.map(blog =>
                <BlogItem key={blog.id} blog={blog}/>
            )}
        </div>
    );
});

export default BlogList;