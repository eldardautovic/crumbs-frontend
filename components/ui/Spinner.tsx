import React from "react";

import IconSpinner from "../Icons/IconSpinner";

const Spinner = () => {
  return (
    <div className="h-full flex justify-center items-center dark:bg-gray-900 bg-gray-100">
      <span className="fill-orange-400 dark:fill-orange-400">
        <IconSpinner />
      </span>
    </div>
  );
};

export default Spinner;
