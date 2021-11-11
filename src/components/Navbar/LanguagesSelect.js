import React from "react";

const LanguagesSelect = () => {
  return (
    <>
      <select autoComplete="off" name="language" id="language-selection">
        <option value="Nederlands">🌐 Netherlands</option>
        <option value="English" selected>
          🌐 English
        </option>
      </select>
    </>
  );
};

export default LanguagesSelect;
