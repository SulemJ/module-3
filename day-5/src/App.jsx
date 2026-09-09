import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./Layout";
import Landing from "./Landing";
import Menu from "./Menu";
import DishDetail from "./DishDetail";
import Checkout from "./Checkout";
import Login from "./Login";
import NotFound from "./NotFound";
import RequireAuth from "./RequireAuth";

export default function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<Layout cartCount={cart.length} user={user} setUser={setUser} />}>
        <Route index element={<Landing />} />
        <Route path="menu" element={<Menu />} />
        <Route path="menu/:id" element={<DishDetail cart={cart} setCart={setCart} />} />
        <Route path="login" element={<Login setUser={setUser} />} />
        <Route 
          path="checkout" 
          element={
            <RequireAuth user={user}>
              <Checkout cart={cart} />
            </RequireAuth>
          } 
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}