import { AdminCard, AdminCardContainer } from "@components/ui/card";
import { Container } from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { UserTable } from "@features/userManagement";
import { AdminHeadSection } from "@components/admin";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useSelector } from "react-redux";
import { RootState } from "@store";
import { UserDetailModal } from "@features/userManagement";

export default function AdminUser() {
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
      Quản lý người dùng
    </Typography>,
  ];

  return (
    <div className="mt-2">
      {isDetailModalOpen && <UserDetailModal />}
      <Container maxWidth="xl" fixed>
        <div className="flex flex-col gap-2 bg-gray-50">
          <AdminHeadSection
            title="Quản lý người dùng"
            breadcrumbs={breadcrumbs}
          />
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
            <UserTable />
          </div>
        </div>
      </Container>
    </div>
  );
}
