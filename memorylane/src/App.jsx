import { useState } from "react";
import AppRouter from "./components/AppRouter/AppRouter";
import Navbar from "./components/UI/Navbar/Navbar";
import { AuthContext } from "./context/context";
import "./styles/App.css";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      <AuthContext.Provider value={{ isAuth: isAuth, setIsAuth: setIsAuth }}>
        <Navbar />
        <AppRouter />
      </AuthContext.Provider>
    </>
  );
}
export default App;
