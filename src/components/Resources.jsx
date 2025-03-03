import React from "react";
import { resources } from "../assets/ressurser";

export default function Resources({ category }) {
  const filteredResources = resources.filter(resource => resource.category === category);

  return (
    <div>
      <ul>
        {filteredResources.map((resource, index) => (
          <li key={index}>
            <a href={resource.url}>
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
