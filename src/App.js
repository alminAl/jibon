import { Routes, Route } from "react-router-dom";
import EvenLatest from "./Components/EeventLatest/EvenLatest.jsx";
import EventHome from "./Components/EeventLatest/EventHome.jsx";
import Home from "./Components/HomeComponent/Home.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/test" element={<EventHome />} />
      </Routes>
    </>
  );
}

export default App;
