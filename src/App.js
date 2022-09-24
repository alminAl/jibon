import { Routes, Route } from "react-router-dom";
import Error from "./Components/Error/Error.jsx";
import Home from "./Components/HomeComponent/Home.jsx";
import Login from "./Components/Pages/SignupLogin/Login/Login.jsx";
import SignUp from "./Components/Pages/SignupLogin/SignUp/SignUp.jsx";
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
        <Route path="*" element={<Error />} />
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
      {/* footer for all components */}
      <Footer />
    </>
  );
}

export default App;
