import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { changeUnfoldable } from "../features/sidebarSlice";
import CIcon from "@coreui/icons-react";
import { logoNegative } from "../assets/logo-negative";
import { sygnet } from "../assets/sygnet";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { sidebarShow } = useSelector((state) => state.sidebar);
  const { unfoldable } = useSelector((state) => state.sidebar);

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      //   onVisibleChange={() => {
      //     dispatch(changeSidebarShow());
      //   }
      // }
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <CIcon className="sidebar-brand-full" icon={logoNegative} height={35} />
        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
      </CSidebarBrand>

      <CSidebarNav>{/* <AppSidebarNav items={navigation} /> */}</CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => {
          dispatch(changeUnfoldable());
          console.log(unfoldable);
        }}
      />
    </CSidebar>
  );
};

export default Sidebar;
