import React from "react";
import { NavLink } from "react-router-dom";
import { resources } from "../assets/ressurser";

export default function Nav() {
  const uniqueCategories = Array.from(new Set(resources.map(resource => resource.category)));
  const categories = uniqueCategories.map((category, index) => ({
    id: index + 1,
    name: category.charAt(0).toUpperCase() + category.slice(1),
    slug: category
  }));

  return (
    <header>
      <nav>
        <ul>
          {categories.map(category => (
            <li key={category.id}>
              <NavLink
                to={`/category/${category.slug}`}
                className={({ isActive }) => `tablinks ${isActive ? "active" : ""}`}
              >
                {category.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
