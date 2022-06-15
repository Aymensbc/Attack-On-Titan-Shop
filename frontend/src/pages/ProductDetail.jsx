import styled from "styled-components";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Add, Remove } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import productService from "../services/productsService";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { toast } from "react-toastify";

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const ProductDetail = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const productId = location.pathname.split("/")[3];
  const [productItem, setProductItem] = useState({});
  const [quantity, setAmount] = useState(1);
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);

  //Get user so that if no user then dont add products to cart
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    productService
      .getProductDetail(productId)
      .then((response) => setProductItem(response));
  }, [productId]);

  const handleClick = (method) => {
    if (method === "dec") {
      quantity > 1 && setAmount(quantity - 1);
    } else setAmount(quantity + 1);
  };

  //if only one color and size
  useEffect(() => {
    if (productItem.size && productItem.color) {
      if (productItem.size.length === 1) {
        setSize(productItem.size[0]);
      }
      if (productItem.color.length === 1) {
        setColor(productItem.color[0]);
      }
    }
  }, [productItem]);

  const handleCart = () => {
    const productData = {
      ...productItem,
      price: productItem.price,
      productId: productItem._id,
      quantity,
      size,
      color,
      img: productItem.img,
      title: productItem.title,
      desc: productItem.desc,
    };
    if (currentUser) {
      dispatch(addToCart(productData));
    } else {
      toast.info("Create an account or login to add to cart");
    }
  };
  return (
    <>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={productItem.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{productItem.title}</Title>
          <Desc>{productItem.desc}</Desc>
          <Price>$ {productItem.price} </Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {productItem.color?.map((c) => (
                <FilterColor
                  onClick={() => {
                    setColor(c);
                  }}
                  color={c}
                  key={c}
                />
              ))}
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(event) => setSize(event.target.value)}>
                {productItem.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleClick("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleClick("add")} />
            </AmountContainer>
            <Button onClick={handleCart}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </>
  );
};

export default ProductDetail;
