import { Content, Footer, Header, Sidebar } from "../components/index";

import { useSelector } from "react-redux";

const DefaultLayout = () => {
  const { unfoldable, sidebarShow } = useSelector((state) => state.sidebar);

  return (
    <div>
      <Sidebar />
      <div
        unfoldable={unfoldable}
        sidebarShow={sidebarShow}
        className="wrapper d-flex flex-column min-vh-100 bg-light"
      >
        <Header />
        <div className="body flex-grow-1 px-3">
          <Content />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
