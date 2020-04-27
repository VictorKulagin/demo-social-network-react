import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXdRGJ5LyZndQzya4xLQwtn5CXzuMEMq0s5zxXLvRlYM9t1mUG'/>
            { props.message }
            <div>
                <span>like</span> { props.likesCount }
            </div>
        </div>
    )

}

export default Post;