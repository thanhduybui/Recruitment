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
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Alert, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import api from "@utils/axios";
import { LoginDTO } from "..";
import Cookies from "js-cookie";
import { login } from "@store/auth";
import { AxiosError } from "axios";
import { useAlert } from "@hooks";

type ErrorReponseData = {
  message: string;
  status: string;
};

export default function LoginForm() {
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const [showAlert, setShowAlert] = useAlert(false, 3000);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      location.state &&
      location.state.from === "/confirm-account" &&
      location.state.message !== undefined
    ) {
      setShowAlert(true);
    }
    return () => {};
  }, [setShowAlert, location.state]);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loginData: LoginDTO = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };

    try {
      const res = await api.post("/auth/login", loginData);
      const resData = res.data;

      if (resData.status === "success") {
        Cookies.set("access_token", resData.data.access_token);
        Cookies.remove("email");

        const expiration = new Date();
        expiration.setHours(expiration.getHours() + 24);
        Cookies.set("expiration", expiration.toISOString());

        dispatch(login());
        navigate("/", {
          state: { from: "/login", message: resData.message },
        });
      } else {
        console.log(resData.message);
        // Handle other cases or show appropriate error messages based on the response
      }
    } catch (error) {
      const typedError = error as AxiosError;
      const data = typedError.response?.data as ErrorReponseData;
      setErrorMessage(data.message);
    }
  };

  return (
    <Container maxWidth="md" fixed>
      {showAlert && <Alert severity="success">{location.state?.message}</Alert>}
      <FormContainer onSubmit={onSubmitHandler}>
        <FormHeader
          title="Chào mừng bạn đã quay trở lại"
          subtitle="Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng"
        />
        {errorMessage && (
          <Alert severity="error" sx={{ mt: "1rem" }}>
            {errorMessage}
          </Alert>
        )}
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
