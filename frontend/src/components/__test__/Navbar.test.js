import { fireEvent, render, screen } from "../../test-utils";

import Navbar from "../Navbar";

describe("Navbar testing navigation", () => {
  test("Clicking on register button opens Register Page", () => {
    render(<Navbar />);

    fireEvent.click(screen.getByText("SIGN IN"));
    // eslint-disable-next-line no-restricted-globals
    expect(location.pathname).toBe("/login");
  });

  test("Clicking on Sign in  button opens login Page", () => {
    render(<Navbar />);

    fireEvent.click(screen.getByText("REGISTER"));
    // eslint-disable-next-line no-restricted-globals
    expect(location.pathname).toBe("/register");
  });
});
