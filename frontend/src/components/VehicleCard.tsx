import React from "react";

type VehicleCardProps = {
  make: string;
  model: string;
  year: number;
  price: string;
};

export function VehicleCard({ make, model, year, price }: VehicleCardProps) {
  return (
    <div className="border rounded p-4 shadow-sm">
      <h3 className="font-bold">{year} {make} {model}</h3>
      <p className="text-gray-600">{price}</p>
    </div>
  );
}
