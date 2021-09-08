import React from "react";
import ReactDOM from "react-dom";
import Input from "../Input";

import renderer from "react-test-renderer";

it("rendering without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Input></Input>,
    div
  );
});

// it("matches snapshot", () => {
//   const tree = renderer
//     .create(
//       <Input
//         label="input data"
//         name="name"
//         value="value"
//         error="error"
//         type="text"
//         onChange="onchange"
//       ></Input>
//     )
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });
