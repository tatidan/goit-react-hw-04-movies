import React from "react";

const GoBackButton = ({ handleGoBack }) => {
  return (
    <button type="button" onClick={handleGoBack} className="goBackBtn">
      Go back
    </button>
  );
};

export default GoBackButton;
