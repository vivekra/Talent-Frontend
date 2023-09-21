import "./index.css";
import Home from "./components/Home";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminLayout from "./components/Admin/Layout/index";
import ProtectedLayout from "./components/layouts/ProtectedLayout/index";
import AdminHome from "./components/Admin/Home/index";
import AdminProfiles from "./components/Admin/Profiles/index";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<ProtectedLayout />}>
          <Route path="" element={<AdminLayout />}>
            <Route path="home" element={<AdminHome />} />
            <Route path="profiles" element={<AdminProfiles />} />
          </Route>
        </Route>
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
