import { Routes, Route } from "react-router-dom";
import EventHome from "./Components/EeventLatest/EventHome.jsx";
import Error from "./Components/Error/Error.jsx";
import Home from "./Components/HomeComponent/Home.jsx";
import Footer from "./Components/ReuseComponent/Footer.jsx";
import Navigation from "./Components/ReuseComponent/Navigation.jsx";

function App() {
  return (
    <>
      {/* navigation for all components */}
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/test" element={<EventHome />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* footer for all components */}
      <Footer />
    </>
  );
}

export default App;