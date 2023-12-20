import Container from "@mui/material/Container";
import {
  FormGroup,
  NormalFormControl,
  FormHeader,
  FormContainer,
} from "@components/form";
import Button from "@mui/material/Button";

export default function ConfirmForm() {
  return (
    <Container maxWidth="md" fixed>
      <FormContainer>
        <FormHeader
          title="Xác thực tài khoản của bạn"
          subtitle="Một email đã được gửi đến email của bạn. Vui lòng nhập mã xác nhận để hoàn tất đăng ký."
        />
        <FormGroup>
          <NormalFormControl label="Nhập mã xác nhận" type="text" />

          <div className="w-full flex gap-4 items-center">
            <Button
              variant="outlined"
              color="primary"
              style={{
                width: "100%",
                textTransform: "none",
                fontSize: "1rem",
              }}
            >
              Gửi lại mã
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{
                width: "100%",
                textTransform: "none",
                fontSize: "1rem",
              }}
            >
              Xác nhận
            </Button>
          </div>
        </FormGroup>
      </FormContainer>
    </Container>
  );
}
