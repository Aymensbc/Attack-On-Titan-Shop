import {
  CCardHeader,
  CCardBody,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CCard,
  CTableDataCell,
  CFormSwitch,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilPeople, cilTrash } from "@coreui/icons";

const users = [
  {
    _id: 123,
    username: "user1",
    email: "user1@gmail.com",
    isAdmin: false,
  },
  {
    _id: 122,
    username: "user2",
    email: "user2@gmail.com",
    isAdmin: false,
  },
  {
    _id: 133,
    username: "user3",
    email: "user3@gmail.com",
    isAdmin: true,
  },
];

const handleAdminClick = (event) => {
  console.log(event.target);
};

const handleDelete = () => {};

const Users = () => {
  return (
    <>
      {/* <CRow>
        <CCol xs> */}
      <CCard className="mb-4">
        <CCardHeader>Users</CCardHeader>
        <CCardBody>
          <CTable align="middle" className="mb-0 border" hover responsive>
            <CTableHead color="light">
              <CTableRow>
                <CTableHeaderCell className="text-center">
                  <CIcon icon={cilPeople} />
                  <span> Users</span>
                </CTableHeaderCell>
                <CTableHeaderCell className="text-center">
                  Is Admin
                </CTableHeaderCell>
                <CTableHeaderCell className="text-center">
                  Delete User
                </CTableHeaderCell>
              </CTableRow>
            </CTableHead>

            <CTableBody>
              {users.map((user) => (
                <CTableRow key={user._id}>
                  <CTableDataCell className="text-center">
                    <div>{user.username}</div>
                    <div className="small text-medium-emphasis">
                      <span>{user.email}</span>
                    </div>
                  </CTableDataCell>

                  <CTableDataCell>
                    <CFormSwitch
                      className="d-flex justify-content-center"
                      defaultChecked={user.isAdmin}
                      size="lg"
                      onClick={handleAdminClick}
                      role="button"
                    />
                  </CTableDataCell>

                  <CTableDataCell className="text-center">
                    <CIcon
                      icon={cilTrash}
                      size="xl"
                      onClick={handleDelete}
                      role="button"
                    />
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
      {/* </CCol>
      </CRow> */}
    </>
  );
};

export default Users;
