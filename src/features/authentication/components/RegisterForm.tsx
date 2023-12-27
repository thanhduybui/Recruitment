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
import { InputConstants } from "@data/constants";
import { useState } from "react";
import { useValidationRegisterForm } from "..";
import api from "@utils/axios";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const navigate = useNavigate();
  const [passwordValue, setPasswordValue] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const { isFormValid } = useValidationRegisterForm(
    fullName,
    email,
    passwordValue,
    confirmPassword
  );

  const onFullNameChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFullName(event.target.value);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value);
  };

  const onEmailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onConfirmPasswordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };

  const hanldeClick = () => {
    console.log(email, passwordValue, confirmPassword);
    api
      .post("/auth/register", {
        fullName: fullName,
        email: email,
        password: passwordValue,
        confirmPassword: confirmPassword,
      })
      .then(function (response) {
        console.log(response);
        navigate("/confirm-account");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Container maxWidth="md" fixed>
      <FormContainer>
        <FormHeader
          title="Chào mừng bạn đến với Jobhunt"
          subtitle="Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng"
        />
        <FormGroup>
          <NormalFormControl
            label="Họ và tên"
            type="text"
            value={fullName}
            name={InputConstants.FULL_NAME}
            onChange={onFullNameChangeHandler}
          />
          <NormalFormControl
            label="Email"
            type="email"
            value={email}
            name={InputConstants.EMAIL}
            onChange={onEmailChangeHandler}
          />

          <PassFormControl
            label="Mật khẩu"
            value={passwordValue}
            name={InputConstants.PASSWORD}
            onChange={onChangeHandler}
          />

          <PassFormControl
            label="Nhập lại mật khẩu"
            name={InputConstants.CONFIRM_PASSWORD}
            value={confirmPassword}
            passwordValue={passwordValue}
            onChange={onConfirmPasswordChangeHandler}
          />

          <div className="w-full">
            <Button
              disabled={!isFormValid}
              onClick={hanldeClick}
              variant="contained"
              color="primary"
              style={{
                width: "100%",
                textTransform: "none",
                fontSize: "1.1rem",
              }}
            >
              Đăng ký
            </Button>
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
