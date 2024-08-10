import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useHistory } from "react-router-dom";
import emoji from "../styles/Emoji.module.css"

/*
  Click on gear emoji
  Shows edit and change password option
*/
const DropdownIcon = React.forwardRef(({ onClick }, ref) => (
  <span
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  ><i className={`fa-solid fa-gear ${emoji.Emoji}`}></i> </span>
));

export const EditProfileDropdown = ({id}) => {
  const history = useHistory();
  return (
    <Dropdown className="ml-auto" drop="left">
      <Dropdown.Toggle as={DropdownIcon} />
      <Dropdown.Menu
        popperConfig={{ strategy: "fixed" }}
        >
        <Dropdown.Item
          onClick={() => history.push(`/users/${id}/edit`)}
          aria-label="edit-profile"
        >
           <i className={`fa-solid fa-pen-to-square ${emoji.Emoji}`}></i>
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/users/${id}/edit/password`)}
          aria-label="edit-password"
        >
          <i className={`fa-solid fa-lock ${emoji.Emoji}`}></i>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};