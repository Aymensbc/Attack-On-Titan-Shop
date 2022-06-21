import { renderforCart, render, fireEvent, screen } from "../../test-utils";
import Cart from "../../pages/Cart";
import { rest } from "msw";
import { setupServer } from "msw/node";

import { waitForElementToBeRemoved } from "@testing-library/react";
import "@testing-library/jest-dom";

//for this test we are assuming that the render function that is being called has a preloaded state where the currentuser is there

//Integration test : Stpes for testing the cart:
//Cart should be rendered through the get cart function. We will use mock msw to mock api calls

const cart = {
  products: [
    {
      _id: "1234",
      productId: "1234",
      title: "newproduct",
    },
  ],
};
export const handlers = [
  rest.get("api/cart/", (req, res, ctx) => {
    return res(
      ctx.json({
        products: cart.products,
      }),
      ctx.delay(9)
    );
  }),

  rest.delete("api/cart/:id", (req, res, ctx) => {
    const productId = req.params.id;
    if (productId) {
      const index = cart.products.findIndex(
        (product) => product.productId === productId
      );
      if (index !== -1) {
        cart.products.splice(index, 1);
        return res(ctx.jason(cart));
      } else {
        return res("error");
      }
    }
    return res(ctx.status(400));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test("cart is fetched and rendered", async () => {
  renderforCart(<Cart />);

  expect(await screen.findByText(/newproduct/i)).toBeInTheDocument();

  //after deleting the above item shouldnt be in the cart so the newproduct will not be in the document

  fireEvent.click(await screen.getAllByTestId("DeleteIcon")[0]);

  await waitForElementToBeRemoved(() => screen.queryByText(/newproduct/i));

  expect(screen.queryByText(/newproduct/i)).not.toBeInTheDocument();
  // expect(await screen.findByText(/newproduct/i)).not.toBeInTheDocument();
});
