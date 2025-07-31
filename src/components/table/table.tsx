import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserTableProps {
  users: User[];
}

export function Table({ users }: UserTableProps) {
  return (
    <table className="table" aria-labelledby="page-header">
      <caption className="table__caption">
        A table of users woth id, name and email columns
      </caption>
      <thead className="table__thead">
        <tr>
          <th
            className="table__th text-left padding-inline-start-6 padding-inline-end-3 fs-small fw-semi-bold width-8"
            scope="col"
            role="columnheader"
          >
            ID
          </th>
          <th
            className="table__th text-left padding-inline-start-6 padding-inline-end-3 fs-small fw-semi-bold width-15"
            scope="col"
            role="columnheader"
          >
            Name
          </th>
          <th
            className="table__th text-left padding-inline-start-6 padding-inline-end-3 fs-small fw-semi-bold width-13 width-small-15 width-medium-17"
            scope="col"
            role="columnheader"
          >
            Email
          </th>
          <th
            className="table__th relative padding-inline-start-6 padding-inline-end-3"
            scope="col"
            role="columnheader"
          >
            <span className="visually-hidden">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody className="table__tbody divide-block">
        {users.map((user) => (
          <tr key={user.id} className="table__tr">
            <td className="table__td no-wrap padding-inline-start-6 padding-inline-end-3 padding-inline-end-6 fs-small font-medium text-gray-900 pl-6 max-width-8">
              {user.id}
            </td>
            <td className="table__td no-wrap truncate padding-inline-start-6 padding-inline-end-3 fs-small font-medium text-gray-900 pl-6 max-width-15">
              {user.name}
            </td>
            <td className="table__td no-wrap truncate padding-inline-start-6 padding-inline-end-3 fs-small max-width-13 max-width-small-15 max-width-medium-17">
              {user.email}
            </td>
            <td className="table__td no-wrap padding-inline-start-6 padding-inline-end-3 relative text-right fs-small font-medium">
              <a href="#" className="table__link">
                <span className="visually-hidden">
                  Edit user row, not implemented yet
                </span>
                Edit
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
