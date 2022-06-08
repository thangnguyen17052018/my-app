import React from "react";

const Jsx = () => {
  const element = <div id="root">Hello world</div>;
  const elementReact = React.createElement(
    "div",
    { id: "root" },
    "Hello World!"
  );
  const element2 = (
    <div>
      <span>Hello</span> <span>World</span>
    </div>
  );

  const element3 = React.createElement("div", {
    children: [
      React.createElement("span", null, "Hello"),
      " ",
      React.createElement("span", null, "World"),
    ],
  });

  return <div></div>;
};

export default Jsx;
