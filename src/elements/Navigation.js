import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../context/CurrentUserContext";
import axios from "axios";
import ProfilePic from "./ProfilePic";
import ClickOutsideToggle from "../hooks/ClickOutsideToggle";
import { removeTokenTimestamp } from "../utils/utils";
import styles from "../styles/Navigation.module.css";

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
      <NavLink to="/mymarkets" className={styles.NavLink}> My markets</NavLink>
      <NavLink to="/myrecords" className={styles.NavLink}> My records </NavLink>
      <NavLink to={`/users/${currentUser?.profile_id}`} className={styles.NavLink}>
        <ProfilePic
          src={currentUser?.profile_image}
          text={currentUser?.username}
          height={40} 
          className={styles.NavLink}
        />
      </NavLink>
      <NavLink to="/" onClick={handleLogOut} className={styles.NavLink}>
        Log out
      </NavLink>
    </>
  );
  const loggedOutMenu = (
    <>
      <NavLink to="/login" className={styles.NavLink}>Log in</NavLink>
      <NavLink to="/signup" className={styles.NavLink}> Sign up</NavLink>
    </>
  );

  return (
    <div className={styles.Navigation}>
      <Navbar
        collapseOnSelect
        expanded={fullMenu}
        expand="lg"
        className={styles.Navbar}
        >
        <NavLink to="/" className={`${styles.NavLink} ${styles.Logo}`}>We ❤️ Vinyls</NavLink>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setFullMenu(!fullMenu)}
          ref={ref}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className={`${styles.Nav} mr-auto`}>
            <NavLink className={styles.NavLink} to="/records">Records</NavLink>
            <NavLink className={styles.NavLink} to="/markets">Markets</NavLink>
          </Nav>
          <Nav className={styles.Nav}>{currentUser ? loggedInMenu : loggedOutMenu}</Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
