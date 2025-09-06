import React, { useState } from "react";

type SearchBarProps = {
  onSearch: (term: string) => void;
};

export function SearchBar({ onSearch }: SearchBarProps) {
  const [term, setTerm] = useState("");

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search vehicles..."
        className="flex-grow border rounded px-3 py-2"
      />
      <button
        onClick={() => onSearch(term)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </div>
  );
}
