import { Routes, Route } from "react-router-dom";
import Error from "./Components/Error/Error.jsx";
import EventInfo from "./Components/EventComponent/EventInfo.jsx";
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
        <Route path="/events" element={<EventInfo />} />
        <Route index element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    
      {/* footer for all components */}
      <Footer />
    </>
  );
}

export default App;
