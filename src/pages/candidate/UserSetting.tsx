import Container from "@mui/material/Container";

import {
  CvManage,
  CvProfile,
  Profile,
  SideBar,
  UserAvatar,
} from "@features/setting";
import { useSelector } from "react-redux";
import { RootState } from "@store";
import { TabIndex } from "@data/constants";
import { AvatarModal } from "@features/setting";

const containerStyles = {
  backgroundColor: "#ffffff",
  marginTop: "1.2rem",
  padding: 0,
  marginBottom: "2.4rem",
  borderRadius: "5px",
};

const { USER_PROFILE, CV, CV_PROFILE } = TabIndex;

export default function UserSetting() {
  const selectedTab = useSelector((state: RootState) => state.sidebar.tabIndex);
  const isAvatarModalOpen = useSelector(
    (state: RootState) => state.modals.avatarModal
  );

  return (
    <>
      {isAvatarModalOpen && <AvatarModal />}
      <Container style={containerStyles}>
        <div className="flex bg-gray-50">
          <div className="flex-none lg:w-1/4 pb-8 border-r-2 border-gray-100 h-fit bg-white rounded-l-md">
            <UserAvatar></UserAvatar>
            <SideBar></SideBar>
          </div>
          <div className="flex-1 w-3/4 bg-white rounded-r-md rounded-bl-md">
            {selectedTab === USER_PROFILE && <Profile />}
            {selectedTab === CV_PROFILE && <CvProfile />}
            {selectedTab === CV && <CvManage />}
          </div>
        </div>
      </Container>
    </>
  );
}
