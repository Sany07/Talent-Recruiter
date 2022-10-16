import React from "react";
import { Link } from "react-router-dom";

const PageTitleBanner = ({ title }) => {
  return (
    <div className="py-12 bg-secondary">
      <div className="container mx-auto px-5 text-center md:text-start">
        <h2 className="text-accent text-3xl md:text-4xl lg:text-5xl">
          {title}
        </h2>
        <div className="flex gap-2 text-accent text-xl pt-2 justify-center md:justify-start">
          <Link to="/home" className="hover:text-primary">
            Home
          </Link>{" "}
          /<p className="text-primary">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default PageTitleBanner;
