import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/ProductDetail";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { OrderComplete } from "./pages/OrderComplete";
import { OrderHistory } from "./pages/OrderHistory";
import { OrderDetail } from "./pages/OrderDetail";
import { Categories } from "./pages/Categories";
import { Promo } from "./pages/Promo";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { HowToBuy } from "./pages/HowToBuy";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: Products },
      { path: "products/:id", Component: ProductDetail },
      { path: "cart", Component: Cart },
      { path: "checkout", Component: Checkout },
      { path: "order-complete", Component: OrderComplete },
      { path: "orders", Component: OrderHistory },
      { path: "orders/:id", Component: OrderDetail },
      { path: "categories", Component: Categories },
      { path: "promo", Component: Promo },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "how-to-buy", Component: HowToBuy },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
]);