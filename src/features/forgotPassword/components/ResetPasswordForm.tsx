import Container from "@mui/material/Container";
import {
  FormGroup,
  PassFormControl,
  FormHeader,
  FormContainer,
} from "@components/form";
import Button from "@mui/material/Button";
import { InputConstants } from "@data/constants";
import { useLocation, useNavigate } from "react-router-dom";
import api from "@utils/axios";
import { useState } from "react";

export default function ResetPasswordForm() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const location = useLocation();
  const { email } = location.state || {};
  console.log(email);

  const hanldeResetPasswordButtonClick = async () => {
    try {
      await api.post("auth/forget-password/create-password", {
        password: password,
        confirmPassword: confirmPassword,
        email: email,
      });
    } catch (error) {}
    navigate("/login");
  };
  return (
    <Container maxWidth="md" sx={{ marginBottom: "2.4rem" }} fixed>
      <FormContainer>
        <FormHeader
          title="Thiết lập mật khẩu mới"
          subtitle="Bước cuối cùng để lấy lại tài khoản của bạn. Vui lòng nhập mật khẩu mới."
        />
        <FormGroup>
          <PassFormControl
            label="Mật khẩu mới"
            name={InputConstants.PASSWORD}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <PassFormControl
            label="Nhập lại mật khẩu"
            name={InputConstants.CONFIRM_PASSWORD}
            passwordValue={password}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />

          <div className="w-full">
            <Button
              onClick={hanldeResetPasswordButtonClick}
              variant="contained"
              color="primary"
              style={{
                width: "100%",
                textTransform: "none",
                fontSize: "1.1rem",
              }}
            >
              Xong
            </Button>
          </div>
        </FormGroup>
      </FormContainer>
    </Container>
  );
}
