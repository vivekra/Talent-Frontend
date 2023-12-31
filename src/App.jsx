import Home from "./components/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminLayout from "./components/Admin/Layout/index";
import ProtectedLayout from "./components/layouts/ProtectedLayout";
import AdminHome from "./components/Admin/Home/index";
import AdminProfiles from "./components/Admin/Profiles/index";
import AuthLayout from "./components/layouts/AuthLayout";
import UnAuthorizedPage from "./components/layouts/Components/UnAuthorizedPage";
import UserLayout from "./components/layouts/UserLayout";
import SignIn from "./components/Auth/SignIn";
import Register from "./components/Auth/Register";
import UserDetails from "./components/UserDetails/UserDetails";
import LogoutPage from "./components/layouts/Components/LogoutPage";
import ForgotPassword from "./components/Auth/ForgotPassword";
import { ComplexNavbar } from "./components/layouts/Components/Sample";

import SpinnerComponent from "./components/layouts/Components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setSpinner } from "./Redux/Slice/homeSlice";

function App() {
  const dispatch = useDispatch();
  const { spinner } = useSelector((state) => state.index);

  useEffect(() => {
    setInterval(() => {
      dispatch(setSpinner(true));
      setTimeout(() => {
        dispatch(setSpinner(false));
      }, 3000);
    }, 1000000);
  }, []);

  return (
    <>
    {spinner && <SpinnerComponent />}
    <Router>
      <Routes>
        <Route path="/unauthorized" element={<UnAuthorizedPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/new_user_add' element={<Register />} />
       
        <Route path='/forgotpassword' element={< ForgotPassword /> } />
        <Route path='/sample' element={< ComplexNavbar /> } />
        {/* with_header_footer */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
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
    </>
  );
}

export default App;
