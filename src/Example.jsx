import { useState } from 'react';

function Example() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <span
        className={`p-4 border border-gray-300 dark:border-gray-700 rounded-md cursor-pointer transition-colors duration-300 ${isHovered ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Hover me
      </span>
    </div>
  );
}

export default Example;
