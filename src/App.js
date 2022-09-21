import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import AddEvent from "./Components/DashboardComponent/AddEvent.jsx";
import EditProfile from "./Components/DashboardComponent/EditProfile.jsx";
import OurEvents from "./Components/DashboardComponent/OurEvents.jsx";
import Profile from "./Components/DashboardComponent/Profile.jsx";
import Error from "./Components/Error/Error.jsx";
import Home from "./Components/HomeComponent/Home.jsx";
import Footer from "./Components/ReuseComponent/Footer.jsx";
import Navigation from "./Components/ReuseComponent/Navigation.jsx";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname.includes("dashboard") || <Navigation />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="*" element={<Error />} />

        <Route path="dashboard" element={<Dashboard />}>
          {/* dashboard routes */}
          <Route index element={<Profile />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="edit" element={<EditProfile />}></Route>
          <Route path="add-event" element={<AddEvent />}></Route>
          <Route path="our-events" element={<OurEvents />}></Route>
        </Route>
      </Routes>

      {location.pathname.includes("dashboard") || <Footer />}
    </>
  );
}

export default App;
