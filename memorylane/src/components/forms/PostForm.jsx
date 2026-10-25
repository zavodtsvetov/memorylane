import { useState } from "react";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
const PostForm = ({ create }) => {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });
  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(0),
    };
    create(newPost);

    setPost({ title: "", body: "" });
  };
  return (
    <>
      <form style={{ margin: "20px " }}>
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Введите название"
        />
        <MyInput
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Введите описание"
        />
        <MyButton
          disabled={post.title && post.body ? false : true}
          onClick={addNewPost}
        >
          Добавить пост
        </MyButton>
      </form>
    </>
  );
};

export default PostForm;
