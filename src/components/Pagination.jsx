import React from "react";

function Pagination({ handlePrev, handleNext, pageNo }) {
  return (
    <div className="bg-gray-900/60 p-4 mt-8 flex justify-center">
      <div className="px-8 hover:cursor-pointer" onClick={handlePrev}>
        <i className="fa-solid fa-circle-arrow-left"></i>
      </div>
      <div className="font-bold">{pageNo}</div>
      <div className="px-8 hover:cursor-pointer" onClick={handleNext}>
        <i className="fa-solid fa-circle-arrow-right "></i>
      </div>
    </div>
  );
}

export default Pagination;
