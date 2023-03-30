import React from "react";
import { filterData } from "../data";
import "./Filter.css";

const Filter = ({ fn }) => {
  return (
    <div className="filterContainer">
      {filterData.map((filter) => {
        return (
          <div>
            <button key={filter.id} onClick={() => fn(filter.title)}>
              {filter.title}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Filter;
