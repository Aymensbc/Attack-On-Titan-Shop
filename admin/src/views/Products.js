import { cilTrash } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import React from "react";

const products = [
  {
    _id: "1234",
    title: "somrthing",
    desc: "Some description",
    img: "https://i5.walmartimages.com/asr/53c55065-d6f8-4b57-8ceb-7c8f6a996e0e_1.692b6cb247612c4433a3d576dc4d816a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    category: ["titans", "levi"],
    size: "XL",
    color: "black",
    price: 23,
  },
];

const Products = () => {
  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Add new Product</strong>
            </CCardHeader>
            <CCardBody>
              <CForm className="row g-3">
                <CCol md={6}>
                  <CFormInput label="Title" />
                </CCol>
                <CCol md={6}>
                  <CFormLabel>Upload Product Image</CFormLabel>
                  <CFormInput type="file" />
                </CCol>
                <div className="mb-3">
                  <CFormTextarea
                    label="Description of the Product"
                    rows="3"
                    maxLength={12}
                  ></CFormTextarea>
                </div>

                <CCol md={3}>
                  <CFormInput type="float" label="Price" />
                </CCol>
                <CCol md={3}>
                  <CFormSelect label="Color">
                    <option>Red</option>
                    <option>Blue</option>
                    <option>Black</option>
                    <option>White</option>
                    <option>Green</option>
                    <option>Gray</option>
                  </CFormSelect>
                </CCol>

                <CCol md={3}>
                  <CFormSelect label="Size">
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </CFormSelect>
                </CCol>

                <CCol md={3}>
                  <CFormSelect label="Category">
                    <option>Gear</option>
                    <option>Clothes</option>
                    <option>Accessories</option>
                  </CFormSelect>
                </CCol>

                <CCol md={6}>
                  <CButton type="submit">Create new Product</CButton>
                </CCol>
              </CForm>
            </CCardBody>
          </CCard>

          <CCard className="mb-4">
            <CCardHeader>
              <strong>Products List</strong>
            </CCardHeader>

            <CCardBody>
              <CTable align="middle" className="mb-0 border" responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      Product
                    </CTableHeaderCell>

                    <CTableHeaderCell className="text-center">
                      Product Title
                    </CTableHeaderCell>

                    <CTableHeaderCell className="text-center">
                      Category
                    </CTableHeaderCell>

                    <CTableHeaderCell className="text-center">
                      Price $
                    </CTableHeaderCell>

                    <CTableHeaderCell className="text-center">
                      Delete Product
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>

                <CTableBody>
                  {products.map((product) => (
                    <CTableRow key={product._id}>
                      <CTableDataCell className="text-center">
                        <img
                          className=" productImg"
                          alt={product.title}
                          src={product.img}
                        />
                      </CTableDataCell>

                      <CTableDataCell className="text-center">
                        {product.title}
                      </CTableDataCell>

                      <CTableDataCell className="text-center">
                        {product.category.map((category) => (
                          <p>{category}</p>
                        ))}
                      </CTableDataCell>

                      <CTableDataCell className="text-center">
                        {product.price}
                      </CTableDataCell>

                      <CTableDataCell className="text-center">
                        <CIcon role="button" icon={cilTrash} size="xl" />
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Products;
