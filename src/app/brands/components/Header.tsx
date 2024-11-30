import { useState } from "react";
import { BrandFormModal } from "./BrandFormModal";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 border-b bg-gray-100 text-black rounded gap-4">
      <div className="flex flex-col text-center md:text-left">
        <h1 className="text-xl font-bold">Gestión de Marcas</h1>
        <p className="text-sm">
          Bienvenido a Signal Dashboard, registra las marcas que confían en
          nosotros.
        </p>
      </div>
      <button
        className="bg-primary text-white px-4 py-2 rounded w-full md:w-auto"
        onClick={openModal}
      >
        Agregar Nuevo Registro
      </button>
      <BrandFormModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};
