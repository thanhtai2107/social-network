import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import Authentication from "./page/Authentication";
function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={false ? <HomePage /> : <Authentication />} />
      </Routes>
    </>
  );
}

export default App;
