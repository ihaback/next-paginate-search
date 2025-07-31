import { Table } from "@/components/table/table";
import { PreviousPage, NextPage } from "@/components/paginate/paginate";
import { SearchInput } from "@/components/search-input/search-input";
import { getUsers } from "@/utils/users";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  const search = typeof params?.search === "string" ? params.search : undefined;

  const perPage = 10;
  const page =
    typeof params?.page === "string" && +params.page > 1 ? +params.page : 1;

  const { users: usersData, count: totalUsers } = await getUsers(
    page,
    perPage,
    search
  );
  const totalPages = Math.ceil(totalUsers / perPage);

  const currentSearchParams = new URLSearchParams();
  if (search) {
    currentSearchParams.set("search", search);
  }
  if (page > 1) {
    currentSearchParams.set("page", `${page}`);
  }

  const paginateMesssage = `Showing ${(page - 1) * perPage + 1} to ${Math.min(
    page * perPage,
    totalUsers
  )} of ${totalUsers} users`;

  return (
    <main className="padding-block-12">
      <h1 className="visually-hidden" id="page-header">
        Users table with search and paginagation fuctionality
      </h1>
      <div
        className="container flex justify-start align-items-center"
        data-type="wide"
      >
        <SearchInput search={search} page={page} totalPages={totalPages} />
      </div>
      <div className="container flex margin-block-start-4" data-type="wide">
        <div className="inline-block min-width-full">
          <div className="box-shadow-2 border-radius-1 overflow-hidden border-neutral-200">
            <Table users={usersData} />
          </div>
        </div>
      </div>
      <div className="container margin-block-start-4" data-type="wide">
        <div className="flex-group flex-group--no-wrap justify-between min-width-full align-items-center">
          <p className="font-small" aria-live="polite">
            {paginateMesssage}
          </p>
          <div className="inline-flex gap-2">
            <PreviousPage
              page={page}
              currentSearchParams={currentSearchParams}
            />
            <NextPage
              page={page}
              totalPages={totalPages}
              currentSearchParams={currentSearchParams}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
