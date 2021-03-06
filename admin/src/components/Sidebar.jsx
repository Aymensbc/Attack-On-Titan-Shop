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
import SidebarNav from "./SidebarNav";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { sidebarShow } = useSelector((state) => state.sidebar);
  const { unfoldable } = useSelector((state) => state.sidebar);

  return (
    <CSidebar position="fixed" unfoldable={unfoldable} visible={sidebarShow}>
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <CIcon className="sidebar-brand-full" icon={logoNegative} height={35} />
        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
      </CSidebarBrand>

      <CSidebarNav>{<SidebarNav />}</CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => {
          dispatch(changeUnfoldable());
        }}
      />
    </CSidebar>
  );
};

export default Sidebar;
