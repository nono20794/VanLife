import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
/**
 * outlet- it creats a "hole" in wahtever our componenet is, where the matching route can render its element
 *The Outlet component is a placeholder in your layout where the matched child route components will be rendered
 *if your application has a shared layout across multiple routes, Outlet ensures that the content of each route is dynamically injected into the layout.
 * whit the outlet the layout component decides where the "child" route element should go.
 */
export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        {/**this is where the child route will render the element  */}
      </main>
      <Footer />
    </>
  );
}
