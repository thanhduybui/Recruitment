import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";

import Button from "@mui/material/Button";

import { Visibility } from "@mui/icons-material";
import { Oauth2Button } from "@components/button";

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
          <div className="flex gap-7">
            <Oauth2Button
              iconUrl="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fmeta-q.cdn.bubble.io%2Ff1536920601855x691820740932598700%2Fgoogle-logo-icon-PNG-Transparent-Background.png"
              alt="Sign in with Google"
            />
            <Oauth2Button
              iconUrl="https://static-00.iconduck.com/assets.00/facebook-icon-512x512-seb542ju.png"
              alt="Sign in with Facebook"
            />
          </div>
        </div>
      </form>
    </Container>
  );
}
