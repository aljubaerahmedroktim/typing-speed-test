import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Landing from "./components/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./components/Start";
import Test from "./components/Test";
import Result from "./components/Result";
import Certificate from "./components/Certificate";

export default function App() {
  return (
    <BrowserRouter>
      <div className="h-screen py-2 w-full font-sans">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/start" element={<Start/>} />
          <Route path="/continue" element={<Test/>} />
          <Route path="/result" element={<Result/>} />
          <Route path="/certificate" element={<Certificate/>} />
        </Routes>
        <footer className="fixed text-slate-300 right-5 bottom-2 hover:text-black">
          <a href="https://aljubaerahmedroktim.bio.link" target="_blank">Copyright &copy; 2024 - Jubaer</a>
        </footer>
      </div>
      <section className="mask"></section>
    </BrowserRouter>
  );
}
