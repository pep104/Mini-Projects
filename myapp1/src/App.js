import React from "react";
import { useState } from "react/cjs/react.development";
import { useRef } from "react";
//import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/buttons/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
//import ClassCounter from "./components/ClassCounter";
//import Counter from "./components/Counter";
import './Styles/style.css'
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript 1', body: 'Description' },
    { id: 2, title: 'JavaScript 2', body: 'Description' },
    { id: 3, title: 'JavaScript 3', body: 'Description' },
  ])

  const [sort, setSort] = useState()

  const createNewPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createNewPost}/>
      <hr style={{ margin: '15px 0' }}></hr>
      <div>
        <MySelect
          value={sort}
          onChange={sort => setSort(sort)}
          defaultValue='Сортировка'
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'}
          ]}
        />
      </div>
      {posts.length !== 0
        ? <PostList remove={removePost} posts={posts} title='Список постов про JS'/>
        : <h1 style={{textAlign: 'center'}}>Постов нет</h1>
        }
    </div>
  );
}

export default App;
