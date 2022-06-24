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
} from "@coreui/react";
import React from "react";

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
        </CCol>
      </CRow>
    </>
  );
};

export default Products;
