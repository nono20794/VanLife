import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./server"; // using a moc server and db
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import HostVans from "./pages/Host/HostVans";
import HostVanDetails from "./pages/Host/HostVanDetails";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanInfo from "./pages/Host/HostVanInfo";

/**
 * Link - The Link component is a straightforward way to create navigation links.
 *    It takes a to prop specifying the URL path the link should point to
 * we will use regular link when we simply need a clickable elment to navigate to another part of the app,
 *  without any visual indication.
 * NavLink - instead of using a regular link - we can use Nav link - add more props to the regular link - adds styling to active and pending links
 *    The NavLink component builds upon Link by adding functionality to display the active
 *  link visually. It inherits all the functionalities of Link but with an additional prop: isActive.
 *  in navlink we can set the calssName as a function, and based on the prop isAsctive detrmine the class name
 * we will use Navlink when we want to create a navigation bar or menu and visually higlight the currently active link
 */

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/**with the rote compnent as a pernet we can acutlly teling react to render the element in the parent route - layout and the
           * "path" that we want- for example if i put in the url /vans it wil render the layout component and the vans component
           *
           * Neseted routes - Whenever we have some shared UI between routes in our app.
           * Layout route It's the parent route of some nested routes that contains just
           * the portion of the UI that will be shared. It will use an Outlet omponent.
           * React layout components are reusable parts that specify your application's skeleton or structure.
           *    Consistently placed headers, sidebars, footers, and navigation bars are examples of layout components.
           *    By centralizing these common structures, these components help you reduce duplication and
           *    improve the maintainability of your program.
           *    with layout we use an outlet- a hole where the child rout can render its element.
           * The Outlet component is a placeholder in your layout where the matched child route components will be rendered
           * if your application has a shared layout across multiple routes, Outlet ensures that the content of
           *    each route is dynamically injected into the layout.
           *
           */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            {/*we can send params to route- by doing : - it means that someting is goind to be here - 
          we dont know what it is but it is going to be someting  - it means we can use one route defintion 
          for every deatail page that we want (instead of decaring all beforhand - sometimes we can event do that) 
          a route/url parameter - A portion of our route path that is a placeholder for what will eventually
          be the actual segment in the URL of the page.
          */}
            <Route path="/vans/:id" element={<VanDetail />} />

            {/**RELATIVE ROUTES
             * when we dtart a path with a '/' - it will treat it as an absolute route/path
             * if we dont use it- it will be a realtive path
             * The leading slash prefixes the path name and indicates that the path is considered from the root level of the application.
             * the realtive path is relative to its parent path - relative paths which specify
             *    the location of a component in relation to the parent route
             * Relative routing is a way of defining routes in reference to their parent routes.
             *  It enables navigation to different paths or routes within an application based
             *  on the current location rather than a specified point which is usually the root
             *  of the application.
             */}
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              {/* <Route path="host" element={<Dashboard />} /> */}
              {/**we cant have the layout and the chile to have the same relative path - path="host" element={<HostLayout />} && path="host" element={<Dashboard />}
               * becuse now dashboard is reltive to the parent and the parent is alryday /host
               * in order to acsses the dashboard we will have to to /host/host in the url
               *
               * we will fix this by using index - if we have an element that we want to disaply in the
               * outlet of the layout component, but we want it to be at same route/path as what the layout component is,
               * we will repacle the path property whith the INDEX property
               *
               * "Index Route"?
               *It's the "default route" we want to render when the path
               *of the parent route matches. It gives us a chance to render
               *an element inside the parent's <Outlet /> at the same path
               *as the parent route.
               * the review and oncome are now reltive to the parent hostlayout so the path will be /host/income...
               * */}
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetails />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
