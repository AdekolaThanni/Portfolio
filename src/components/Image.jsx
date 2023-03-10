import React from "react";
import { useState } from "react";

function Image({ src, alt, className, containerClassName }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div
      className={`bg-gray-dark rounded-3xl overflow-hidden border border-gray-dark ${containerClassName}`}
    >
      <img
        src={src}
        alt={alt}
        className={`${!imageLoaded && "hidden"}  ${className}`}
        onLoad={() => setImageLoaded(true)}
      />
      {!imageLoaded && (
        <div className="flex items-center justify-center h-full">
          <span className="border-r-2 border-b-2 border-white w-[2rem] h-[2rem]  block rounded-full animate-spin"></span>
        </div>
      )}
    </div>
  );
}

export default Image;
