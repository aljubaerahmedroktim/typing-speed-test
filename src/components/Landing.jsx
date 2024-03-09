import React from "react";
import Typing from "../images/typing.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Landing() {
  const name = useSelector((state)=> state.nameReducer);

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
      <main className="flex flex-col justify-center items-center h-full mb-16 mx-2 sm:mx-0">
        <img className="h-[250px] sm:h-[350px]" src={Typing} alt="typing image" />
        <h1 className="text-lg sm:text-3xl font-bold">
          Test your typing skills with Typist
        </h1>
        <Link to={name.name !== "" ? "/continue" : "/start"} className="mt-10 px-10 hover:shadow-md py-2 bg-yellow-300 rounded-full text-xl font-[500]">
            Start
        </Link>
      </main>
    </div>
  );
}
