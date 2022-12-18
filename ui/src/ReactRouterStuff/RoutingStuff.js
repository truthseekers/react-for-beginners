import { Routes, Route, Outlet, Navigate, Link } from "react-router-dom";
import Products from "./Products";
import Product from "./Product";
import PassingState from "./PassingState";
import ReceivingState from "./ReceivingState";
import Posts from "./Posts";

function HomeLayout() {
  return (
    <div style={{ background: "pink", padding: "35px" }}>
      <h1>Home Parent Layout</h1>
      <div>
        <Link style={{ margin: "15px" }} to="/products">
          Products
        </Link>
        <Link style={{ margin: "15px" }} to="/posts">
          Posts
        </Link>
        <Link style={{ margin: "15px" }} to="/">
          Home
        </Link>
        <Link style={{ margin: "15px" }} to="/passingstate">
          PassingState
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div style={{ background: "yellow" }}>
      <h1>This is the home page</h1>
    </div>
  );
}

function ProductsLayout() {
  return (
    <div style={{ background: "orange", padding: "15px" }}>
      <h2>
        This is the products section of the site. There's an outlet to display
        children routes WITHIN this parent container.
      </h2>

      <Link style={{ margin: "15px" }} to="/products">
        Products home
      </Link>
      <Link style={{ margin: "15px" }} to="/products/all">
        All Products
      </Link>

      <Outlet />
    </div>
  );
}

function ProductsHome() {
  return (
    <div>
      This is the component that gets rendered on the "index" route of the
      /products.
    </div>
  );
}

function RoutingStuff() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<ProductsLayout />}>
          <Route index element={<ProductsHome />} />
          <Route path="all" element={<Products />} />
          <Route path=":productId" element={<Product />} />
          <Route path="something/:productId" element={<Product />} />
        </Route>
        <Route path="/posts" element={<Posts />} />
        <Route path="/passingstate" element={<PassingState />} />
        <Route path="/receivingstate" element={<ReceivingState />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default RoutingStuff;
