// Header.js
import React from 'react';
import '../../index.css'

const Header = () => {
  return (
    // <header classNameName="bg-white p-4 md:p-6 flex flex-wrap justify-between items-center border-b-2 border-black shadow-md">
    //   {/* Left: Logo */}
    //   <div classNameName="flex items-center mb-2 md:mb-0">
    //     <img src="/logo.svg" alt="Logo" classNameName="w-10 h-10 mr-2" />
    //     {/* <span classNameName="text-xl font-semibold">Your Logo</span> */}
    //   </div>

    //   {/* Middle: Navigation Links */}
    //   <div classNameName="w-full md:w-40 md:space-x-4">
    //     <div classNameName="md:flex space-x-4">
    //       <a href="#" classNameName="hover:underline">Home</a>
    //       <a href="#" classNameName="hover:underline">About</a>
    //       <a href="#" classNameName="hover:underline">Products</a>
    //     </div>
    //   </div>

    //   {/* Right: Buttons */}
    //   <div classNameName="w-full mt-2 md:mt-0 md:w-auto md:ml-auto md:space-x-5">
    //     <div classNameName="md:flex space-x-5">

    //     <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium rounded-full  text-[#F58220] focus:outline-none bg-white  border border-[#F58220] hover:bg-[#F58220] hover:text-white focus:z-10 focus:ring-4 focus:ring-[#F58220] dark:focus:ring-[#F58220] dark:bg-[#F58220] dark:text-[#F58220] dark:border-gray-600  dark:hover:text-white dark:hover:bg-[#F58220]">SCHEDULE A CALL</button>

    //     <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium rounded-full  text-white focus:outline-none bg-[#F58220]  border border-[#F58220] hover:bg-[#EC6100] hover:text-white focus:z-10 focus:ring-4 focus:ring-[#F58220] dark:focus:ring-[#F58220] dark:bg-[#F58220] dark:text-[#F58220] dark:border-gray-600 dark:hover:text-white dark:hover:bg-[#F58220]">START 15 DAYS RISK FREE TRIAL</button>
          
    //     </div>
    //   </div>
    // </header>

<header className="header-wrapper section-wrapper  fixed top-0 left-0 right-0 bg-white p-5  z-50 ">
<div className="header-main header-ppc top-0">
<nav className="navbar navbar-expand-xl light header-navbar text-uppercase">
<div className="container-fluid px-0">
<a className="navbar-brand" href="#">
<script src="/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="b46feb5e703bd6b3f06565f0-|49"></script><img src="/logo.svg" alt="Bacancy" title="Bacancy" className="logo-img logo-black" data-pagespeed-url-hash="3582624031" onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
<script src="/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="b46feb5e703bd6b3f06565f0-|49"></script><img src="/logo.svg" alt="Bacancy" title="Bacancy" className="logo-img logo-white" data-pagespeed-url-hash="1499742989" onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
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
<div className="sidebar-backdrop"></div>
<div className="right-nav-elements mx-4 align-items-center">
<a href="#   " target="_blank" className="btn btn-outline-primary rounded-pill text-uppercase text-nowrap d-inline-block mx-md-2 book-call-btn font-bold" id="book-a-30-min-call-b-t-cta">Schedule a Call</a>
<a href="#form" className="btn btn-primary btn-radious text-uppercase round-0 text-nowrap d-inline-block start-h-btn font-bold">START
15 Days Risk free trial</a>
</div>
</div>
</nav>
</div>
</header>

  );
};

export default Header;
