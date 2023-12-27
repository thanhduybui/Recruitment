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
import useValidationRegisterForm from "../hooks/useValidationRegisterForm";

export default function RegisterForm() {
  const [passwordValue, setPasswordValue] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { isFormValid } = useValidationRegisterForm(
    email,
    passwordValue,
    confirmPassword
  );

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

  const hanldeClick = () => {};

  return (
    <Container maxWidth="md" fixed>
      <FormContainer>
        <FormHeader
          title="Chào mừng bạn đến với Jobhunt"
          subtitle="Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng"
        />
        <FormGroup>
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
