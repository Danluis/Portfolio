// ProjectsCardHover.js
import React from "react";

export default function ProjectCardHover({ title, description, onMouseLeave }) {
  return (
    <div key={title} className="mt-4 w-56 rounded overflow-hidden shadow-lg bg-home opacity-5- inline-block mr-8 p-8 h-3/5 " onMouseLeave={onMouseLeave}>
      <div className="font-bold text-lg text-blue-500 pb-8">{title}</div>
      <p className="text-green-300">{description}</p>
    </div>
  );
}
