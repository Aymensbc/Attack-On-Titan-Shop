import { fireEvent, render, screen } from "../../test-utils";
import Login from "../../pages/Login";
import "@testing-library/jest-dom";

describe("Login from", () => {
  let loginButton = null;
  beforeEach(() => {
    render(<Login />);
    loginButton = screen.getByRole("button", { name: /login/i });
  });

  test("The login button is in the document", () => {
    expect(loginButton).toBeInTheDocument();
  });

  test("The login button should initially be disabeled", () => {
    expect(loginButton).toBeDisabled();
  });

  //   test("Button is initially disabled", () => {});
});
