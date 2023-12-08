import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { TextInput } from "@components/form";

export default function Profile() {
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
          <TextInput
            label="Họ và tên"
            defaultValue="Bùi Thanh Duy"
            id="fullName"
            type="text"
          ></TextInput>

          <TextInput
            label="Số điện thoại"
            defaultValue="0383314133"
            type="phone"
            id="phoneNumber"
          ></TextInput>

          <TextInput
            label="Email"
            defaultValue="dtb1742002@gmail.com"
            type="email"
            id="email"
            disabled={true}
          ></TextInput>

          <Button
            variant="contained"
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
