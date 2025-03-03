import React from "react";
import { NavLink } from "react-router-dom";
import { resources } from "../assets/ressurser";

export default function Nav() {
  const uniqueCategories = Array.from(new Set(resources.map(resource => resource.category)));
  
  return (
    <header>
      <nav>
        <ul>
          {uniqueCategories.map(category => (
            <li key={category.id}>
              <NavLink
                to={`/${category}`}
                className={({ isActive }) => `tablinks ${isActive ? "active" : ""}`}>
                  {category}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
