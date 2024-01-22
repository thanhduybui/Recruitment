import { LeftSidebarLayout } from "@components/layouts";
import Container from "@mui/material/Container";
import { adminTabIndex } from "@data/constants";
import { SidebarItemType } from "@data/interface";
import { Sidebar } from "@components/sidebar";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EditNoteIcon from "@mui/icons-material/EditNote";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import DomainIcon from "@mui/icons-material/Domain";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import ChairAltIcon from "@mui/icons-material/ChairAlt";

const {
  ADMIN_FIELD,
  ADMIN_MAJOR,
  ADMIN_LOCATION,
  ADMIN_POSITION,
  ADMIN_SKILL,
  ADMIN_WORKMODE,
  ADMIN_EXP,
  ADMIN_SALARY,
} = adminTabIndex;
const sidebarItems: SidebarItemType[] = [
  {
    tabIndex: ADMIN_SALARY,
    content: "Mức lương",
    icon: <AttachMoneyIcon sx={{ color: "#0572cc" }} />,
  },
  {
    tabIndex: ADMIN_EXP,
    content: "Mức kinh nghiệm",
    icon: <MoreTimeIcon sx={{ color: "#0572cc" }} />,
  },
  {
    tabIndex: ADMIN_WORKMODE,
    content: "Hình thức làm việc",
    icon: <CalendarMonthIcon sx={{ color: "#0572cc" }} />,
  },
  {
    tabIndex: ADMIN_SKILL,
    content: "Kỹ năng",
    icon: <EditNoteIcon sx={{ color: "#0572cc" }} />,
  },
  {
    tabIndex: ADMIN_POSITION,
    content: "Vị trí",
    icon: <ChairAltIcon sx={{ color: "#0572cc" }} />,
  },
  {
    tabIndex: ADMIN_LOCATION,
    content: "Địa điểm",
    icon: <LocationCityIcon sx={{ color: "#0572cc" }} />,
  },
  {
    tabIndex: ADMIN_FIELD,
    content: "Lĩnh vực",
    icon: <DomainIcon sx={{ color: "#0572cc" }} />,
  },
  {
    tabIndex: ADMIN_MAJOR,
    content: "Ngành nghề",
    icon: <WorkOutlineIcon sx={{ color: "#0572cc" }} />,
  },
];

export default function AdminOther() {
  const sidebar = <Sidebar items={sidebarItems} />;
  return (
    <Container fixed sx={{ marginTop: "1rem", marginBottom: "1rem" }}>
      <LeftSidebarLayout sidebar={sidebar} main={<></>} />
    </Container>
  );
}
