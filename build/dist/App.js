import React from "react";
import {Route, BrowserRouter as Router} from "react-router-dom";
import "./App.css";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Services from "./Components/Services.js";
import Contact from "./Components/Contact.js";
import Work from "./Components/Work.js";
import Blog from "./Components/Blog.js";
function App() {
  return /* @__PURE__ */ React.createElement(Routes, null, /* @__PURE__ */ React.createElement(Route, {
    path: "/",
    element: /* @__PURE__ */ React.createElement(Home, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/about",
    element: /* @__PURE__ */ React.createElement(About, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/services",
    element: /* @__PURE__ */ React.createElement(Services, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/contact",
    element: /* @__PURE__ */ React.createElement(Contact, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/work",
    element: /* @__PURE__ */ React.createElement(Work, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/blog",
    element: /* @__PURE__ */ React.createElement(Blog, null)
  }));
}
export default App;
