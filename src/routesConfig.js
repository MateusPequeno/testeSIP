import Home from "./pages/Home";
import Cadastrar from "./pages/Cadastrar";
import Ecommerce from "./pages/Ecommerce";
const routesConfig = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  { 
    path: "/cadastrar",
    component: Cadastrar,
    exact: true,
  },
  {
    path: "/ecommerce",
    component: Ecommerce,
    exact: true,
  },
];
export default routesConfig;
