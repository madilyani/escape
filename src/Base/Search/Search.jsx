import React, { useState } from "react";
import Where from "./Where";
import Room from "./Room";
import { searchIcon2 } from "../SVG";

export default function Search() {
  const [form, setForm] = useState({
    where: "",
  });
  console.log("form", form);
  const updateForm = (data) => {
    setForm((form) => ({ ...form, ...data }));
  };
  return (
    <div className="search">
      <div className="search__inner">
        <div className="search__items">
          <Where form={form} updateForm={updateForm} />
          <div className={"searchItem "}>
            <div className="searchItem__title">Check In</div>
            <div className="searchItem__input">
              <input placeholder="Select Date" type="text" />
            </div>
          </div>
          <div className={"searchItem"}>
            <div className="searchItem__title">Check Out</div>
            <div className="searchItem__input">
              <input placeholder="Select Date" type="text" />
            </div>
          </div>
          <Room form={form} updateForm={updateForm} />
        </div>
        <button type="button" className="search__btn">
          {searchIcon2}
        </button>
      </div>
    </div>
  );
}
