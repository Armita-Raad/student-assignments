/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import UserTable from "../components/6-UserTable/UserTable";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

describe("user table component", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test("should  correctly fetches and renders a table of users and contain a row for each user", async () => {
    const users = [
      {
        id: 1,
        name: "Jasem",
        email: "jasem@gmail.com",
        phone: 1234,
      },
      {
        id: 2,
        name: "Jasmin",
        email: "jasmin@gmail.com",
        phone: 4321,
      },
    ];

    fetch.mockResponseOnce(JSON.stringify(users));
    render(<UserTable />);

    const rows = await screen.findAllByTestId("user-row");

    expect(rows).toHaveLength(2);

    users.forEach((user, i) => {
      expect(rows[i]).toHaveTextContent(user.id);
      expect(rows[i]).toHaveTextContent(user.name);
      expect(rows[i]).toHaveTextContent(user.email);
      expect(rows[i]).toHaveTextContent(user.phone);
    });
  });
});
