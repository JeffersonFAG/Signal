/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";

let brands: any[] = [];

export async function GET() {
  return NextResponse.json(brands);
}

export async function POST(req: Request) {
  const brand = await req.json();
  brands.push({ id: Date.now(), ...brand });
  return NextResponse.json({ message: "Brand added successfully" });
}

export async function PUT(req: Request) {
  const { id, ...updatedBrand } = await req.json();
  brands = brands.map((b) => (b.id === id ? { ...b, ...updatedBrand } : b));
  return NextResponse.json({ message: "Brand updated successfully" });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  brands = brands.filter((b) => b.id !== id);
  return NextResponse.json({ message: "Brand deleted successfully" });
}
