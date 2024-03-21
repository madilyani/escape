import React, { useEffect, useState } from "react";
import Map from "./components/Map";
import FilterDrop from "./components/FilterDrop";
import Rating from "./components/Rating";
import Search from "./components/Search";
import Evi from "./components/Evi";
import Cats from "./components/Cats";
import { locations, services, treatments } from "./components/modul";
import FiilterMob from "./components/FiilterMob";

export default function Filter() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 1120) {
      setMobile(true);
    } else {
      setMobile(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1120) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    });
  }, []);
  const [popWrap, setPopWrap] = useState(false);
  const [mobDrop, setMobDrop] = useState(null);

  const closePop = (e) => {
    document.body.classList.remove("active");
    setMobDrop(null);
    setPopWrap(false);
    // }
  };
  return (
    <div className="filter">
      <Map />
      {mobile && (
        <FiilterMob
          closePop={closePop}
          mobDrop={mobDrop}
          setMobDrop={setMobDrop}
          popWrap={popWrap}
          setPopWrap={setPopWrap}
        />
      )}
      <div
        className={"popWrap " + (popWrap ? "active" : "")}
        onClick={closePop}
      ></div>
      <div className="filterDrops">
        <FilterDrop title={"Filtra per Stelle"}>
          <Rating />
        </FilterDrop>
        <FilterDrop title={"filtra per nome dell’Hotel"}>
          <Search />
        </FilterDrop>
        <FilterDrop title={"servizi"} search={true}>
          <Cats modul={services} />
        </FilterDrop>
        <FilterDrop title={"località"} search={true}>
          <Cats modul={locations} />
        </FilterDrop>
        <FilterDrop title={"Trattamento"}>
          <Cats modul={treatments} />
        </FilterDrop>{" "}
        <FilterDrop title={"In Evidenza"}>
          <Evi />
        </FilterDrop>
      </div>
    </div>
  );
}
