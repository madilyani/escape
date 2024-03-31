import React, { useEffect, useRef, useState } from "react";
import { chevronBottom } from "./SVG";

const DropdownDuo = ({
  selected = null,
  list,
  addClass,
  key = null,
  value = null,
  onChange,
}) => {
  const wrapper = useRef(null);
  const [active, setActive] = useState(false);
  const [currentList, setCurrentList] = useState(list);
  const [currentSelected, setCurrentSelected] = useState(selected);

  const onClick = (item) => {
    setCurrentSelected(item);
    if (onChange) onChange(item);

    setActive(false);
  };

  useEffect(() => {
    setCurrentList(
      !currentSelected
        ? list
        : list.filter((item) => {
            let compareKey = key ?? "value";
            return item[compareKey] !== currentSelected[compareKey];
          })
    );
  }, [list, currentSelected]);
  const toggleActive = () => {
    setActive(!active);
  };
  useEffect(() => {
    setCurrentSelected(selected);
  }, [selected]);

  useEffect(() => {
    const windowClick = ({ target }) => {
      if (!wrapper.current.contains(target)) setActive(false);
    };

    if (active) window.addEventListener("click", windowClick);
    else window.removeEventListener("click", windowClick);

    return () => window.removeEventListener("click", windowClick);
  }, [active]);
  console.log(currentList);
  return (
    <div
      className={`dropdown ${active ? "active " : ""} ${addClass}`}
      ref={wrapper}
    >
      <div className="dropdown__selected" onClick={toggleActive}>
        <h6>
          {currentSelected?.icon && currentSelected.icon}
          {currentSelected ? currentSelected.value : "-----"}
        </h6>
        <p>
          {currentSelected.from && "A partire da "}{" "}
          <b>{currentSelected ? currentSelected.price : "-----"}</b>
        </p>
      </div>
      <div className="dropdown__options">
        {currentList.map((item, index) => {
          return (
            <div
              className="dropdown__option"
              key={index}
              onClick={() => onClick(item)}
            >
              <h6>
                {item.icon && item.icon}
                {item.value}
              </h6>{" "}
              <p>
                {item.from && "A partire da "}
                <b>{item.price}</b>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DropdownDuo;
