import React from "react";
import sprite from "../../icons/sprite.svg";

const LanguageSwitcher = () => {
  return (
    <div className="languageSwitcher__wrapper">
      <svg className="languageSwitcher__icon">
        <use href={sprite + "#icon-sphere"}></use>
      </svg>
      <select
        name="Language"
        className="languageSwitcher"
        id="language-switcher"
      >
        <option value="English">English</option>
        <option value="Русский">Русский</option>
        <option value="Українська">Українська</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
