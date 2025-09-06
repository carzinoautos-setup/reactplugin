import React from "react";

export function Footer() {
  return (
    <footer className="bg-gray-100 text-center text-gray-600 p-4 mt-8">
      <p>&copy; {new Date().getFullYear()} Carzino. All rights reserved.</p>
    </footer>
  );
}
