import Container from "@mui/material/Container";
import {
  FormGroup,
  PassFormControl,
  NormalFormControl,
  FormHeader,
  FormContainer,
} from "@components/form";
import Button from "@mui/material/Button";
import OauthLogin from "./OauthLogin";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "@store/auth";
import { Typography } from "@mui/material";

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginOnClickHandler = () => {
    dispatch(login());
    navigate("/find-job");
  };

  return (
    <Container maxWidth="md" fixed>
      <FormContainer>
        <FormHeader
          title="Chào mừng bạn đã quay trở lại"
          subtitle="Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng"
        />
        <FormGroup>
          <NormalFormControl label="Tên đăng nhập" type="text" />

          <div className="flex flex-col gap-2">
            <PassFormControl label="Mật khẩu" />
            <Link to="/forgot-password">
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#575757",
                  "&:hover": {
                    color: "#0572cc",
                  },
                  transition: "all 0.3s ease-in-out",
                }}
              >
                Quên mật khẩu?
              </Typography>
            </Link>
          </div>

          <Button
            onClick={loginOnClickHandler}
            variant="contained"
            color="primary"
            style={{ width: "100%", textTransform: "none", fontSize: "1.1rem" }}
          >
            Đăng nhập
          </Button>

          <div className="m-auto text-gray-300">
            <Typography sx={{ fontSize: "16px" }}>
              Chưa có tài khoản?{" "}
              <Link to="/register">
                <span className="text-primary-500 font-semibold">Đăng ký</span>
              </Link>
            </Typography>
          </div>
        </FormGroup>
        <FormGroup>
          <div className="m-auto flex flex-col gap-4">
            <OauthLogin />
          </div>
        </FormGroup>
      </FormContainer>
    </Container>
  );
}
