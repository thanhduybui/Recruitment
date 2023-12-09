import { Footer } from "@components/layouts/footer";
import { Header } from "@components/layouts/header";
import { Container, Tooltip } from "@mui/material";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Avatar from "@mui/material/Avatar";
import { CvManage, CvProfile, Profile, SideBar } from "@features/setting";
import { useSelector } from "react-redux";
import { RootState } from "@store";
import { TabIndex } from "@data/constants";

const { USER_PROFILE, CV, CV_PROFILE } = TabIndex;

export default function UserSetting() {
  const selectedTab = useSelector((state: RootState) => state.sidebar.tabIndex);
  return (
    <>
      <Header></Header>
      <Container
        style={{
          backgroundColor: "#ffffff",
          marginTop: "1.2rem",
          padding: 0,
          marginBottom: "2.4rem",
          borderRadius: "5px",
        }}
      >
        <div className="flex bg-gray-50">
          <div className="flex-none w-1/4 pb-8 border-r-2 border-gray-100 h-fit bg-white">
            <div className="pt-5 flex items-center justify-center">
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  <Tooltip title="Chỉnh sửa ảnh đại diện" placement="bottom">
                    <IconButton
                      size="small"
                      sx={{
                        border: "1px solid #0572cc",
                        backdropFilter: "blur(5px)",
                        backgroundColor: "#0572cc",
                        color: "#fff",
                        "&:hover": {
                          backgroundColor: "#fff",
                          color: "#575757",
                        },
                      }}
                      aria-label="upload picture"
                      component="span"
                    >
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                }
              >
                <Avatar
                  alt="Travis Howard"
                  sx={{ width: 200, height: 200, border: "3px solid #0581e6" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlNyI5Bbsl1vq1BQjH9XA-Z4j0Kkk0cEpAnA&usqp=CAU"
                />
              </Badge>
            </div>
            <SideBar></SideBar>
          </div>
          <div className="flex-1 w-3/4 bg-white">
            {selectedTab === USER_PROFILE && <Profile />}
            {selectedTab === CV_PROFILE && <CvProfile />}
            {selectedTab === CV && <CvManage />}
          </div>
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
}
