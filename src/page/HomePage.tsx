import React from "react";
import DropdownSearch from "../component/Dropdown";

const HomePage = () => {
  return (
    <div>
      <DropdownSearch multiple={true} searchable={true} theme="light" />
    </div>
  );
};

export default HomePage;
