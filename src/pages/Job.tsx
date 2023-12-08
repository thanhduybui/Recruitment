import { Header } from "@components/layouts/header";
import { Banner, Filter } from "@features/filter";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import { AsideJob, JobCard } from "@features/job";
import Pagination from "@mui/material/Pagination";
import { Footer } from "@components/layouts/footer";
import { useSelector } from "react-redux";
import { RootState } from "@store";
import { useEffect } from "react";
import { useAlert } from "@hooks";
import Alert from "@mui/material/Alert";
import { BackgroundContainer } from "@components/ui";

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
    <BackgroundContainer>
      <Header />
      <Container
        style={{
          backgroundColor: "#ffffff",
          padding: 0,
          marginBottom: "2.4rem",
          position: "relative",
        }}
      >
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
        <div className="px-5">
          <div className="w-full m-auto mb-8">
            <form className="">
              <Filter />
            </form>
          </div>
          <Divider />
          <div className="flex mt-4">
            <div className="job-card w-2/3 flex-1 overflow-y-auto">
              <div className="transiton duration-75 max-h-[calc(100vh-200px)] overflow-y-auto flex flex-col gap-3 scrollbar-hidden">
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
              </div>

              <div className="py-20 flex items-center justify-center">
                <Pagination
                  count={10}
                  shape="rounded"
                  color="primary"
                  size="medium"
                ></Pagination>
              </div>
            </div>
            <AsideJob />
          </div>
        </div>
      </Container>
      <Footer />
    </BackgroundContainer>
  );
}
