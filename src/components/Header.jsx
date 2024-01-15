import React from "react";
import Hammock from "../assets/hammock.svg";
import VacationLugage from "../assets/vacation-luggage.svg";

const Header = () => {
  return (
    <header className="w-full mx-auto flex justify-center h-30 bg-greenPrimaryShade-dark py-2 lg:py-3 absolute lg:relative z-50">
      <section className="lg:w-2/5 w-auto flex justify-center items-center gap-5">
        <img
          src={Hammock}
          alt="Hammock"
          className=" h-8 lg:h-12 w-8 lg:w-12 lg:h-18 lg:w-18"
        />
        <h1 className="text-secondaryShade-100 text-2xl xl:text-4xl text-pretty lg:tracking-widest font-extrabold">
          Traveler List
        </h1>
        <img
          src={VacationLugage}
          alt="Vacation Luggage"
          className="h-8 lg:h-12 w-8 lg:w-12 lg:h-18 lg:w-18"
        />
      </section>
    </header>
  );
};

export default Header;
