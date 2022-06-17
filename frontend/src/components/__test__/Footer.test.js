import { render } from "@testing-library/react";
import Footer from "../Footer";
import "jest-styled-components";

import styled from "styled-components";

const Container = styled.div`
  display: flex;

  justify-content: space-between;
  width: 100%;
`;

const Left = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

test("<Footer/> matches the snapshot", () => {
  const { container } = render(
    <Footer>
      <Container>
        <Left>
          <Logo>SURVEY CORPS.</Logo>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo soluta
            omnis, dolore adipisci asperiores neque veritatis illo commodi,
            doloremque voluptas laborum esse quos vitae, sint hic? Dolorum
            incidunt sit inventore.
          </Desc>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Men's Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
      </Container>
    </Footer>
  );

  expect(container).toMatchSnapshot();
});
