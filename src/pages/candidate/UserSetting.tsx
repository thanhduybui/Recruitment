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
import { LeftLayoutContainer, LeftSidebarLayout } from "@components/layouts";

const { USER_PROFILE, CV, CV_PROFILE } = TabIndex;

export default function UserSetting() {
  const selectedTab = useSelector((state: RootState) => state.sidebar.tabIndex);
  const isAvatarModalOpen = useSelector(
    (state: RootState) => state.modals.avatarModal
  );

  const sidebar = (
    <>
      <UserAvatar></UserAvatar>
      <SideBar></SideBar>
    </>
  );

  const main = (
    <>
      {selectedTab === USER_PROFILE && <Profile />}
      {selectedTab === CV_PROFILE && <CvProfile />}
      {selectedTab === CV && <CvManage />}
    </>
  );

  return (
    <>
      {isAvatarModalOpen && <AvatarModal />}
      <LeftLayoutContainer>
        <LeftSidebarLayout sidebar={sidebar} main={main} />
      </LeftLayoutContainer>
    </>
  );
}
