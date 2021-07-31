import React from "react";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import NavList from "../Navigation/NavList";

const AppBar = () => {
  return (
    <header className="header">
      <NavList />
      <LanguageSwitcher />
    </header>
  );
};

export default AppBar;
