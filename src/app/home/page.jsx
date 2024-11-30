"use client";

import React from "react";

const HomeBanner = () => {
  return (
    <div className="bg-primary text-white flex flex-col items-center justify-center h-screen px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-30 animate-slide"></div>
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Bienvenido a nuestro portal administrador de marcas
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Donde impulsar tu marca te llevará a romper los límites de tu negocio.
        </p>
        <button className="bg-white text-primary font-semibold px-6 py-3 rounded-md shadow-md hover:bg-gray-200 transition duration-300">
          Explorar el Portal
        </button>
      </div>
    </div>
  );
};

export default HomeBanner;
