import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

import FacebookIcon from "@mui/icons-material/Facebook";

import Button from "@mui/material/Button";

import { Visibility } from "@mui/icons-material";

export default function RegisterForm() {
  return (
    <Container maxWidth="md" fixed>
      <form className="m-auto w-2/3 p-4 pt-20">
        <div>
          <Typography
            className="text-primary-600"
            variant="h6"
            component="h1"
            style={{ fontWeight: "600", fontSize: "1.1rem" }}
          >
            Chào mừng bạn đến với Jobhunt
          </Typography>
          <Typography
            className="text-gray-200"
            variant="body1"
            component="p"
            style={{ fontSize: "0.9rem" }}
          >
            Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý
            tưởng
          </Typography>
        </div>
        <div className="px-6 flex flex-col pt-8 items-center gap-6">
          <FormControl sx={{ width: "100%" }} variant="outlined">
            <InputLabel
              htmlFor="outlined-adornment-password"
              style={{ fontSize: "0.9rem" }}
            >
              Tên đăng nhập
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              label="Tên đăng nhập"
            />
          </FormControl>

          <FormControl sx={{ width: "100%" }} variant="outlined">
            <InputLabel
              htmlFor="outlined-adornment-password"
              style={{ fontSize: "0.9rem" }}
            >
              Email
            </InputLabel>
            <OutlinedInput id="outlined-adornment-password" label="Email" />
          </FormControl>

          <FormControl sx={{ width: "100%" }} variant="outlined">
            <InputLabel
              htmlFor="outlined-adornment-password"
              style={{ fontSize: "0.9rem" }}
            >
              Mật khẩu
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type="password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    <Visibility />
                  </IconButton>
                </InputAdornment>
              }
              label="Mật khẩu"
            />
          </FormControl>

          <FormControl sx={{ width: "100%" }} variant="outlined">
            <InputLabel
              htmlFor="outlined-adornment-password"
              style={{ fontSize: "0.9rem" }}
            >
              Nhập lại mật khẩu
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-confirm-password"
              type="password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    <Visibility />
                  </IconButton>
                </InputAdornment>
              }
              label="Nhập lại mật khẩu"
            />
          </FormControl>

          <Button
            variant="contained"
            color="primary"
            style={{ width: "100%", textTransform: "none", fontSize: "1.1rem" }}
          >
            Đăng ký
          </Button>
        </div>
        <div className="px-6 flex flex-col pt-8 items-center gap-6">
          <Typography
            className="text-gray-300"
            variant="body1"
            style={{ fontSize: "0.9rem" }}
          >
            Hoặc đăng nhập bằng
          </Typography>
          <div className="flex gap-4">
            <IconButton
              style={{
                borderRadius: "4px",
                padding: "0.6rem  2.4rem 0.6rem",
                border: "solid #F32424 1px",
              }}
            >
              <GoogleIcon style={{ color: "#F32424" }} />
            </IconButton>
            <IconButton
              style={{
                borderRadius: "4px",
                padding: "0.6rem  2.4rem 0.6rem",
                border: "solid #362FD9 1px",
              }}
            >
              <FacebookIcon style={{ color: "#362FD9" }} />
            </IconButton>
          </div>
        </div>
      </form>
    </Container>
  );
}
