import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import emoji from "../styles/Emoji.module.css"

/*
  Click on gear emoji
  Shows edit and delete option
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

export const PostDropdown = ({ editPost, deletePost }) => {
  
  return (
    <Dropdown className="ml-auto" drop="left">
      <Dropdown.Toggle as={DropdownIcon} />
      <Dropdown.Menu
        popperConfig={{ strategy: "fixed" }}
      >
        <Dropdown.Item
          onClick={editPost}
          aria-label="edit"
        >
          <i className={`fa-solid fa-pen-to-square ${emoji.Emoji}`}></i>
        </Dropdown.Item>
        <Dropdown.Item
          onClick={deletePost}
          aria-label="delete"
        >
          <i className={`fa-solid fa-trash-can ${emoji.Emoji}`}></i>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};