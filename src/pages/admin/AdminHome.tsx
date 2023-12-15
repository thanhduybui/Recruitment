import { Breadcrumb } from "@components/ui";
import Typography from "@mui/material/Typography";
import { AdminCard } from "@components/ui/card";
import { Container } from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { AdminTable } from "@components/table";

export default function AdminHome() {
  return (
    <div className="mt-2">
      <Container maxWidth="xl" fixed>
        <div className="flex flex-col gap-2 bg-gray-50">
          <div className="bg-white px-4 py-2 rounded-md">
            <Breadcrumb />
            <Typography variant="h6" className="text-primary-600">
              Quản lý người dùng
            </Typography>
          </div>
          <div className="grid grid-cols-4 gap-4 w-full">
            <AdminCard
              title="Người dùng"
              value="100"
              icon={<PeopleAltOutlinedIcon />}
            />
          </div>
          <div className="bg-white px-4 py-2 rounded-md">
            <AdminTable />
          </div>
        </div>
      </Container>
    </div>
  );
}
