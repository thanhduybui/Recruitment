import Container from "@mui/material/Container";
import { AdminCard, AdminCardContainer } from "@components/ui/card";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { AdminHeadSection } from "@components/admin";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { AdminJobFilter, JobDataList } from "@features/jobManagement";
import { Divider } from "@mui/material";

export default function AdminJob() {
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
    <Typography key="2" color="text.primary">
      Quản lý việc làm
    </Typography>,
  ];

  return (
    <div className="mt-2">
      <Container maxWidth="xl" fixed>
        <div className="flex flex-col gap-2 bg-gray-50">
          <AdminHeadSection title="Quản việc làm" breadcrumbs={breadcrumbs} />
          <AdminCardContainer>
            <AdminCard
              title="Số lượng công việc"
              value="100"
              icon={<PeopleAltOutlinedIcon />}
            />
            <AdminCard
              title="Chờ xét duyệt"
              value="2"
              icon={<PeopleAltOutlinedIcon />}
            />
            <AdminCard
              title="Số đơn ứng tuyển"
              value="98"
              icon={<PeopleAltOutlinedIcon />}
            />
          </AdminCardContainer>
          <div className="bg-white px-4 pt-2 pb-10 rounded-md mb-10">
            <AdminJobFilter />
            <Divider />
            <JobDataList />
          </div>
        </div>
      </Container>
    </div>
  );
}
