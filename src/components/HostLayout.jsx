import { Outlet, NavLink } from "react-router-dom";

export default function HostLayout() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  /**when we jave nested routes we might see a problem that when we want to style an active
   * link it will also hightlight the paretlyout rout as well - becuse one of the chilren is the same path
   * of the parent path so we need to add the END prop - it tells react router to end the matching on thed link we defined it
   *
   */
  return (
    <>
      <nav className="host-nav">
        {/**when we want the link/path to be the current url you are on (host)
         * and you want to use relative path - inside the to path enter '.'
         *
         */}
        <NavLink
          to="."
          end
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="income"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Income
        </NavLink>

        <NavLink
          to="vans"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Vans
        </NavLink>

        <NavLink
          to="reviews"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Reviews
        </NavLink>
      </nav>

      <Outlet />
    </>
  );
}
