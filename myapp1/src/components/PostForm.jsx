import React from "react";
import MyButton from "./UI/buttons/MyButton";
import { useState } from "react";
import MyInput from "./UI/input/MyInput";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = { ...post, id: Date.now() }
        setPost({title: '', body: ''})
        create(newPost)
      }

    return(
        <form>
        <MyInput value={post.title} onChange={e => setPost({...post, title: e.target.value})} type='text' placeholder="Название поста"/>
        <MyInput value={post.body} onChange={e => setPost({...post, body: e.target.value})} type='text' placeholder="Описание поста"/>
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
    )
}

export default PostForm;