import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/context";
import MyButton from "../button/MyButton";
const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  return (
    <div className="navbar">
      <MyButton onClick={() => setIsAuth(false)}>Выйти</MyButton>
      <div className="navbar__links">
        <Link to="/about" className="href">
          О сайте
        </Link>
        <Link to="/posts" className="href">
          Посты
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
