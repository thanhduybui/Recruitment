import {
  CvManage,
  CvProfile,
  Profile,
  SideBar,
} from "@features/candidate/setting";
import { AppAvatar } from "@components/ui";
import { useSelector } from "react-redux";
import { RootState } from "@store";
import { TabIndex } from "@data/constants";
import { AvatarModal } from "@features/candidate/setting";
import { LeftLayoutContainer, LeftSidebarLayout } from "@components/layouts";
import { FavoriteJobs } from "@features/candidate/favoriteJob";

const { USER_PROFILE, CV, CV_PROFILE, FAVORITE_JOB } = TabIndex;

export default function UserSetting() {
  const selectedTab = useSelector((state: RootState) => state.sidebar.tabIndex);
  const isAvatarModalOpen = useSelector(
    (state: RootState) => state.modals.avatarModal
  );

  const sidebar = (
    <>
      <AppAvatar></AppAvatar>
      <SideBar></SideBar>
    </>
  );

  const main = (
    <>
      {selectedTab === USER_PROFILE && <Profile />}
      {selectedTab === CV_PROFILE && <CvProfile />}
      {selectedTab === CV && <CvManage />}
      {selectedTab == FAVORITE_JOB && <FavoriteJobs />}
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
