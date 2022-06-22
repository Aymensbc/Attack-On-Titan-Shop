import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import "@coreui/coreui/dist/css/coreui.min.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" name="Home" element={<DefaultLayout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
