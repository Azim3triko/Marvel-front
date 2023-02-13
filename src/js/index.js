//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";
import Register from "./component/register";

//render your react application
ReactDOM.render(<Register />, document.querySelector("#app"));
