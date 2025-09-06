import React from "react";

export function Loader() {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900"></div>
    </div>
  );
}
