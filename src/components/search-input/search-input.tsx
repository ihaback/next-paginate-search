"use client";

import { useRouter } from "next/navigation";
import { useRef, useEffect } from "react";

export function SearchInput({
  search,
  page,
  totalPages,
}: {
  search?: string;
  page?: number;
  totalPages?: number;
}) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (page === 1) {
      inputRef.current?.focus();
    }
    if (page === totalPages) {
      inputRef.current?.focus();
    }
  }, [page, totalPages]);

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
        aria-label="Search users in table"
        aria-describedby="search-desc"
        onChange={(event) => {
          router.push(`/?search=${event.target.value}`);
        }}
        ref={inputRef}
      />
      <span id="search-desc" className="visually-hidden">
        Enter a name or email to filter the user table. Press Enter to search.
      </span>
    </div>
  );
}
