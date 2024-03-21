import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { cancel, minusIcon, plusIcon } from "../../SVG";

export default function Room({ form, updateForm, showCalendar }) {
  const [active, setActive] = useState(false);
  const [text, setText] = useState("");
  useEffect(() => {
    let totalAdults = 0;
    let totalChildren = 0;
    form?.rooms.forEach((element) => {
      totalAdults = totalAdults + element.adults;
      totalChildren = totalChildren + element.children;
    });
    let text =
      `${form?.rooms.length} Stanze` +
      (totalAdults > 0 ? `, ${totalAdults} Adulti` : ``) +
      (totalAdults > 0 ? `, ${totalAdults} bambini` : ``);
    setText(text);
  }, [form?.rooms]);

  return (
    <div className="searchPopActs__outer">
      <div
        className={"searchPopActs " + (active ? "active" : "")}
        onClick={() => {
          setActive(!active);
        }}
      >
        <div className="searchPopAct">
          <div className="searchPopDate__title">Adults</div>
          <div className="searchPopDate__input">
            <input placeholder="0" type="text" readOnly />
          </div>
        </div>
        <div className="searchPopAct">
          <div className="searchPopDate__title">Children</div>
          <div className="searchPopDate__input">
            <input placeholder="0" type="text" readOnly />
          </div>
        </div>
        <div className="searchPopAct">
          <div className="searchPopDate__title">Room</div>
          <div className="searchPopDate__input">
            <input placeholder="0" type="text" readOnly />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {active === true && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0, y: 10 }}
            className={`searchItem__room  ${active ? "active" : ""} `}
          >
            <div className="searchItem__room-head">
              <button
                type="button"
                className="searchItem__room-head-reset"
                onClick={() => {
                  updateForm({
                    rooms: [
                      {
                        id: "1",
                        adults: 2,
                        children: 0,
                        children_age: [],
                      },
                    ],
                  });
                }}
              >
                Reset
              </button>
              <button
                type="button"
                className="searchItem__room-head-add"
                onClick={() => {
                  if (form?.rooms?.length + 1 <= 3) {
                    updateForm({
                      rooms: [
                        ...form.rooms,
                        {
                          id: new Date().toISOString(),
                          adults: 2,
                          children: 0,
                          children_age: [],
                        },
                      ],
                    });
                  }
                }}
              >
                Add Room
              </button>
            </div>
            <div className="searchItem__room-inner">
              {form?.rooms?.map((item, index) => {
                return (
                  <div className="searchItem__room-item" key={index}>
                    <div className="searchItem__room-item-title">
                      Room {index + 1}{" "}
                      {form?.rooms?.length > 1 && (
                        <button
                          type="button"
                          onClick={() => {
                            let arr = [
                              ...form?.rooms.filter(
                                (filterItem) => filterItem?.id !== item?.id
                              ),
                            ];
                            updateForm({
                              rooms: arr,
                            });
                          }}
                        >
                          {cancel}
                        </button>
                      )}
                    </div>
                    <div className="searchItem__room-item-content">
                      <div className="searchItem__room-item-row">
                        <h6>Adults</h6>
                        <div className="searchItem__room-spinbox">
                          <div
                            className={
                              "searchItem__room-spinbox-opr " +
                              (item?.adults - 1 === 0 ? "disabled" : "")
                            }
                            onClick={() => {
                              if (item.adults - 1 !== 0) {
                                let arr = [...form?.rooms];
                                const index = arr
                                  ?.map((item2) => item2.id)
                                  .indexOf(item.id);
                                arr[index] = {
                                  ...arr[index],
                                  adults: item?.adults - 1,
                                };
                                updateForm({
                                  rooms: arr,
                                });
                              }
                            }}
                          >
                            {minusIcon}
                          </div>
                          <div className="searchItem__room-spinbox-num">
                            {item?.adults}
                          </div>
                          <div
                            className="searchItem__room-spinbox-opr"
                            onClick={() => {
                              let arr = [...form?.rooms];
                              const index = arr
                                ?.map((item2) => item2.id)
                                .indexOf(item.id);
                              arr[index] = {
                                ...arr[index],
                                adults: item?.adults + 1,
                              };
                              updateForm({
                                rooms: arr,
                              });
                            }}
                          >
                            {plusIcon}
                          </div>
                        </div>
                      </div>
                      <div className="searchItem__room-item-row">
                        <h6>Children</h6>
                        <div className="searchItem__room-spinbox">
                          <div
                            className={
                              "searchItem__room-spinbox-opr " +
                              (item?.children - 1 === -1 ? "disabled" : "")
                            }
                            onClick={() => {
                              if (item.children - 1 !== -1) {
                                let arr = [...form?.rooms];
                                const index = arr
                                  ?.map((item2) => item2.id)
                                  .indexOf(item.id);
                                let arr2 = arr[index].children_age;
                                arr2.pop();
                                arr[index] = {
                                  ...arr[index],
                                  children: item?.children - 1,
                                  children_age: arr2,
                                };
                                updateForm({
                                  rooms: arr,
                                });
                              }
                            }}
                          >
                            {minusIcon}
                          </div>
                          <div className="searchItem__room-spinbox-num">
                            {item?.children}
                          </div>
                          <div
                            className={
                              "searchItem__room-spinbox-opr " +
                              (item.children + 1 <= 3 ? "" : "disabled")
                            }
                            onClick={() => {
                              if (item.children + 1 <= 3) {
                                let arr = [...form?.rooms];
                                const index = arr
                                  ?.map((item2) => item2.id)
                                  .indexOf(item.id);
                                arr[index] = {
                                  ...arr[index],
                                  children: item?.children + 1,
                                  children_age: [...item.children_age, 0],
                                };
                                updateForm({
                                  rooms: arr,
                                });
                              }
                            }}
                          >
                            {plusIcon}
                          </div>
                        </div>
                      </div>
                      {item?.children > 0 && (
                        <div className="searchItem__room-item-age">
                          <p>Age of children on date of travel:</p>
                          <div className="searchItem__room-item-age-items">
                            {item?.children_age.map((item2, index2) => {
                              return (
                                <select
                                  key={index2}
                                  value={item2}
                                  onChange={(e) => {
                                    let arr = [...form?.rooms];
                                    const indexx = arr
                                      ?.map((item2) => item2.id)
                                      .indexOf(item.id);
                                    let arr2 = arr[indexx].children_age;
                                    arr2[index2] = e.target.value;
                                    arr[indexx] = {
                                      ...arr[indexx],
                                      children_age: arr2,
                                    };
                                    updateForm({
                                      rooms: arr,
                                    });
                                  }}
                                >
                                  {[
                                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                    13, 14, 15, 16, 17,
                                  ].map((item3, index3) => {
                                    return (
                                      <option key={index3} value={item3}>
                                        {item3}
                                      </option>
                                    );
                                  })}
                                </select>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}