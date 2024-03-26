import { CvManage, CvProfile, Profile } from "@features/candidate/setting";
import { AppAvatar } from "@components/ui";
import { useSelector } from "react-redux";
import { RootState } from "@store";
import { TabIndex } from "@data/constants";
import { AvatarModal } from "@features/candidate/setting";
import { LeftLayoutContainer, LeftSidebarLayout } from "@components/layouts";
import { FavoriteJobs } from "@features/candidate/favoriteJob";
import { SidebarItemType } from "@data/interface";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArticleIcon from "@mui/icons-material/Article";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import { Sidebar } from "@components/sidebar";
import { UploadCVModal } from "@features/candidate/cv";
import { ToastContainer } from "react-toastify";
import { toastContainerOptions } from "@utils/toastifyUtils";

const { USER_PROFILE, CV, CV_PROFILE, FAVORITE_JOB, APPLICATION } = TabIndex;

const candidateSidebarItems: SidebarItemType[] = [
  {
    tabIndex: USER_PROFILE,
    content: "Thông tin cá nhân",
    icon: <AccountBoxIcon sx={{ color: "#0572cc" }} />,
  },

  {
    tabIndex: FAVORITE_JOB,
    content: "Công việc yêu thích",
    icon: <FavoriteIcon sx={{ color: "#0572cc" }} />,
  },
  {
    tabIndex: CV,
    content: "Quản lý CV",
    icon: <ArticleIcon sx={{ color: "#0572cc" }} />,
  },
  {
    tabIndex: CV_PROFILE,
    content: "Cài đặt CV profile",
    icon: <NewspaperIcon sx={{ color: "#0572cc" }} />,
  },
  {
    tabIndex: APPLICATION,
    content: "Lịch sử ứng tuyển",
    icon: <MarkAsUnreadIcon sx={{ color: "#0572cc" }} />,
  },
];

export default function UserSetting() {
  const selectedTab = useSelector((state: RootState) => state.sidebar.tabIndex);
  const isAvatarModalOpen = useSelector(
    (state: RootState) => state.modals.avatarModal
  );

  const isUploadCVModalOpen = useSelector(
    (state: RootState) => state.modals.uploadCVModal
  );

  const avatarUser = useSelector((state: RootState) => state.userAvatar);

  const sidebar = (
    <>
      <AppAvatar link={avatarUser.url}></AppAvatar>
      <Sidebar items={candidateSidebarItems}></Sidebar>
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
      {isUploadCVModalOpen && <UploadCVModal />}
      <ToastContainer {...toastContainerOptions} />
      <LeftLayoutContainer>
        <LeftSidebarLayout sidebar={sidebar} main={main} />
      </LeftLayoutContainer>
    </>
  );
}
