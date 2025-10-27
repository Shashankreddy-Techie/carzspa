import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { 
  Bars3Icon, 
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import logo from "/img/logo.png";

export function Navbar({ brandName, routes, action }) {
  const [openNav, setOpenNav] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderNavItem = ({ name, path, icon, href, target, dropdownItems }) => {
    const content = (
      <>
        {icon &&
          React.createElement(icon, {
            className: "w-[18px] h-[18px] opacity-75 mr-1",
          })}
        {name}
        {dropdownItems && (
          <ChevronDownIcon className="w-3 h-3 ml-1 transition-transform group-hover:rotate-180" />
        )}
      </>
    );

    if (dropdownItems) {
      return (
        <Menu placement="bottom" offset={-4}>
          <MenuHandler>
            <Typography
              as="div"
              variant="small"
              className="font-bold py-1 px-2 cursor-pointer rounded-lg transition-all hover:bg-white/10 group"
            >
              {content}
            </Typography>
          </MenuHandler>
          <MenuList className="bg-white/90 backdrop-blur-md border-none">
            {dropdownItems.map((item) => (
              <MenuItem
                key={item.name}
                className="text-blue-gray-900 hover:!bg-blue-gray-50/80"
                onClick={() => item.onClick?.()}
              >
                <Typography variant="small" className="font-bold">
                  {item.name}
                </Typography>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      );
    }

    const linkClass = "flex items-center gap-1 py-1 px-2 font-bold rounded-lg transition-all hover:bg-white/10";
    return href ? (
      <a href={href} target={target} className={linkClass}>
        {content}
      </a>
    ) : (
      <Link to={path} target={target} className={linkClass}>
        {content}
      </Link>
    );
  };

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-1">
      {routes.map((route) => (
        <Typography
          key={route.name}
          as="li"
          variant="small"
          color="inherit"
          className="capitalize"
        >
          {renderNavItem(route)}
        </Typography>
      ))}
    </ul>
  );

  return (
    <MTNavbar 
      color={isScrolling ? "white" : "transparent"} 
      className={`p-3 sticky top-0 z-50 transition-all duration-300 ${
        isScrolling 
          ? "bg-white/80 backdrop-blur-md backdrop-saturate-200 shadow-md" 
          : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <Typography className="mr-4 ml-2 cursor-pointer py-1.5 font-bold">
            <img 
              src={logo} 
              alt="logo" 
              className="h-16 inline-block mr-2 transition-transform hover:scale-105" 
            />
          </Typography>
        </Link>
        <div className="hidden lg:block">
          <div className={`${isScrolling ? "text-blue-gray-900" : "text-white"}`}>
            {navList}
          </div>
        </div>
        <div className="hidden gap-2 lg:flex items-center">
          {React.cloneElement(action, {
            className: `hidden lg:inline-block transition-all duration-300 ${
              isScrolling 
                ? "bg-blue-gray-900 hover:bg-blue-gray-800 text-white shadow-lg hover:shadow-blue-gray-900/20" 
                : "bg-white/10 hover:bg-white/20 backdrop-blur"
            }`,
          })}
        </div>
        <IconButton
          variant="text"
          size="sm"
          color={isScrolling ? "blue-gray" : "white"}
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <MobileNav
        className="rounded-xl bg-white/90 backdrop-blur-md px-4 pt-2 pb-4 text-blue-gray-900 shadow-lg"
        open={openNav}
      >
        <div className="container mx-auto">
          {navList}
          {React.cloneElement(action, {
            className: "w-full block mt-4",
          })}
        </div>
      </MobileNav>
    </MTNavbar>
  );
}

Navbar.defaultProps = {
  brandName: "Material Tailwind React",
  action: (
    <Button
      size="sm"
      className="rounded-full py-2 px-4 transition-all"
    >
      Get Detailed
    </Button>
  ),
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
