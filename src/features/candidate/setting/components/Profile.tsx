import { MainSectionContainer } from "@components/ui";
import Button from "@mui/material/Button";
import { UserInfo } from "@components/form";
import { useAlert } from "@hooks";
import { Alert } from "@mui/material";

export default function Profile() {
  const [showAlert, setShowAlert] = useAlert(false, 3000);
  return (
    <MainSectionContainer heading="Thông tin cá nhân">
      <div className="w-3/4 m-auto pt-10">
        <form className="w-full flex flex-col gap-4">
          {showAlert && (
            <Alert severity="success">
              Cập nhật thông tin cá nhân thành công!
            </Alert>
          )}
          <UserInfo />
          <Button
            variant="contained"
            onClick={() => setShowAlert(true)}
            sx={{
              textTransform: "none",
              width: "fit-content",
              margin: "auto",
              marginTop: "1.2rem",
            }}
          >
            Cập nhật
          </Button>
        </form>
      </div>
    </MainSectionContainer>
  );
}
