import { useState } from "react";
import { useBrandStore } from "@/hooks/useBrandStore";
import { BrandFormModal } from "./BrandFormModal";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

export const BrandTable = () => {
  const { brands, deleteBrand } = useBrandStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [brandToEdit, setBrandToEdit] = useState(null);

  const openEditModal = (brand: any) => {
    setBrandToEdit(brand);
    setIsModalOpen(true);
  };

  const closeEditModal = () => {
    setBrandToEdit(null);
    setIsModalOpen(false);
  };

  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg border border-gray-200">
      <table className="w-full text-sm text-left text-gray-700">
        <thead className="bg-[#E7344C] text-white">
          <tr>
            <th className="px-4 py-3 font-semibold">#</th>
            <th className="px-4 py-3 font-semibold">Marca</th>
            <th className="px-4 py-3 font-semibold">Titular</th>
            <th className="px-4 py-3 font-semibold">Estado</th>
            <th className="px-4 py-3 font-semibold">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((brand, index) => (
            <tr
              key={brand.id}
              className="border-t hover:bg-gray-100 transition-all duration-200"
            >
              <td className="px-4 py-3">{index + 1}</td>
              <td className="px-4 py-3">{brand.name}</td>
              <td className="px-4 py-3">{brand.owner}</td>
              <td className="px-4 py-3">
                <span
                  className={`px-3 py-1 rounded-full ${
                    brand.status === "Activo"
                      ? "bg-green-200 text-green-800"
                      : "bg-yellow-200 text-yellow-800"
                  }`}
                >
                  {brand.status}
                </span>
              </td>
              <td className="px-4 py-3 flex gap-2">
                <button
                  className="text-blue-500 hover:text-blue-700 font-semibold transition duration-200"
                  onClick={() => openEditModal(brand)}
                >
                  <PencilIcon className="h-5 w-5 mr-2" />
                </button>
                <button
                  className="text-red-500 hover:text-red-700 font-semibold transition duration-200"
                  onClick={() => deleteBrand(brand.id!)}
                >
                  <TrashIcon className="h-5 w-5 mr-2" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <BrandFormModal
        isOpen={isModalOpen}
        onClose={closeEditModal}
        brandToEdit={brandToEdit}
      />
    </div>
  );
};
