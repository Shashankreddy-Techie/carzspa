import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";
import logo from "/img/logo.png";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <footer className="relative px-4 pt-12 pb-8 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info Section */}
          <div className="space-y-4">
            <Typography variant="h4" className="mb-6">
              <img src={logo} alt="Logo" className="h-16 hover:scale-105 transition-transform" />
            </Typography>
            <Typography className="font-normal text-gray-300 mb-6">
              {description}
            </Typography>
            <div className="flex gap-4">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="white" className="text-white rounded-full bg-gray-800/50 hover:bg-yellow-500 hover:scale-110 hover:text-black transition-all duration-300">
                    <Typography>
                      <i className={`fa-brands fa-${name} text-lg`} />
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-4 pt-12 px-3">
            <Typography variant="h6" color="white" className="mb-4 font-bold">
              Contact Us
            </Typography>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt mt-1"></i>
                <Typography className="font-normal">
                  123 Car Street, Auto City<br />
                  State, Country 12345
                </Typography>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-phone"></i>
                <Typography className="font-normal">
                  +1 (555) 123-4567
                </Typography>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-envelope"></i>
                <Typography className="font-normal">
                  info@carzspa.com
                </Typography>
              </div>
            </div>
          </div>

          {/* Menu Links Sections */}
          {menus.map(({ name, items }) => (
            <div key={name} className="space-y-4">
              <Typography
                variant="h6"
                color="white"
                className="mb-4 font-bold uppercase pt-12"
              >
                {name}
              </Typography>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.name}>
                    <Typography
                      as="a"
                      href={item.path}
                      target="_blank"
                      rel="noreferrer"
                      variant="small"
                      className="block font-normal text-gray-300 hover:text-yellow-500 transition-colors duration-300"
                    >
                      {item.name}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="my-8 border-gray-700" />
        
        <div className="flex flex-col md:flex-row items-center justify-between">
          <Typography
            variant="small"
            className="font-normal text-gray-400 text-center md:text-left mb-4 md:mb-0"
          >
            {copyright}
          </Typography>
          <div className="flex gap-4 text-gray-400">
            <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "CarzSpa",
  description:
    "Your one-stop shop for all car customization needs. We specialize in transforming ordinary vehicles into extraordinary rides with our expert services and state-of-the-art facilities.",
  socials: [
    {
      color: "blue",
      name: "facebook",
      path: "https://facebook.com",
    },
    {
      color: "light-blue",
      name: "twitter",
      path: "https://twitter.com",
    },
    {
      color: "purple",
      name: "instagram",
      path: "https://instagram.com",
    },
    {
      color: "red",
      name: "youtube",
      path: "https://youtube.com",
    },
    {
      color: "light-blue",
      name: "linkedin",
      path: "https://linkedin.com",
    }
  ],
  menus: [
    {
      name: "useful links",
      items: [
        { name: "About Us", path: "" },
        { name: "Services", path: "" },
        {
          name: "Collabs",
          path: "",
        },
        {
          name: "Products",
          path: "",
        },
      ],
    },
    {
      name: "other resources",
      items: [
        {
          name: "PPF Safety",
          path: "",
        },
        {
          name: "Ceramic Care",
          path: "",
        },
        {
          name: "Customization",
          path: "",
        },
        {
          name: "Contact Us",
          path: "",
        },
      ],
    },
  ],
  copyright: (
    <>
      Copyright © {year} CarzSpa{" "}
      <a
        href=""
        target="_blank"
        className="text-blue-gray-500 transition-colors hover:text-blue-500"
      >
        Creative Team.
      </a> All rights reserved
      .
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
