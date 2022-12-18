import React from "react";

function TestCreateElement() {
  let nav1 = React.createElement(
    "nav",
    { style: { background: "orange" }, className: "my-class2" },
    [
      <p>this is a paragraph in the nav</p>,
      <span>this is span</span>,
      <p>and another p</p>,
    ]
  );

  let div1 = React.createElement(
    "div",
    { style: { background: "hotpink" }, className: "my-class" },
    [
      <p>this is a paragraph in the div</p>,
      <span>this is another span</span>,
      nav1,
      <p>and another</p>,
    ]
  );

  return (
    <div>
      <p>Creating elements the manual way.</p>
      {div1}
      <div style={{ background: "yellowgreen" }}> wasuup yellowgreen</div>
    </div>
  );
}

export default TestCreateElement;
