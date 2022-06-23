import { Content, Footer, Header, Sidebar } from "../components/index";
import styled from "styled-components";
import { useSelector } from "react-redux";

import React from "react";

const Wrapper = styled.div`
  width: 100%;
  padding-left: ${(props) => (props.sidebarShow ? "60px" : "250px")};
`;

const DefaultLayout = () => {
  const { unfoldable } = useSelector((state) => state.sidebar);
  return (
    <div>
      <Sidebar />
      <Wrapper
        sidebarShow={unfoldable}
        className=" d-flex flex-column min-vh-100 bg-light"
      >
        <Header />
        <div className="body flex-grow-1 px-3">
          <Content />
        </div>
        <Footer />
      </Wrapper>
    </div>
  );
};

export default DefaultLayout;
