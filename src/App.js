import Footer from "Base/Footer";
import Header from "Base/Header";
import Detail from "Detail";
import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Result from "Result";
import ResultMap from "ResultMap";

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    let startSticky = document.getElementById("startSticky");
    let navi = document.getElementById("navi");
    function scrollFunc() {
      if (window.pageYOffset >= startSticky.offsetTop) {
        navi.classList.add("sticky");
      } else {
        navi.classList.remove("sticky");
      }
    }
    const links = document.querySelectorAll(".links");
    const sections = document.querySelectorAll(".anchor");
    function changeLinkState() {
      let index = sections.length;
      while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
      links.forEach((link) => link.classList.remove("active"));
      links[index]?.classList.add("active");
    }
    window.addEventListener("scroll", () => {
      changeLinkState();
      scrollFunc();
    });
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="" element={<Result />} />
          <Route path="/detail/:cardId" element={<Detail />} />
          <Route path="/map" element={<ResultMap />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
