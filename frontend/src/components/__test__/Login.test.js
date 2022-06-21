import { fireEvent, render, screen } from "../../test-utils";
import Login from "../../pages/Login";
import "@testing-library/jest-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { waitFor, getByText } from "@testing-library/react";

export const handlers = [
  rest.post("/api/users/login", (req, res, ctx) => {
    return res(
      ctx.json({
        username: "jason",
        password: "1234",
      })
    );
  }),
];

const setup = () => {
  const utils = render(<Login />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const username = utils.getByPlaceholderText("Username");
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const password = utils.getByPlaceholderText("Password");
  return {
    username,
    password,
    ...utils,
  };
};

const server = setupServer(...handlers);

beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe("Login from", () => {
  let loginButton = null;
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
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

  //after login the user is directed to the home page
});

test("After login , user is there and directed to homepage", async () => {
  // const history = createMemoryHistory();
  const { username, password } = setup();

  //user is at login page

  fireEvent.change(username, { target: { value: "jason" } });
  fireEvent.change(password, { target: { value: "1234" } });
  fireEvent.click(screen.queryByRole("button", { name: /login/i }));

  //user has been redirected to home page after login
  // expect(await screen.findByText(/logout/i)).toBeInTheDocument();
});
