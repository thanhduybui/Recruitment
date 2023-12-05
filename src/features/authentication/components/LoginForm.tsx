import { Container } from "@mui/material";
import {
  FormGroup,
  PassFormControl,
  NormalFormControl,
  FormHeader,
} from "@components/form";
import Button from "@mui/material/Button";
import OauthLogin from "./OauthLogin";

export default function LoginForm() {
  return (
    <Container maxWidth="md" fixed>
      <form className="m-auto w-2/3 p-4 pt-20">
        <FormHeader
          title="Chào mừng bạn đã quay trở lại"
          subtitle="Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng"
        />
        <FormGroup>
          <NormalFormControl label="Tên đăng nhập" type="text" />

          <PassFormControl label="Mật khẩu" />

          <Button
            variant="contained"
            color="primary"
            style={{ width: "100%", textTransform: "none", fontSize: "1.1rem" }}
          >
            Đăng nhập
          </Button>
        </FormGroup>
        <OauthLogin />
      </form>
    </Container>
  );
}
