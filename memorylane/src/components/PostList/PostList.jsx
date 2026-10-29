import "../../styles/App.css";
import { motion } from "motion/react";
import PostItem from "../PostItem/PostItem";
import { AnimatePresence } from "motion/react";

const PostList = ({ posts, title, remove, visible, setVisible }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Постов нет. Добавьте их!</h1>;
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <AnimatePresence>
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.02 }}
          >
            <PostItem
              remove={remove}
              number={index + 1}
              post={post}
              visible={visible}
              setVisible={setVisible}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
export default PostList;
