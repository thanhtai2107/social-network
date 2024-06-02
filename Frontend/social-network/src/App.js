import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./page/HomePage";
import Authentication from "./page/Authentication";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./redux/auth/Action";
import { jwtDecode } from "jwt-decode";
function App() {
  const jwt = localStorage.getItem("jwt");
  const auth = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (jwt) {
      const email = jwtDecode(jwt).sub;
      dispatch(getUser(email));
      navigate("/");
    }
  }, [auth.jwt]);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path="/*"
          element={auth.user ? <HomePage /> : <Authentication />}
        />
      </Routes>
    </>
  );
}

export default App;
