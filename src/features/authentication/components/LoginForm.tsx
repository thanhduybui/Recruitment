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
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "@store";

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

          <PassFormControl label="Mật khẩu" />

          <Button
            onClick={loginOnClickHandler}
            variant="contained"
            color="primary"
            style={{ width: "100%", textTransform: "none", fontSize: "1.1rem" }}
          >
            Đăng nhập
          </Button>
        </FormGroup>
        <OauthLogin />
      </FormContainer>
    </Container>
  );
}
