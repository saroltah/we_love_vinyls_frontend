import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../context/CurrentUserContext";
import axios from "axios";
import ProfilePic from "./ProfilePic";
import ClickOutsideToggle from "../hooks/ClickOutsideToggle";
import { removeTokenTimestamp } from "../utils/utils";

function Navigation() {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { fullMenu, setFullMenu, ref } = ClickOutsideToggle();

  const handleLogOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      console.log(err);
    }
  };

  const loggedInMenu = (
    <>
      <NavLink to="/mymarkets"> My markets</NavLink>
      <NavLink to="/myrecords"> My records </NavLink>
      <NavLink to={`/users/${currentUser?.id}`}>
        <ProfilePic
          src={currentUser?.profile_image}
          text={currentUser?.username}
          height={40}
        />
      </NavLink>
      <NavLink to="/" onClick={handleLogOut}>
        Log out
      </NavLink>
    </>
  );
  const loggedOutMenu = (
    <>
      <NavLink to="/login">Log in</NavLink>
      <NavLink to="/signup"> Sign up</NavLink>
    </>
  );
  return (
    <div className="Navigation">
      <Navbar
        collapseOnSelect
        expanded={fullMenu}
        expand="lg"
        bg="dark"
        variant="dark">
        <NavLink to="/">We ❤️ Vinyls</NavLink>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setFullMenu(!fullMenu)}
          ref={ref}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/">Records</NavLink>
            <NavLink to="/markets">Markets</NavLink>
          </Nav>
          <Nav>{currentUser ? loggedInMenu : loggedOutMenu}</Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
