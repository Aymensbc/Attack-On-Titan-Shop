import React from "react";
import { CCol, CRow, CWidgetStatsA } from "@coreui/react";

const Dashboard = () => {
  return (
    <>
      <CRow>
        <CCol sm={6} lg={4}>
          <CWidgetStatsA
            className="mb-3"
            color="primary"
            title="Number of Users"
            value="35"
          />
        </CCol>
        <CCol sm={6} lg={4}>
          <CWidgetStatsA
            className="mb-3"
            color="info"
            title="Number of Products"
            value="35"
          />
        </CCol>
        <CCol sm={6} lg={4}>
          <CWidgetStatsA
            className="mb-3"
            color="warning"
            title="Number of Carts"
            value="35"
          />
        </CCol>
      </CRow>
    </>
  );
};

export default Dashboard;
