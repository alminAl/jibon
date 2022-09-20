import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import Error from "./Components/Error/Error.jsx";
import Home from "./Components/HomeComponent/Home.jsx";
import Footer from "./Components/ReuseComponent/Footer.jsx";
import Navigation from "./Components/ReuseComponent/Navigation.jsx";

function App() {
  const location = useLocation();

  return (
    <>
      {/* navigation for all components */}
      {location.pathname.includes("dashboard") || <Navigation />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="*" element={<Error />} />

        {/* dashboard routes */}
        <Route path="dashboard" element={<Dashboard />}>
          {/*  */}
        </Route>
      </Routes>
      {/* footer for all components */}
      {location.pathname.includes("dashboard") || <Footer />}
    </>
  );
}

export default App;
