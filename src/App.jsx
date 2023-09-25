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
<<<<<<< Updated upstream
import LogoutPage from "./components/layouts/Components/LogoutPage";
=======
import ForgotPassword from "./components/Auth/ForgotPassword";
import { ComplexNavbar } from "./components/layouts/Components/Sample";
>>>>>>> Stashed changes

function App() {
  return (
    <Router>
      <Routes>
<<<<<<< Updated upstream
        <Route path="/unauthorized" element={<UnAuthorizedPage />} />
        <Route path="/logout" element={<LogoutPage />} />
=======


        <Route path="unauthorized" element={<UnAuthorizedPage />} />
>>>>>>> Stashed changes
        <Route path='/signin' element={<SignIn />} />
        <Route path='/new_user_add' element={<Register />} />
       
        <Route path='/forgotpassword' element={< ForgotPassword /> } />
        <Route path='/sample' element={< ComplexNavbar /> } />
        {/* with_header_footer */}
        <Route path="/" element={<UserLayout />}>
<<<<<<< Updated upstream
          <Route index element={<Home />} />
=======
          <Route path="" element={<Home />} />
          <Route path='/userdetails' element={<UserDetails />} />
>>>>>>> Stashed changes
        </Route>
        {/* auth_layout - need to signin */}
        <Route path="/" element={<AuthLayout />}>
          <Route path="admin" element={<ProtectedLayout />}>
            <Route path="" element={<AdminLayout />}>
              <Route index element={<AdminHome />} />
              <Route path="profiles" element={<AdminProfiles />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
