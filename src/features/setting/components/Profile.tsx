import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { TextInput } from "@components/form";
import { useAlert } from "@hooks";
import { Alert } from "@mui/material";

export default function Profile() {
  const [showAlert, setShowAlert] = useAlert(false, 3000);
  return (
    <div className="p-4">
      <Typography
        variant="h6"
        component="h6"
        sx={{ fontWeight: 600 }}
        className="text-primary-600"
      >
        Thông tin của bạn
      </Typography>
      <div className="w-3/4 m-auto pt-10">
        <form className="w-full flex flex-col gap-4">
          {showAlert && (
            <Alert severity="success">
              Cập nhật thông tin cá nhân thành công!
            </Alert>
          )}
          <TextInput
            labelBold={true}
            label="Họ và tên"
            defaultValue="Bùi Thanh Duy"
            id="fullName"
            type="text"
          ></TextInput>

          <TextInput
            labelBold={true}
            label="Số điện thoại"
            defaultValue="0383314133"
            type="phone"
            id="phoneNumber"
          ></TextInput>

          <TextInput
            labelBold={true}
            label="Email"
            defaultValue="dtb1742002@gmail.com"
            type="email"
            id="email"
            disabled={true}
          ></TextInput>

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
    </div>
  );
}
