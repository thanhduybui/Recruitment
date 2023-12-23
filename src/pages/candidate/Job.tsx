import { Banner, Filter } from "@features/candidate/filter";
import { AsideJob, FindJobMainSection } from "@features/job";
import { useSelector } from "react-redux";
import { RootState } from "@store";
import { useEffect } from "react";
import { useAlert } from "@hooks";
import Alert from "@mui/material/Alert";
import { RightAsideLayout } from "@components/layouts";
import { MediumContainer } from "@components/ui";

export default function Job() {
  const [showAlert, setShowAlert] = useAlert(false);
  const isLogin = useSelector((state: RootState) => state.auth.isAuthenticated);

  useEffect(() => {
    if (isLogin) {
      setShowAlert(true);
    }
    return () => {};
  }, [setShowAlert, isLogin]);

  return (
    <MediumContainer>
      {showAlert && (
        <Alert
          severity="success"
          sx={{
            position: "absolute",
            right: 0,
            left: 0,
            zIndex: 30,
            opacity: 0.95,
          }}
        >
          Đăng nhập thành công
        </Alert>
      )}
      <Banner />
      <div>
        <div className="w-full m-auto mb-2">
          <form>
            <Filter />
          </form>
        </div>
        <div className="flex mt-4 gap-4">
          <RightAsideLayout
            main={<FindJobMainSection />}
            aside={<AsideJob />}
          />
        </div>
      </div>
    </MediumContainer>
  );
}
