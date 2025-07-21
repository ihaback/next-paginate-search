"use client";

import { useRouter } from "next/navigation";

export function SearchInput({ search }: { search?: string }) {
  const router = useRouter();

  return (
    <div className="relative" role="search">
      <label htmlFor="search" className="visually-hidden">
        Search users by name or email
      </label>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search users"
        defaultValue={search}
        autoComplete="off"
        aria-label="Search users"
        aria-describedby="search-desc"
        onChange={(event) => {
          router.push(`/?search=${event.target.value}`);
        }}
      />
      <span id="search-desc" className="visually-hidden">
        Enter a name or email to filter the user table. Press Enter to search.
      </span>
    </div>
  );
}
