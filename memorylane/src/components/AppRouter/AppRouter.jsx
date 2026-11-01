import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../context/context";
import { privateRoutes, publicRoutes } from "../router/router";
const AppRouter = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  console.log(isAuth);
  return isAuth ? (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
      {privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRouter;
