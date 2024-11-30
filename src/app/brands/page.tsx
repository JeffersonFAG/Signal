"use client";
import { Header } from "./components/Header";
import { BrandTable } from "./components/BrandTable";
import { useEffect } from "react";
import { useBrandStore } from "@/hooks/useBrandStore";

const BrandsPage = () => {
  const { fetchBrands } = useBrandStore();

  useEffect(() => {
    fetchBrands();
  }, [fetchBrands]);

  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <div className="flex-1 p-4">
        <Header />
        <BrandTable />
      </div>
    </div>
  );
};

export default BrandsPage;
