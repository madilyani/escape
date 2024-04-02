import React, { useState } from "react";
import { boatIcon, carIcon, planeIcon } from "Base/SVG";
import { motion } from "framer-motion";
import DropdownDuo from "Base/DropdownDuo";
import {
  airportList,
  dimensionList,
  regioneList,
  regioneListSolo,
  timeList,
  transportTypes,
} from "./transportModul";
export default function Transport() {
  const [tab, setTab] = useState(null);
  return (
    <section className="transport">
      <div className="auto__container">
        <div className="transport__inner">
          <button type="button" className="transport__inner-title">
            <div className="transport__inner-icon">{carIcon}</div>
            <h4>Trasporto</h4>
          </button>
          <div className="transport__inner-row">
            <TransportItem
              id="first"
              setTab={setTab}
              tab={tab}
              addClass={"red"}
              title={"Nessun Viaggio incluso"}
            />
            <TransportItem
              id="second"
              setTab={setTab}
              tab={tab}
              price={true}
              addClass={"green"}
              title={
                <>
                  {" "}
                  Pacchetto viaggio dalla tua città <b> A/r •</b> a partire da
                  <b>€ 53</b>
                </>
              }
            >
              <div className="transportItem__body-row">
                <div className="dropdown__outer">
                  <label htmlFor="">regione</label>
                  <DropdownDuo list={regioneList} selected={regioneList[0]} />
                </div>
                <div className="dropdown__outer md">
                  <label htmlFor="">Città</label>
                  <DropdownDuo list={regioneList} selected={regioneList[1]} />
                </div>
                <div className="dropdown__outer">
                  <label htmlFor="">Tipo di trasporto</label>
                  <DropdownDuo
                    list={transportTypes}
                    selected={transportTypes[0]}
                  />
                </div>
                <div className="dropdown__outer">
                  <label htmlFor="">Aeroporto</label>
                  <DropdownDuo list={airportList} selected={airportList[0]} />
                </div>
                <div className="dropdown__outer xsm">
                  <label htmlFor="">Orario Andata</label>
                  <DropdownDuo list={timeList} selected={timeList[0]} />
                </div>{" "}
                <div className="dropdown__outer xsm">
                  <label htmlFor="">Orario ritorno</label>
                  <DropdownDuo list={timeList} selected={timeList[0]} />
                </div>
              </div>
            </TransportItem>
            <TransportItem
              id="third"
              setTab={setTab}
              tab={tab}
              price={true}
              addClass={"purple"}
              title={
                <>
                  Passaggio Marittimo <small> A/r</small>
                </>
              }
            >
              <div className="transportItem__body-row">
                <div className="dropdown__outer">
                  <label htmlFor="">Tipo di trasporto</label>
                  <DropdownDuo
                    list={transportTypes}
                    selected={transportTypes[0]}
                  />
                </div>
                <div className="dropdown__outer">
                  <label htmlFor="">Porto di Partenza</label>
                  <DropdownDuo list={regioneList} selected={regioneList[0]} />
                </div>
                <div className="dropdown__outer md">
                  <label htmlFor="">Porto di Arrivo</label>
                  <DropdownDuo list={regioneList} selected={regioneList[1]} />
                </div>
                <div className="dropdown__outer sm">
                  <label htmlFor="">Dimensione Auto</label>
                  <DropdownDuo
                    list={dimensionList}
                    selected={dimensionList[0]}
                  />
                </div>{" "}
                <div className="dropdown__outer xsm">
                  <label htmlFor="">Orario Andata</label>
                  <DropdownDuo list={timeList} selected={timeList[0]} />
                </div>{" "}
                <div className="dropdown__outer xsm">
                  <label htmlFor="">Orario ritorno</label>
                  <DropdownDuo list={timeList} selected={timeList[0]} />
                </div>
              </div>
            </TransportItem>
            <TransportItem
              id="fourth"
              setTab={setTab}
              tab={tab}
              price={true}
              addClass={"orange"}
              title={
                <>
                  Trasferimento Aeroporto/Stazione a hotel <small> A/r</small>
                </>
              }
            >
              <div className="transportItem__body-row">
                <div className="dropdown__outer">
                  <label htmlFor="">Aeroporto/Stazione</label>
                  <DropdownDuo list={airportList} selected={airportList[0]} />
                </div>
                <div className="dropdown__outer xsm">
                  <label htmlFor="">Orario Andata</label>
                  <DropdownDuo list={timeList} selected={timeList[0]} />
                </div>{" "}
                <div className="dropdown__outer xsm">
                  <label htmlFor="">Orario ritorno</label>
                  <DropdownDuo list={timeList} selected={timeList[0]} />
                </div>
              </div>
            </TransportItem>
          </div>
        </div>
      </div>
    </section>
  );
}
export const TransportItem = ({
  children,
  addClass,
  title,
  price,
  setTab,
  tab,
  id,
}) => {
  return (
    <div className={`transportItem ${addClass} ${tab === id ? "active" : ""} `}>
      <div
        className="transportItem__head"
        onClick={() => {
          if (tab === id) {
            setTab(null);
          } else {
            setTab(id);
          }
        }}
      >
        <div className="transportItem__head-title">
          <span></span>
          <h5>{title}</h5>
        </div>
        {price ? (
          <>
            {" "}
            <div className="transportItem__head-price">
              <h4>120€</h4>
              <p>a persona</p>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      {tab === id && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          exit={{ opacity: 0 }}
          className="transportItem__body"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};
