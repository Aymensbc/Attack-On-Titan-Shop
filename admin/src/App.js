import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import "./scss/style.scss";
import Login from "./views/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function App() {
  const { admin } = useSelector((state) => state.admin);

  return (
    <>
      <Router>
        <ToastContainer />
        <Routes>
          <Route
            path="*"
            name="Home"
            element={admin ? <DefaultLayout /> : <Navigate to="/login" />}
          />
          <Route exact path="/login" name="Login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
