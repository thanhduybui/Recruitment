import { Container } from "@mui/material";
import {
  FormGroup,
  PassFormControl,
  NormalFormControl,
  FormHeader,
  FormContainer,
} from "@components/form";
import Button from "@mui/material/Button";
import OauthLogin from "./OauthLogin";
import { InputConstants } from "@constants";
import { useState } from "react";

export default function RegisterForm() {
  const [passwordValue, setPasswordValue] = useState("");
  const onChangeHandler = (value: string) => {
    setPasswordValue(value);
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
            label="Tên đăng nhập"
            type="text"
            name={InputConstants.USERNAME}
          />

          <NormalFormControl
            label="Email"
            type="email"
            name={InputConstants.EMAIL}
          />

          <PassFormControl
            label="Mật khẩu"
            name={InputConstants.PASSWORD}
            onChange={onChangeHandler}
          />

          <PassFormControl
            label="Nhập lại mật khẩu"
            name={InputConstants.CONFIRM_PASSWORD}
            passwordValue={passwordValue}
          />

          <Button
            variant="contained"
            color="primary"
            style={{ width: "100%", textTransform: "none", fontSize: "1.1rem" }}
          >
            Đăng ký
          </Button>
        </FormGroup>
        <OauthLogin />
      </FormContainer>
    </Container>
  );
}
