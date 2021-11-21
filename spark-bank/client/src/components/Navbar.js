// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// export default function Navbar(props) {
//   const [navbarOpen, setNavbarOpen] = React.useState(false);
//   return (
//     <nav
//       className="navbar sticky-top navbar-expand-lg back"
//       style={{ background: "#000000", color: "white" }}
//     >
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarTogglerDemo01"
//         aria-controls="navbarTogglerDemo01"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse item" id="navbarTogglerDemo01">
//         <Link className="navbar-brand text-white" to="/">
//           Spark Bank
//         </Link>
//         <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
//         <form className="form-inline my-2 my-lg-0">
//           <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
//             <li className="nav-item  ">
//               <Link className="nav-link text-white item" to="/customers">
//                 View All Customers
//               </Link>
//             </li>
//             <li className="nav-item  ">
//               <Link className="nav-link item text-white" to="/transactions">
//                 All Transactions
//               </Link>
//             </li>
//           </ul>
//         </form>
//       </div>
//     </nav>
//   );
// }

import React from "react";
import { NavLink } from "react-router-dom";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import "./Navbar.css";

const Navbar = () => {
  // const toggle = () => {
  //   const mainNav = document.getElementById("main-ul");
  //   if (mainNav.style.display === "none") mainNav.style.display = "block";
  //   else mainNav.style.display = "none";
  // };

  // const responsive = (media) => {
  //   const mainNav = document.getElementById("main-ul");
  //   const hamburgerIcon = document.getElementById("hamburger-icon");
  //   if (media.matches) {
  //     mainNav.style.display = "block";
  //     hamburgerIcon.classList.remove("d-none");
  //   } else {
  //     mainNav.style.display = "flex";
  //     hamburgerIcon.classList.add("d-none");
  //   }
  // };

  // const media = window.matchMedia("(max-width: 800px)");
  // media.addEventListener("change", responsive);

  return (
    <div>
      <header className="site-navbar">
        <div class="container">
          <div className="row align-items-center nav-main">
            <div class="col-11 col-xl-2">
              <h1 className="mb-0 site-logo">
                <a href="/" className="mb-0 m-0 brand-color">
                  Spark Bank
                  {/* <MenuOpenIcon
                  // onClick={toggle}
                  // className={window.screen.width < 800 ? "" : "d-none"}
                  // id="hamburger-icon"
                  /> */}
                </a>
              </h1>
            </div>
            <div className="col-12 col-md-10">
              <nav className="site-navigation position-relative text-right">
                <ul className="site-menu">
                  <li>
                    <a href="/">
                      <span className="ggreen">Home</span>
                    </a>
                  </li>
                  <li>
                    <a href="/about">
                      <span className="gyellow">About Us</span>
                    </a>
                  </li>
                  <li>
                    <a href="/customers">
                      <span className="gred">View all Customers</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span className="gblue">Get In Touch</span>
                    </a>
                  </li>
                  {/* <li>
                    <a href="">
                      <span class="gyellow"></span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span class="ggreen">Team</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span class="gblue">Community</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span class="gred">Get In Touch</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span class="gyellow">Be a Member</span>
                    </a>
                  </li> */}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
