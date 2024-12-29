import { Link } from "react-router-dom";
import "../App.css";
export default function Header() {
  return (
    // <header>
    //   <Link className="logo-name" to="/">
    //     #VANLIFE
    //   </Link>
    //   <nav className="navbar">
    //     <div className="right-header-nav">
    //       <Link className="nav-link" to="/about">
    //         About
    //       </Link>
    //       <Link className="nav-link" to="/vans">
    //         Vans
    //       </Link>
    //     </div>
    //   </nav>
    // </header>
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}
