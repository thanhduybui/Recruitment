import { FormContainer } from "@components/form";
import { FormHeader, NormalFormControl, FormGroup } from "@components/form";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ConfirmCodeForm() {
  const navigate = useNavigate();
  const handleSumitVerificationCode = () => {
    navigate("/reset-password");
  };

  return (
    <FormContainer>
      <FormHeader
        title="Xác thực tài khoản của bạn"
        subtitle="Một email đã được gửi đến email của bạn. Vui lòng nhập mã xác nhận để cài đặt mật khẩu mới."
      />
      <FormGroup>
        <NormalFormControl
          label="Nhập mã xác nhận"
          name="verificationCode"
          type="text"
        />

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
            onClick={handleSumitVerificationCode}
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
  );
}
