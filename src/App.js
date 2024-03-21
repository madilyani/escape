import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Base/Header";
import Footer from "./Base/Footer";
import Result from "./Result/Result";
import ResultMap from "./Result/ResultMap";

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="" element={<Result />} />
          <Route path="/map" element={<ResultMap />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
