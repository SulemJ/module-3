import { Outlet, Link } from "react-router-dom";

export default function Layout({ cartCount, user, setUser }) {
  return (
    <div>
      <header style={{ display: 'flex', gap: '15px', padding: '15px', borderBottom: '1px solid #ddd' }}>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/checkout">Checkout ({cartCount})</Link>
        {user ? (
          <button onClick={() => setUser(null)}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </header>
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
    </div>
  );
}