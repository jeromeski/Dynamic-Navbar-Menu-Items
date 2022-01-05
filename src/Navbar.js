import React from "react";
import NavbarItem from "./NavbarItem";
import data from "./data";

const Navbar = () => {
  return data.map((item) => <NavbarItem key={item.id} {...item} />);
};

export default Navbar;
