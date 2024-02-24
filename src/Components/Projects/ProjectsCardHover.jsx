// ProjectsCardHover.js
import React from "react";

export default function ProjectCardHover({ title, description, onMouseLeave }) {
  return (
    <div key={title} className="mt-4 sm:w-1/4 rounded overflow-hidden shadow-lg bg-home inline-block mr-8 p-8 h-4/5" onMouseLeave={onMouseLeave}>
      <div className="font-bold text-lg text-blue-500 pb-8">{title}</div>
      <p className="text-green-300">{description}</p>
    </div>
  );
}
