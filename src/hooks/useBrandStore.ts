import { create } from "zustand";
import axios from "axios";

interface Brand {
  id?: number;
  name: string;
  owner: string;
  status: string;
}

interface BrandStore {
  brands: Brand[];
  fetchBrands: () => Promise<void>;
  addBrand: (brand: Brand) => Promise<void>;
  updateBrand: (brand: Brand) => Promise<void>;
  deleteBrand: (id: number) => Promise<void>;
}

export const useBrandStore = create<BrandStore>((set) => ({
  brands: [],
  fetchBrands: async () => {
    const { data } = await axios.get("/api/brands");
    set({ brands: data });
  },
  addBrand: async (brand) => {
    await axios.post("/api/brands", brand);
    set((state) => ({ brands: [...state.brands, brand] }));
  },
  updateBrand: async (brand) => {
    try {
      await axios.put("/api/brands", brand);
      set((state) => ({
        brands: state.brands.map((b) => (b.id === brand.id ? brand : b)),
      }));
    } catch (error) {
      console.error("Error al actualizar la marca", error);
    }
  },
  deleteBrand: async (id) => {
    await axios.delete("/api/brands", { data: { id } });
    set((state) => ({
      brands: state.brands.filter((b) => b.id !== id),
    }));
  },
}));
