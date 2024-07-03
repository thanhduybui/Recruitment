import { AdminCard, AdminCardContainer } from "@components/card";
import { Container } from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { AdminHeadSection } from "@components/admin";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useSelector } from "react-redux";
import { RootState } from "@store";
import { UserDetailModal } from "@features/admin/userManagement";
import { ToastContainer } from "react-toastify";
import { toastContainerOptions } from "@utils/toastifyUtils";
import { ModalConfirmDelete } from "@components/ui/modal";
import { modalType } from "@data/constants";
import { CompanyTable } from "@features/admin/companyManagement";

export default function AdminDashboard() {
  const isDetailModalOpen = useSelector(
    (state: RootState) => state.modals.userDetailModal
  );

  function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
  }

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Dashboard
    </Link>,
    <Typography key="3" color="text.primary">
      Quản lý công ty
    </Typography>,
  ];

  return (
    <div className="mt-2">
      <ModalConfirmDelete
        content="Bạn muốn xóa người dùng này ?"
        type={modalType.USER}
      />
      <ToastContainer {...toastContainerOptions} />
      {isDetailModalOpen && <UserDetailModal />}
      <Container maxWidth="xl" fixed>
        <div className="flex flex-col gap-2 bg-gray-50">
          <AdminHeadSection title="Quản lý công ty" breadcrumbs={breadcrumbs} />
          <AdminCardContainer>
            <AdminCard
              title="Người dùng"
              value="100"
              icon={<PeopleAltOutlinedIcon />}
            />
            <AdminCard
              title="Doanh nghiệp"
              value="2"
              icon={<PeopleAltOutlinedIcon />}
            />
            <AdminCard
              title="Ứng viên"
              value="98"
              icon={<PeopleAltOutlinedIcon />}
            />
          </AdminCardContainer>
          <div className="bg-white px-4 pt-2 pb-10 rounded-md mb-10">
            <CompanyTable />
          </div>
        </div>
      </Container>
    </div>
  );
}
