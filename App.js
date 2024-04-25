import React from 'react'
import ReactDOM from 'react-dom'
//converts the React.CreateElement in react-js object then it turns into rendered html
// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     React.createElement(
//       "div",
//       { id: "child" },
//       React.createElement(
//         "div",
//         {},
//         [React.createElement("h1", {}, "I love shubhu "),React.createElement("h1", {}, "I love shubhu "),React.createElement("h1", {}, "I love shubhu ")]
//       )
//     )
//   );
//   ReactDOM.render(parent, document.getElementById("root"));
//JSX => Babel transpiles the jsx into createrecatElement => then the React.createElement => JS Object => Rendered html
const heading =<h1>hey i am shubhu dubbu</h1> 
ReactDOM.render(heading, document.getElementById("root"));