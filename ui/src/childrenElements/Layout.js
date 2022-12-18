function Layout({ title, children }) {
  return (
    <div style={{ background: "lightgreen", padding: "25px" }}>
      <h3>
        Layout title: <strong>{title}</strong>
      </h3>
      <div style={{ background: "lightgray", display: "flex" }}>
        <li>Home</li>
        <li>Shop</li>
        <li>About</li>
        <li>Services</li>
      </div>
      {children}
    </div>
  );
}

export default Layout;
