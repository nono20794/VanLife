import React from "react";
import { NavLink, useParams, Link, Outlet } from "react-router-dom";

export default function HostVanDetails() {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans[0]));
  }, []);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

  /**
   * when using relative pat, and we want to go back "parent or the previous page
   * we can use '.. ' bu becuse vans and vans/:id are not nestead wehn we try to go back to the parent
   * it goes to the /host. to fix we add the RELATIVE property, this means the when we try to go back a route
   * we mean - go back one level in our in the path structure , not up a lvevle in the routing hierarchy
   *
   */

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>

        <nav className="host-van-detail-nav">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="."
            end
          >
            Details
          </NavLink>

          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="pricing"
          >
            Pricing
          </NavLink>

          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="photos"
          >
            Photos
          </NavLink>
        </nav>
        {/**we can "send data / context from the parent to its immidide children
         *  the outlet component is a context provider. it's used in a parent route to render
         * the children toute elements, and we can pass data/state as the outlet context.
         * and any immediate children of the parent can utilize any or all of the Outlet's
         * context with the useOutletContext hook - in the outlet component we add the context
         * property and inside we add all the data/stats we want to share.
         *
         * " */}
        <Outlet context={{ currentVan }} />
      </div>
    </section>
  );
}
