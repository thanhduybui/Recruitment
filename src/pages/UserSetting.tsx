import { Footer } from "@components/layouts/footer";
import { Header } from "@components/layouts/header";
import { BackgroundContainer } from "@components/ui";
import { Container } from "@mui/material";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Avatar from "@mui/material/Avatar";
import { Profile, UserSettingList } from "@features/userSettting";

export default function UserSetting() {
  return (
    <BackgroundContainer>
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
        <div className="flex">
          <div className="flex-none w-1/4 pb-8 border-r-2 border-gray-100 ">
            <div className="pt-5 flex items-center justify-center">
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  <IconButton
                    size="small"
                    sx={{
                      border: "1px solid #0572cc",
                      backdropFilter: "blur(5px)",
                    }}
                    aria-label="upload picture"
                    component="span"
                  >
                    <EditIcon className="text-gray-800" />
                  </IconButton>
                }
              >
                <Avatar
                  alt="Travis Howard"
                  sx={{ width: 200, height: 200, border: "3px solid #0581e6" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlNyI5Bbsl1vq1BQjH9XA-Z4j0Kkk0cEpAnA&usqp=CAU"
                />
              </Badge>
            </div>
            <UserSettingList></UserSettingList>
          </div>
          <div className="flex-1 w-3/4">
            <Profile />
          </div>
        </div>
      </Container>
      <Footer fixed={true}></Footer>
    </BackgroundContainer>
  );
}
