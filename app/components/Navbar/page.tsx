import React from "react";
import SearchButton from "../SearchButton/page";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      {/* Left section - only visible in larger screens */}
      <div className="flex-none hidden lg:block">
        <a className="btn btn-ghost normal-case text-xl">storage</a>
      </div>

      {/* Center section - adjust based on screen size */}
      <div className="flex-1 lg:flex-auto">
        <SearchButton />
      </div>

      {/* Right section - hide early on small screens, then display as flex */}
      <div className="flex-none hidden md:flex justify-end gap-2">
        <a className="btn btn-ghost normal-case text-xl">Become a Host</a>
        <div className="dropdown dropdown-end">
          <button className="btn">Log in</button>
          {/* Dropdown content */}
          {/* ... */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
