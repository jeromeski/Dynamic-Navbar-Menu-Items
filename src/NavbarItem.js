import React from "react";

const NavbarItem = (props) => {
  console.log(props);
  const { id, title, link, megaMenu, subMenu } = props;
  return (
    <div key={id}>
      <h3>{title}</h3>
      <ul>
        {subMenu &&
          subMenu.map((subItem, idx) => <li key={idx}>{subItem.title}</li>)}
      </ul>
    </div>
  );
};

export default NavbarItem;
