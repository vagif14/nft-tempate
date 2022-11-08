import Home from "./Home";
import AboutUs from "./AboutUs";
import Collections from "./Collections";
import Team from "./Team";
import Contact from "./Contact";

const routes = [
  { path: "/", component: <Home /> },
  { path: "/about", component: <AboutUs /> },
  { path: "/collections", component: <Collections /> },
  { path: "/team", component: <Team /> },
  { path: "/contact", component: <Contact /> },
];

export default routes;
