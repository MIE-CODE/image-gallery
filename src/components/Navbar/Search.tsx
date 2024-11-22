"use client";

import { SearchIcon } from "@/svg";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search) router.push(`/search/${search}`);
    setSearch("");
    setIsSearching(true);
  };
  return (
    <div className={`filter-cont ${isSearching && "active"}`}>
      <SearchIcon />
      <form onSubmit={handleSubmit}>
        <input
          className="filter"
          placeholder="Search"
          type="text"
          value={search}
          onFocus={(e) => e.target.classList.add(".active")}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
}
