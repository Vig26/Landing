import React from "react";
import { NavLink } from "react-router-dom";
import Style from "./ListItem.module.css";

function ListItem({ name, linkPath, target }) {
  return (
    <li>
      <NavLink
        to={{ pathname: linkPath }}
        exact
        className={[
          Style.navigation,
          "nav-link px-3 px-lg-4 line-height-medium py-1 my-2",
        ].join(" ")}
        target={target}
      >
        {name}
      </NavLink>
    </li>
  );
}

export default ListItem;
