import { useState, useMemo } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/forms/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS", body: "ffebout js" },
    { id: 2, title: "GO", body: "nnbout golang" },
    { id: 3, title: "Py", body: "about python" },
  ]);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  const removePost = (postToDelete) => {
    setPosts(posts.filter((post) => post.id !== postToDelete.id));
  };

  return (
    <>
      <div className="app">
        <MyInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ width: "300px", marginLeft: "20px" }}
          placeholder="Поиск"
        />
        <PostForm create={createPost} />
        <hr style={{ width: "300px", marginBottom: "20px" }} />
        <MySelect
          defaultValue={"Сортировать"}
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
          ]}
        />
        <PostList
          remove={removePost}
          posts={posts}
          title={posts.length ? "Посты про js" : "Постов нет. Добавьте их!"}
        />
      </div>
    </>
  );
}
export default App;
