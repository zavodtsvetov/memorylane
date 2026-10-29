import { useEffect, useMemo, useState } from "react";
import PostService from "./components/API/PostsService";
import "./styles/App.css";
import PostList from "./components/PostList/PostList";
import PostForm from "./components/forms/PostForm";
import PostFilter from "./components/PostFilter/PostFilter";
import MyModal from "./components/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import "./styles/App.css";
import { usePosts, useFetching } from "./hooks/index";
import Loader from "./components/UI/loader/Loader";
import { getPageCount, getPagesArray } from "./components/utils/pages";
function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({
    sort: "",
    query: "",
  });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    setTotalPages(getPageCount(response.headers["x-total-count"], limit));
  });

  useEffect(() => {
    fetchPosts();
  }, [page]);
  let pagesArray = getPagesArray(totalPages);
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (postToDelete) => {
    setPosts(posts.filter((post) => post.id !== postToDelete.id));
  };
  const changePage = (page) => {
    setPage(page);
    // fetchPosts()
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
        <br />
        {postError && (
          <h1 style={{ display: "flex", justifyContent: "center" }}>
            Ошибка: ${postError}
          </h1>
        )}
        {isPostsLoading ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            {" "}
            <Loader />
          </div>
        ) : (
          <>
            <div className="page__wrapper">
              {pagesArray.map((p) => (
                <button
                  onClick={() => changePage(p)}
                  className={
                    page === p ? "page" + " " + "page__current" : "page"
                  }
                  key={p}
                >
                  {p}
                </button>
              ))}
            </div>
            <br />
            <PostList
              remove={removePost}
              posts={sortedAndSearchedPosts}
              title={"Посты про js"}
              visible={modal}
              setVisible={setModal}
            />
          </>
        )}
        <br />
      </div>
    </>
  );
}
export default App;
