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

export default function RegisterForm() {
  return (
    <Container maxWidth="md" fixed>
      <FormContainer>
        <FormHeader
          title="Chào mừng bạn đến với Jobhunt"
          subtitle="Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng"
        />
        <FormGroup>
          <NormalFormControl label="Tên đăng nhập" type="text" />

          <NormalFormControl label="Email" type="email" />

          <PassFormControl label="Mật khẩu" />

          <PassFormControl label="Nhập lại mật khẩu" />

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
