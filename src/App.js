import { Routes, Route } from "react-router-dom";
import Home from "./Components/HomeComponent/Home.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
      </Routes>
    </>
  );
}

export default App;