import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";
import productService from "../services/productsService";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Product = ({ filters, category, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    productService.getProducts(category).then((response) => {
      setProducts(response);
    });
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [filters, products, category]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort, products]);

  return (
    <Container>
      {category
        ? filteredProducts.map((item) => (
            <ProductItem key={item._id} item={item} />
          ))
        : products
            .slice(0, 8) //becasue we only want to display 8 itemsin homepage
            .map((item) => <ProductItem key={item._id} item={item} />)}
    </Container>
  );
};

export default Product;
