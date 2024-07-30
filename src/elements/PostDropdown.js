import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const DropdownIcon = React.forwardRef(({ onClick }, ref) => (
  <span
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  ><i>✨</i> </span>
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
          <i>💻</i>
        </Dropdown.Item>
        <Dropdown.Item
          onClick={deletePost}
          aria-label="delete"
        >
          <i>🌿</i>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};