import React, { useState } from "react";
import { boatIcon, carIcon, planeIcon } from "Base/SVG";
import { motion } from "framer-motion";
export default function Transport() {
  const [faq, setFaq] = useState(false);

  return (
    <section className="transport">
      <div className="auto__container">
        <div className="transport__inner">
          <button type="button" className="transport__inner-title">
            <div className="transport__inner-icon">{carIcon}</div>
            <h4>Trasporto</h4>
          </button>
          <div className="transport__inner-row">
            <div className="transportItem red">
              <div className="transportItem__head">
                <div className="transportItem__head-title">
                  <span></span>
                  <h5>Nessun Viaggio incluso</h5>
                </div>
              </div>
            </div>
            <div className={"transportItem green " + (faq ? "active" : "")}>
              <div className="transportItem__head" onClick={() => setFaq(!faq)}>
                <div className="transportItem__head-title">
                  <span></span>
                  <h5>
                    Pacchetto viaggio dalla tua città <b> A/r •</b> a partire da
                    <b>€ 53</b>
                  </h5>
                </div>
                <div className="transportItem__head-price">
                  <h4>120€</h4>
                  <p>a persona</p>
                </div>
              </div>
              {faq && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  exit={{ opacity: 0 }}
                  className="transportItem__body"
                >
                  <div className="transportItem__body-row">
                    <div className="transportSelect__outer">
                      <label htmlFor="">regione</label>
                      <div className="transportSelect">
                        <h6>Lombardia</h6>
                        <p>
                          A partire da <b>53,99€</b>
                        </p>
                      </div>
                    </div>
                    <div className="transportSelect__outer md">
                      <label htmlFor="">Città</label>
                      <div className="transportSelect">
                        <h6>Milano</h6>
                        <p>
                          A partire da <b>67,99€</b>
                        </p>
                      </div>
                    </div>
                    <div className="transportSelect__outer">
                      <label htmlFor="">Tipo di trasporto</label>
                      <div className="transportSelect">
                        <h6> {planeIcon} Aereo</h6>
                        <p>
                          A partire da <b>110,00€</b>
                        </p>
                      </div>
                    </div>
                    <div className="transportSelect__outer">
                      <label htmlFor="">Aeroporto</label>
                      <div className="transportSelect">
                        <h6> Milano Linate</h6>
                        <p>
                          <b>120,00€</b>
                        </p>
                      </div>
                    </div>
                    <div className="transportSelect__outer xsm">
                      <label htmlFor="">Orario Andata</label>
                      <div className="transportSelect">
                        <h6> 08:30</h6>
                      </div>
                    </div>
                    <div className="transportSelect__outer xsm">
                      <label htmlFor="">Orario ritorno</label>
                      <div className="transportSelect">
                        <h6> 08:30</h6>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
            <div className="transportItem purple">
              <div className="transportItem__head">
                <div className="transportItem__head-title">
                  <span></span>
                  <h5>
                    Passaggio Marittimo <small> A/r</small>
                  </h5>
                </div>
                <div className="transportItem__head-price">
                  <h4>120€</h4>
                  <p>a persona</p>
                </div>
              </div>
              <div className="transportItem__body">
                <div className="transportItem__body-row">
                  <div className="transportSelect__outer">
                    <label htmlFor="">Tipo di trasporto</label>
                    <div className="transportSelect">
                      <h6> {boatIcon} Nave</h6>
                      <p>
                        A partire da <b>110,00€</b>
                      </p>
                    </div>
                  </div>
                  <div className="transportSelect__outer">
                    <label htmlFor="">Porto di Partenza</label>
                    <div className="transportSelect">
                      <h6>Pozzuoli</h6>
                      <p>
                        A partire da <b>110,00€</b>
                      </p>
                    </div>
                  </div>
                  <div className="transportSelect__outer">
                    <label htmlFor="">Porto di Arrivo</label>
                    <div className="transportSelect">
                      <h6> Pozzuoli</h6>
                      <p>
                        A partire da <b>110,00€</b>
                      </p>
                    </div>
                  </div>
                  <div className="transportSelect__outer">
                    <label htmlFor="">Tipo di trasporto</label>
                    <div className="transportSelect">
                      <h6>Con Auto</h6>
                      <p>
                        A partire da <b>110,00€</b>
                      </p>
                    </div>
                  </div>
                  <div className="transportSelect__outer sm">
                    <label htmlFor="">Dimensione Auto</label>
                    <div className="transportSelect">
                      <h6>4 - 4,5 metri</h6>
                    </div>
                  </div>
                  <div className="transportSelect__outer xsm">
                    <label htmlFor="">Orario Andata</label>
                    <div className="transportSelect">
                      <h6> 08:30</h6>
                    </div>
                  </div>
                  <div className="transportSelect__outer xsm">
                    <label htmlFor="">Orario ritorno</label>
                    <div className="transportSelect">
                      <h6> 08:30</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="transportItem orange">
              <div className="transportItem__head">
                <div className="transportItem__head-title">
                  <span></span>
                  <h5>
                    Trasferimento Aeroporto/Stazione a hotel <small> A/r</small>
                  </h5>
                </div>
                <div className="transportItem__head-price">
                  <h4>120€</h4>
                  <p>a persona</p>
                </div>
              </div>
              <div className="transportItem__body">
                <div className="transportItem__body-row">
                  <div className="transportSelect__outer">
                    <label htmlFor="">Aeroporto/Stazione</label>
                    <div className="transportSelect">
                      <h6> Pozzuoli</h6>
                      <p>
                        <b>120,00€</b>
                      </p>
                    </div>
                  </div>
                  <div className="transportSelect__outer xsm">
                    <label htmlFor="">Orario Andata</label>
                    <div className="transportSelect">
                      <h6> 08:30</h6>
                    </div>
                  </div>
                  <div className="transportSelect__outer xsm">
                    <label htmlFor="">Orario ritorno</label>
                    <div className="transportSelect">
                      <h6> 08:30</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
