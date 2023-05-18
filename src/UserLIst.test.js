import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

it("User list is rendered and find the number of rows", () => {
  const users = [
    { name: "mohit", email: "mohit@gmail.com" },
    { name: "mihir", email: "mihir@gmail.com" },
  ];
  render(<UserList users={users} />);

  // find rows table
  // screen.logTestingPlaygroundURL();
  const rows = within(screen.getByTestId("users")).getAllByRole("row");
  // assertion
  expect(rows).toHaveLength(2);
});
it("render name and email for each user", () => {
  const users = [
    { name: "mohit", email: "mohit@gmail.com" },
    { name: "mihir", email: "mihir@gmail.com" },
  ];
  render(<UserList users={users} />);

  for (let user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
