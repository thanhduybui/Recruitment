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

import { Typography } from "@mui/material";
import React from "react";
import api from "@utils/axios";
import { LoginDTO } from "..";
import Cookies from "js-cookie";

export default function LoginForm() {
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loginData: LoginDTO = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };

    const res = await api.post("/auth/login", loginData);
    const resData = res.data.data;
    console.log(resData.access_token);
    Cookies.set("access_token", resData.access_token);
    navigate("/home", { state: { from: "/login" } });
  };

  return (
    <Container maxWidth="md" fixed>
      <FormContainer onSubmit={onSubmitHandler}>
        <FormHeader
          title="Chào mừng bạn đã quay trở lại"
          subtitle="Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng"
        />
        <FormGroup>
          <NormalFormControl ref={emailRef} label="Tên đăng nhập" type="text" />

          <div className="flex flex-col gap-2">
            <PassFormControl ref={passwordRef} label="Mật khẩu" />
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
            type="submit"
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
