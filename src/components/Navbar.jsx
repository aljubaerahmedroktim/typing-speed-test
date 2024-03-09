import React from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const name = useSelector((state)=> state.nameReducer);

  return (
    <>
      <header className="h-[50px] sm:h-[64px] items-center bg-white/50 backdrop-blur-md border mt-0 rounded-full px-5 sm:px-10 flex flex-row justify-between  max-w-7xl mx-2 lg:mx-auto">
        <Link to={"/"} className="flex flex-row items-center gap-5">
          <img src={Logo} height={35} width={35} alt="Typing Test Logo" />
          <h1 className="font-bold text-xl text-gray-700 hidden sm:block">Typist</h1>
        </Link>

        <nav>
          <ul className="flex flex-row gap-5 text-lg">
            <li>
              <Link to={"/start"} className="hover:text-yellow-800">
                {name.name || "Login"}
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
