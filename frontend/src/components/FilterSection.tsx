import React from "react";

type FilterSectionProps = {
  title: string;
  children: React.ReactNode;
};

export function FilterSection({ title, children }: FilterSectionProps) {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div>{children}</div>
    </div>
  );
}
