import { Routes, Route, Link, Outlet } from "react-router-dom";
import { useCartStore } from "./store";
import { AuthProvider } from "./AuthContext";
import Menu from "./Menu";
import DishDetail from "./DishDetail";
import Checkout from "./Checkout";
import Login from "./Login";
import RequireAuth from "./RequireAuth";


function Layout() {
  const items = useCartStore(s => s.items);
  return (
    <div>
      <nav style={{ padding: "10px", background: "#eee", display: "flex", gap: "15px" }}>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/checkout">Cart ({items.length})</Link>
      </nav>
      <main style={{ padding: "20px" }}>
        <Outlet /> 
      </main>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h2>Welcome to Addis Eats</h2>} />
          <Route path="menu" element={<Menu />} />
          <Route path="menu/:id" element={<DishDetail />} />
          <Route path="login" element={<Login />} />
          
         
          <Route 
            path="checkout" 
            element={
              <RequireAuth>
                <Checkout />
              </RequireAuth>
            } 
          />
          
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}