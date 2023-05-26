import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("user can enter form data and will show on list", () => {
  render(<App />);

  const nameInput = screen.getByRole("textbox", {
    name: /name/i,
  });
  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });

  userEvent.click(nameInput);
  userEvent.keyboard("mohit");

  userEvent.click(emailInput);
  userEvent.keyboard("mohit@gmail.com");

  const button = screen.getByRole("button");
  userEvent.click(button);

  // to debug test for fields

  screen.debug();
});
