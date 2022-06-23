import { Navigate, Route, Routes } from "react-router-dom";
import { CContainer } from "@coreui/react";
import Dashboard from "../views/Dashboard";
import Carts from "../views/Carts";
import Products from "../views/Products";
import Users from "../views/Users";

const Content = () => {
  return (
    <CContainer lg>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/products" element={<Products />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </CContainer>
  );
};

export default Content;
