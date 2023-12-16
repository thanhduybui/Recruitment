import { Breadcrumb } from "@components/ui";
import Typography from "@mui/material/Typography";
import { AdminCard } from "@components/ui/card";
import { Container } from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { UserTable } from "@features/userManagement";

export default function AdminUser() {
  return (
    <div className="mt-2">
      <Container maxWidth="xl" fixed>
        <div className="flex flex-col gap-2 bg-gray-50">
          <div className="bg-white flex  flex-col gap-2 px-4 py-2 rounded-md">
            <Breadcrumb />
            <Typography variant="h6" className="text-primary-600">
              Quản lý người dùng
            </Typography>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
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
          </div>
          <div className="bg-white px-4 pt-2 pb-10 rounded-md mb-10">
            <UserTable />
          </div>
        </div>
      </Container>
    </div>
  );
}
