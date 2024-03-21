import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Base/Header";
import Footer from "./Base/Footer";
import Result from "./Result/Result";

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
        </Routes>
      </main>
      <Footer />
    </>
  );
}
