import Layout from "./Layout";

function ChildrenElementsEx() {
  return (
    <Layout title={"services Nav yo"}>
      <div style={{ background: "hotpink" }} className={"services-page"}>
        We do lots of things for our clients.
        <ul>
          <li>Rake leaves</li>
          <li>Mow Grass</li>
          <li>Clean Gutters</li>
          <li>Water Garden</li>
        </ul>
      </div>
    </Layout>
  );
}

export default ChildrenElementsEx;
