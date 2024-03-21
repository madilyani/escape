import React from "react";
import { searchIcon } from "../../SVG";

export default function Search() {
  return (
    <div className="filterSearch__outer">
      <div className="filterSearch">
        <span>{searchIcon}</span>
        <input type="text" placeholder="Nome Hotel" />
        <button type="button">{searchIcon}</button>
      </div>
    </div>
  );
}
