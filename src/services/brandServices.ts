import { Brand } from "@/types/BrandTypes";

let brands: Brand[] = [
  { id: 1, name: "Brand A", owner: "John Doe", status: "active" },
  { id: 2, name: "Brand B", owner: "Jane Doe", status: "inactive" },
];

export const getBrands = (): Brand[] => brands;

export const addBrand = (brand: Brand): void => {
  brands.push({ ...brand, id: Date.now() });
};

export const updateBrand = (id: number, updatedBrand: Partial<Brand>): void => {
  brands = brands.map((brand) =>
    brand.id === id ? { ...brand, ...updatedBrand } : brand
  );
};

export const deleteBrand = (id: number): void => {
  brands = brands.filter((brand) => brand.id !== id);
};
