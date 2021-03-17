import * as Icon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SidebarData } from "./SidebarData";
import "../css/Navbar.css";
import logo from "./eoffice.png";
import { IconContext } from "react-icons";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  UncontrolledButtonDropdown,
} from "reactstrap";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "#404f9f" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <Icon.FaBars onClick={showSidebar} />
          </Link>
          <img src={logo} alt="" style={{ marginLeft: 20, marginTop: 10 }} />
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items sn-bg-4" onClick={showSidebar}>
            <li className="navbar-toogle">
              <img
                src={logo}
                alt=""
                style={{ marginLeft: 70, marginTop: 10 }}
              />
              <Link to="#" className="menu-bars-close">
                <AiIcon.AiOutlineMenuFold onClick={showSidebar} />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
export default Navbar;
