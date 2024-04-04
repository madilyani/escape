import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Flexible from "components/Flexible";
import { cancel, plusMinus } from "Base/SVG";
import moment from "moment";
export default function Calendar({
  form,
  updateForm,
  setActiveInput,
  setShowCalendar,
  isDetail,
  setIsDisabled,
  disableFunc,
}) {
  const [tab, setTab] = useState("dates");
  const onChange = (dates) => {
    const [start, end] = dates;
    if (new Date(start).toISOString() === new Date(end).toISOString()) {
      updateForm({ startDate: start, endDate: null });
      if (disableFunc && start && end) {
        setIsDisabled(false);
      }
    } else {
      updateForm({ startDate: start, endDate: end });
      if (disableFunc && start && end) {
        setIsDisabled(false);
      }
    }
    if (start && !end) {
      setActiveInput("checkOut");
    }
  };
  const isWeekday = (date) => {
    const day = date.getDay();
    return (
      day !== 1 && day !== 2 && day !== 3 && day !== 4 && day !== 5 && day !== 6
    );
  };
  return (
    <div className="calendar">
      <div className="calendar__inner">
        <div className="calendar__head">
          <div className="calendar__head-title">
            <h6>Select your dates</h6>
            <p>See prices and availability for your dates</p>
          </div>
          <div
            className="calendar__head-close"
            onClick={() => {
              setShowCalendar(false);
              setActiveInput(null);
            }}
          >
            {cancel}
          </div>
        </div>
        {!isDetail && (
          <div className="calendar__tabs">
            <button
              type="button"
              className={"calendar__tab " + (tab === "dates" ? "active" : "")}
              onClick={() => setTab("dates")}
            >
              Dates
            </button>
            <button
              type="button"
              className={
                "calendar__tab " + (tab === "flexible" ? "active" : "")
              }
              onClick={() => setTab("flexible")}
            >
              Flexible
            </button>
          </div>
        )}
        <div className="calendar__content">
          {isDetail ? (
            <div className="calendar__content-inner">
              <DatePicker
                selected={""}
                minDate={moment().toDate()}
                onChange={onChange}
                startDate={form.startDate}
                endDate={form.endDate}
                maxDate={moment().add(1, "years").calendar()}
                selectsRange
                inline
                filterDate={isDetail && isWeekday}
                monthsShown={2}
                calendarStartDay={1}
              />
              {!isDetail && (
                <div className="calendar__foot">
                  <button type="button">
                    <input type="radio" name="exactDates" />
                    <span> Exact dates</span>
                  </button>
                  <button type="button">
                    <input type="radio" name="exactDates" />
                    <span>{plusMinus} 1 day</span>
                  </button>
                  <button type="button">
                    <input type="radio" name="exactDates" />
                    <span>{plusMinus} 2 day</span>
                  </button>
                  <button type="button">
                    <input type="radio" name="exactDates" />
                    <span>{plusMinus} 3 day</span>
                  </button>
                  <button type="button">
                    <input type="radio" name="exactDates" />
                    <span>{plusMinus} 7 day</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              {" "}
              {tab === "dates" && (
                <div className="calendar__content-inner">
                  <DatePicker
                    selected={""}
                    minDate={moment().toDate()}
                    onChange={onChange}
                    startDate={form.startDate}
                    endDate={form.endDate}
                    selectsRange
                    inline
                    filterDate={isDetail && isWeekday}
                    monthsShown={2}
                    calendarStartDay={1}
                  />
                  {!isDetail && (
                    <div className="calendar__foot">
                      <button type="button">
                        <input type="radio" name="exactDates" />
                        <span> Exact dates</span>
                      </button>
                      <button type="button">
                        <input type="radio" name="exactDates" />
                        <span>{plusMinus} 1 day</span>
                      </button>
                      <button type="button">
                        <input type="radio" name="exactDates" />
                        <span>{plusMinus} 2 day</span>
                      </button>
                      <button type="button">
                        <input type="radio" name="exactDates" />
                        <span>{plusMinus} 3 day</span>
                      </button>
                      <button type="button">
                        <input type="radio" name="exactDates" />
                        <span>{plusMinus} 7 day</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
              {tab === "flexible" && <Flexible />}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
