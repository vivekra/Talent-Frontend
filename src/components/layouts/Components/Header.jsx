// Header.js
import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import {
  Popover,
  PopoverHandler,
  PopoverContent,
   Avatar,
  Button,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import NavProfile from '../../../Utils/NavProfile';


const Header = () => {


  const [userData, setUserData] = useState(null);
  const navigate = useNavigate()

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  useEffect(() => {
    // Check if UserData is in local storage
    const storedUserData = localStorage.getItem('UserData');

    if (storedUserData) {
      // User is logged in
      setUserData(JSON.parse(storedUserData));
    }
  }, [userData]);

  const handleLogout = () => {
    // Remove UserData from local storage
    localStorage.removeItem('UserData');
    // Clear the user data state
    setUserData(null);
    // Navigate to the sign-in page or any other desired destination
    navigate('/');
  };



  return (
   

<header className="header-wrapper section-wrapper  fixed top-0 left-0 right-0 bg-white p-4  z-50 ">
<div className="header-main header-ppc top-0 fixed top-0 left-0 right-0 bg-white ">
<nav className="navbar navbar-expand-xl light header-navbar text-uppercase">
<div className="container-fluid px-0">
  
<a className="navbar-brand" href="/">
<img src="/logo.svg" alt="Bacancy" title="Bacancy" className="logo-img logo-black" data-pagespeed-url-hash="3582624031" onload="pagespeed.CriticalImages.checkImageForCriticality(this);" style={{height:'61px'}} />
<img src="/logo.svg" alt="Bacancy" title="Bacancy" className="logo-img logo-white" data-pagespeed-url-hash="1499742989" onload="pagespeed.CriticalImages.checkImageForCriticality(this);" style={{height:'61px'}} />
</a>
<div className="collapse navbar-collapse collapse-sidebar" id="collapse-mobile-siderbar">
<ul className="navbar-nav mr-auto navbar-nav-destop">
<li className="nav-item">
<a className="nav-link text-capitalize" href="#price-sec">Plan and Pricing</a>
</li>
<li className="nav-item">
<a className="nav-link text-capitalize" href="#case-study">Case Study</a>
</li>
<li className="nav-item">
</li>
<li className="nav-item">
<a className="nav-link text-capitalize" href="#accordion-custom">FAQs</a>
</li>
</ul>
</div>
{/* <div className="sidebar-backdrop"><h3></div> */}
<div className="right-nav-elements mx-4 align-items-center">
  
<a href="https://calendly.com/digital_talentegra/30min" target="_blank" className=" signin-btn bg-white-call-btn btn btn-primary btn-radious text-uppercase round-0 text-nowrap d-inline-block start-h-btn font-bold"  >Schedule a Call</a>


 
{userData ? (
  <>
<NavProfile onLogoutClick ={handleLogout}  />

            </>

) :
(<a href="signin" className=" bg-yel btn btn-primary btn-radious text-uppercase round-0 text-nowrap d-inline-block start-h-btn font-bold">SIGNIN</a>
)
}
</div>


</div>
</nav>
</div>
</header>

  );
};

export default Header;
