import React from 'react';
import '../css/blog.css'

const BlogItem = ({blog}) => {

    const click = (link) => {
        
    }

    return (
        <div class="card_blog">
            <div class="card__header_blog">
                <img src={process.env.REACT_APP_API_URL + blog.img} alt="card__image" class="card__image_blog" width="600"/>
            </div>
            <div class="card__body_blog">
                <h4>{blog.title}</h4>
                <p>{blog.main_text}</p>
            </div> 
        </div>
    );
};

export default BlogItem;