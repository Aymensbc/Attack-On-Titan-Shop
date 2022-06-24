import { CHeader, CContainer, CHeaderToggler } from "@coreui/react";
import { useSelector, useDispatch } from "react-redux";
import CIcon from "@coreui/icons-react";
import { cilMenu } from "@coreui/icons";
import { changeSidebarShow } from "../features/sidebarSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch(changeSidebarShow())}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
      </CContainer>
    </CHeader>
  );
};

export default Header;
