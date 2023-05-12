import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it has two inpur and button", () => {
  // render a component

  render(<UserForm />);

  // manipulate the component or find an element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // Assertions - make sure the component is doing
  // what is expected

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("user has entered value and submitted", () => {
  const mock = jest.fn();
  render(<UserForm addUsers={mock} />);

  // manipulate the component or find an element in it
  const [nameInput, emailInput] = screen.getAllByRole("textbox");

  userEvent.click(nameInput);
  userEvent.keyboard("mohit");

  userEvent.click(emailInput);
  userEvent.keyboard("mohit@gmail.com");

  const button = screen.getByRole("button");
  userEvent.click(button);

  // making asserstion to make addUser callback

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    name: "mohit",
    email: "mohit@gmail.com",
  });
});
