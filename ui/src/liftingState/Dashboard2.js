function Dashboard2({ name, setName }) {
  return (
    <div style={{ background: "yellow" }}>
      <h1>Dashboard Area</h1>

      <h3>Name in Dashboard2: {name}</h3>

      <input
        type="text"
        placeholder="yep"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default Dashboard2;
