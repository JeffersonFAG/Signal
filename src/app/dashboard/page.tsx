"use client";

import { useBrandStore } from "@/hooks/useBrandStore";
import {
  CalculatorIcon,
  SignalIcon,
  InboxStackIcon,
} from "@heroicons/react/24/solid";

const DashboardPage = () => {
  const { brands } = useBrandStore();
  const cards = [
    {
      title: "Marcas Registradas",
      count: brands.length,
      description: "Número total de marcas registradas en el sistema.",
      icon: CalculatorIcon,
    },
    {
      title: "Entradas en Base de Datos",
      count: 342,
      description: "Cantidad de registros activos en la base de datos.",
      icon: InboxStackIcon,
    },
    {
      title: "Marcas activas",
      count: brands.filter((brand) => brand.status === "Activo").length,
      description: "Cantidad de registros activos en la base de datos.",
      icon: SignalIcon,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-black">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-gray-100 rounded-lg shadow-md p-6 hover:bg-gray-200 transition duration-300 group relative"
        >
          <div className="absolute top-0 left-0 h-full w-1 bg-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-center">
            {card.icon && (
              <div className="flex items-center justify-center bg-pink-100 rounded-full h-12 w-12 mr-4">
                <card.icon className="text-pink-500 h-6 w-6" />
              </div>
            )}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          </div>
          <div className="mt-4 text-2xl font-bold text-pink-500">
            {card.count}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardPage;
