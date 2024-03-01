import React from "react";
import { HashLoader } from "react-spinners";

const PageLoader = ({ loading, size }) => {
  return (
    <div>
      <span className="flex gap-1 items-center">
        <HashLoader
          color="#FFB400"
          loading={loading}
          size={size || 130}
          data-testid="loader"
        />
      </span>
    </div>
  );
};

export default PageLoader;
