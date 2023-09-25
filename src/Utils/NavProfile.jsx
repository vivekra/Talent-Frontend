import React from "react";
import {
  Navbar,

  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,

  IconButton,
} from "@material-tailwind/react";
import {

  UserCircleIcon,

  ChevronDownIcon,
  Cog6ToothIcon,

  LifebuoyIcon,
  PowerIcon,

  Bars2Icon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";




function NavProfile(props) {

 // profile menu component
 const profileMenuItems = [
    {
      label: "My Profile",
      icon: UserCircleIcon,
    },
    {
      label: "Edit Profile",
      icon: Cog6ToothIcon,
    },
    {
      label: "Help",
      icon: LifebuoyIcon,
    },
    {
      label: "Sign Out",
      icon: PowerIcon,
    },
  ];
  
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
   
    const closeMenu = () => setIsMenuOpen(false);
  const navigate =useNavigate()  
  
    const handleMenuItemClick = (label) => {
      switch (label) {
        case 'My Profile':
          navigate('/sample');
          break;
        case 'Edit Profile':
          navigate('/sample');
          break;
        case 'Help':
          navigate('/');
          break;
        case 'Sign Out':
          // Call your logout function here
          // Example: handleLogout();
  
          // handleLogout() 
          props.onLogoutClick()
  
          break;
        default:
          break;
      }
      closeMenu();
    };

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
    <MenuHandler>
     
        <Avatar
          variant="circular"
          size="sm"
          alt="tania andrew"
          className="border rounded-full "
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          style={{height:'50px'}}
       />
   
     
    </MenuHandler>
    <MenuList className="p-1 zindex ">
      {profileMenuItems.map(({ label, icon }, key) => {
        const isLastItem = key === profileMenuItems.length - 1;
        return (
          <MenuItem
            key={label}
            onClick={() => handleMenuItemClick(label)}
            className={`flex items-center gap-2 rounded ${
              isLastItem
                ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                : ""
            }`}
          >
            {React.createElement(icon, {
              className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
              strokeWidth: 2,
            })}
            <Typography
              as="span"
              variant="small"
              className="font-normal"
              color={isLastItem ? "red" : "inherit"}
            >
              {label}
            </Typography>
          </MenuItem>
        );
      })}
    </MenuList>
  </Menu>
  )
}

export default NavProfile