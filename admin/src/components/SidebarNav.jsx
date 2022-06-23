import React from "react";
import { CNavGroup, CNavItem, CNavLink, CNavTitle } from "@coreui/react";
import { NavLink } from "react-router-dom";
import { cilSpeedometer, cilUser, cilCart, cilMobile } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import "@coreui/coreui/dist/css/coreui.min.css";

const SidebarNav = () => {
  return (
    <>
      <CNavItem component={NavLink} to="/dashboard">
        <CIcon icon={cilSpeedometer} customClassName="nav-icon" />
        Dashboard
      </CNavItem>

      <CNavTitle>Admin Actions</CNavTitle>

      <CNavItem component={NavLink} to="/products">
        <CIcon icon={cilMobile} customClassName="nav-icon" />
        Products
      </CNavItem>

      <CNavItem component={NavLink} to="/users">
        <CIcon icon={cilUser} customClassName="nav-icon" />
        Users
      </CNavItem>

      <CNavItem component={NavLink} to="/carts">
        <CIcon icon={cilCart} customClassName="nav-icon" />
        Carts
      </CNavItem>
    </>
  );
};

export default SidebarNav;
