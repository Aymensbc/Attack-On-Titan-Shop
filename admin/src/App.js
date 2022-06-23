import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" name="Home" element={<DefaultLayout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
