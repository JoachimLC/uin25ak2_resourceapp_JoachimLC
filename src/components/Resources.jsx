import React from "react";
import { useParams } from "react-router-dom";
import { resources } from "../assets/ressurser";

export default function Resources() {
  const { slug } = useParams();

  const filteredResources = resources.filter(resource => resource.category === slug);

  return (
    <div>
      <h1>Resources for {slug}</h1>
      <ul>
        {filteredResources.map((resource, index) => (
          <li key={index}>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
