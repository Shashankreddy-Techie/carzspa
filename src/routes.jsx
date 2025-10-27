import { Home, Profile, Services, Video, Contact, Gallery, Team } from "@/pages";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "About",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "Services",
    path: "/services",
    element: <Services />,
  },
  {
    name: "Video",
    path: "/video",
    element: <Video />,
  },
  {
    name: "Gallery",
    path: "/gallery",
    element: <Gallery />,
  },
  {
    name: "Testimonials",
    path: "/team",
    element: <Team />,
  },
  {
    name: "Contact Us",
    path: "/contact",
    element: <Contact />,
  },
];

export default routes;
