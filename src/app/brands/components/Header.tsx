import { useState } from "react";
import { BrandFormModal } from "./BrandFormModal";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex justify-between items-center p-4 border-b bg-gray-100 text-black rounded">
      <div className="flex flex-col">
        <h1 className="text-xl font-bold">Gestión de Marcas</h1>
        <p className="text-sm ">
          Bienvenido a Signal Dashboard, registra las marcas que confian en
          nosotros.
        </p>
      </div>

      <button
        className="bg-primary text-white px-4 py-2 rounded"
        onClick={openModal}
      >
        Agregar Nuevo Registro
      </button>
      <BrandFormModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};
