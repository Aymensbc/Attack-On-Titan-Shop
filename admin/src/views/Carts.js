import { cilTrash } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CCard,
  CCardHeader,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import React from "react";

const carts = [
  {
    _id: "2312131",
    userId: "123444",
    cartQuantity: 4,
    totalPrice: 39.2,
    products: ["attacktitan", "watch"],
  },
];

const Carts = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>Carts</strong>
        </CCardHeader>
        <CTable align="middle" className="mb-0 border" responsive>
          <CTableHead color="light">
            <CTableRow>
              <CTableHeaderCell className="text-center">
                Cart Id
              </CTableHeaderCell>

              <CTableHeaderCell className="text-center">
                User Id
              </CTableHeaderCell>

              <CTableHeaderCell className="text-center">
                Cart Quantity
              </CTableHeaderCell>

              <CTableHeaderCell className="text-center">
                Total Price
              </CTableHeaderCell>

              <CTableHeaderCell className="text-center">
                Products
              </CTableHeaderCell>

              <CTableHeaderCell className="text-center">
                Delete Cart
              </CTableHeaderCell>
            </CTableRow>
          </CTableHead>

          <CTableBody>
            {carts.map((cart) => (
              <CTableRow key={cart._id}>
                <CTableDataCell className="text-center">
                  {cart._id}
                </CTableDataCell>

                <CTableDataCell className="text-center">
                  {cart.userId}
                </CTableDataCell>

                <CTableDataCell className="text-center">
                  {cart.cartQuantity}
                </CTableDataCell>

                <CTableDataCell className="text-center">
                  {cart.totalPrice}
                </CTableDataCell>

                <CTableDataCell className="text-center">
                  {cart.products.map((product) => (
                    <div>{product}</div>
                  ))}
                </CTableDataCell>

                <CTableDataCell className="text-center">
                  <CIcon
                    icon={cilTrash}
                    size="xl"
                    // onClick={handleDelete}
                    role="button"
                  />
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CCard>
    </>
  );
};

export default Carts;
