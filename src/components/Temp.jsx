import React from "react";

function Temp() {
  return (
    <div className="w-screen h-screen">
      <div className="flex flex-row h-full w-full">
        <div className="w-1/2 h-full bg-black">
          <div className="flex w-full h-full flex-col">
            <div className="w-full h-3/4"></div>
            <div className="w-full h-1/4"></div>
          </div>
        </div>
        <div className="w-1/2 h-full bg-red-500"></div>
      </div>
    </div>
  );
}

export default Temp;
