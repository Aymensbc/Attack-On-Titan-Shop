import { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../features/userSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://wallpapers-hub.art/wallpaper-images/36625.png") center;
  display: flex;
  background-size: cover;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  background-color: white;
  width: 40%;
  padding: 20px;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 50%;
  flex: 1;

  margin: 10px 0px;
  padding: 10px;
`;
const Button = styled.button`
  width: 40%;
  margin-top: 10px;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    password1: "",
  });

  const { name, username, email, password, password1 } = formData;

  const { isSuccess, error, isLoading, message, currentUser } = useSelector(
    (state) => state.user
  );

  const handleRegister = (event) => {
    event.preventDefault();

    if (password !== password1) toast.error("passwords dont match");
    else {
      const userdata = {
        username,
        email,
        password,
        name,
      };
      dispatch(register(userdata));
    }
  };

  const handleChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    if (isSuccess || currentUser) {
      navigate("/");
    }
    if (error) {
      toast.error(message);
    }

    dispatch(reset);
  }, [error, message, isSuccess, currentUser, dispatch, navigate]);

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleRegister}>
          <Input
            name="username"
            onChange={handleChange}
            placeholder="Username"
          />
          <Input name="name" onChange={handleChange} placeholder="Name" />
          <Input name="email" onChange={handleChange} placeholder="Email" />
          <Input
            name="password"
            onChange={handleChange}
            placeholder="Password"
          />
          <Input
            name="password1"
            onChange={handleChange}
            placeholder="Confirm Password"
          />
          <Button type="submit">CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
