"use client";
import { useState, useEffect } from "react";
import { useBrandStore } from "@/hooks/useBrandStore";

interface BrandFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  brandToEdit?: { id?: number; name: string; owner: string; status: string };
}

export const BrandFormModal = ({
  isOpen,
  onClose,
  brandToEdit,
}: BrandFormModalProps) => {
  const { addBrand, updateBrand } = useBrandStore();
  const [formData, setFormData] = useState({
    name: "",
    owner: "",
    status: "",
  });

  console.log("brandToEdit--->", brandToEdit);
  useEffect(() => {
    if (brandToEdit) {
      setFormData({
        name: brandToEdit.name,
        owner: brandToEdit.owner,
        status: brandToEdit.status,
      });
    } else {
      setFormData({ name: "", owner: "", status: "" });
    }
  }, [brandToEdit, isOpen]);
  console.log("brandToEdit:--->:", brandToEdit);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (brandToEdit) {
      await updateBrand({ id: brandToEdit.id, ...formData });
    } else {
      const uniqueId = Date.now() + Math.floor(Math.random() * 1000);
      await addBrand({ ...formData, id: uniqueId });
    }
    setFormData({ name: "", owner: "", status: "" });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center text-black">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">
          {brandToEdit ? "Editar Marca" : "Agregar Marca"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Marca</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Titular</label>
            <input
              type="text"
              name="owner"
              value={formData.owner}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Estado</label>
            <input
              type="text"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-black px-4 py-2 rounded"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded"
            >
              {brandToEdit ? "Actualizar" : "Guardar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
