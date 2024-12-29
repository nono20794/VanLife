import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

/**
 * the point in React router- instead of refreashing the page each time you navigate to a page,
 * the router will return back react components and rerender when needed
 *
 * BrowserRouter - context provider - we need to wrap the entire app in the broswerroter,
 * and now we can use in the app all ther tools of the react reaouter in the app , to control our app
 * it provides context to all of its children components
 *
 * Routes - the first child inside the browserRouter
 *
 * Route  = the children of the Routes component. a route is part of the the URL that specifies where we are on the website
 * (its the / and after in the url - exmaple.com/about  then=> '/about' is the route)
 *  route properties:   path= the route path = "/about" ,
 *   element- which react element we want to render if the path in the url matches the path that we defined in this route component
 *  usally the path of the home page will be "/"
 *
 * Link- like an ancore tag- navigate to a diffrent page without refreshing the page so if i have any state in tghe component,
 *    the refresh will wipe out the values n the state (unless we save it somewhere)
 * when we style it - a link is actually an a html element - so to accese it either use className property or the a element  (nav > a ...)
 *
 */

function About() {
  return <h1>Hello to about page!</h1>;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter> */}
    <App />
  </StrictMode>
);
