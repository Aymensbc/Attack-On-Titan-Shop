import styled from "styled-components";

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
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
