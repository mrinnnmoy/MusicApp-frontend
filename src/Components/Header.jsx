import React from 'react';
import CenterMenu from './CenterMenu';

function Header() {

  return (
    <div className="header bg-[#081730] flex items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem]">
      {/* logo */}
      <img src={require("../img/MuzicLogo.png")} alt="logo" className="logo w-[42px] h-[42px]" />

      {/* side menu */}
      <CenterMenu />

      <div className="buttons flex">
        <button className="mr-[35px] hover:bg-[#232A4E]">
          Log in
        </button>
        <button className="bg-[#232A4E]">
          Sign up
        </button>
      </div>
    </div>
  )
};

export default Header;