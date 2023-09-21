import Home from "./components/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminLayout from "./components/Admin/Layout/index";
import ProtectedLayout from "./components/layouts/ProtectedLayout";
import AdminHome from "./components/Admin/Home/index";
import AdminProfiles from "./components/Admin/Profiles/index";
import AuthLayout from "./components/layouts/AuthLayout";
import UnAuthorizedPage from "./components/layouts/Components/UnAuthorizedPage";
import UserLayout from "./components/layouts/UserLayout";
import SignIn from './components/Auth/SignIn';
import Register from './components/Auth/Register';
import UserDetails from './components/UserDetails/UserDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="unauthorized" element={<UnAuthorizedPage />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/new_user_add' element={<Register />} />
        <Route path='/user_details' element={<UserDetails />} />
        <Route path="/" element={<UserLayout />}>
          <Route path="" element={<Home />} />
        </Route>
        <Route path="/" element={<AuthLayout />}>
          <Route path="admin" element={<ProtectedLayout />}>
            <Route path="" element={<AdminLayout />}>
              <Route path="home" element={<AdminHome />} />
              <Route path="profiles" element={<AdminProfiles />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
