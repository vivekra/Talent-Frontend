
import './index.css';
import Home from './components/Home';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import SignIn from './components/Auth/SignIn';
import Register from './components/Auth/Register';
import UserDetails from './components/UserDetails/UserDetails';


function App() {
  return (
    <Router>
 
<Header />
<Routes>
  <Route path='/'  element={<Home />}/>
  <Route path='/signin'  element={<SignIn/>}/>
  <Route path='/new_user_add'  element={<Register/>}/>
  <Route path='/user_details'  element={<UserDetails />}/>
</Routes>
<Footer />
 
    </Router>
  );
}

export default App;
