import { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/forms/PostForm";
import PostFilter from "./components/PostFilter/PostFilter";
import MyModal from "./components/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import "./styles/App.css";
import { usePosts } from "./hooks/usePosts";
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS", body: "ffebout js" },
    { id: 2, title: "GO", body: "nnbout golang" },
    { id: 3, title: "Py", body: "about python" },
  ]);
  const [filter, setFilter] = useState({
    sort: "",
    query: "",
  });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (postToDelete) => {
    setPosts(posts.filter((post) => post.id !== postToDelete.id));
  };

  return (
    <>
      <div className="app">
        <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
          Добавить новый пост
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost} />
        </MyModal>

        <PostFilter filter={filter} setFilter={setFilter} />
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title={"Посты про js"}
          visible={modal}
          setVisible={setModal}
        />
      </div>
    </>
  );
}
export default App;
