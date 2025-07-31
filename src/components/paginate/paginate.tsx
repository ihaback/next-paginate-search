import Link from "next/link";

export function PreviousPage({
  page,
  currentSearchParams,
}: {
  page: number;
  currentSearchParams: URLSearchParams;
}) {
  const newSearchParams = new URLSearchParams(currentSearchParams);

  if (page > 2) {
    newSearchParams.set("page", `${page - 1}`);
  } else {
    newSearchParams.delete("page");
  }

  return page > 1 ? (
    <Link
      href={`/?${newSearchParams}`}
      className="button"
      data-type="primary"
      aria-label="Show 10 previous results"
    >
      Previous
    </Link>
  ) : (
    <button disabled className="button" data-type="disabled">
      Previous
    </button>
  );
}

export function NextPage({
  page,
  totalPages,
  currentSearchParams,
}: {
  page: number;
  totalPages: number;
  currentSearchParams: URLSearchParams;
}) {
  const newSearchParams = new URLSearchParams(currentSearchParams);

  newSearchParams.set("page", `${page + 1}`);

  return page < totalPages ? (
    <Link
      href={`/?${newSearchParams}`}
      className="button"
      data-type="primary"
      aria-label="Show 10 next results"
    >
      Next
    </Link>
  ) : (
    <button disabled className="button" data-type="disabled">
      Next
    </button>
  );
}
