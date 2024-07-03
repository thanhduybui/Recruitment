import { FormContainer } from "@components/form";
import { FormHeader, NormalFormControl, FormGroup } from "@components/form";
import { Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import api from "@utils/axios";
import { toast } from "react-toastify";
import { toastTifyOptions } from "@utils/toastifyUtils";
import { AxiosError } from "axios";
import { ErrorReponseData } from "@data/interface";
import { Email } from "@mui/icons-material";

type ConfirmCodeFormProps = {
  email: string;
};

export default function ConfirmCodeForm(props: ConfirmCodeFormProps) {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSumitVerificationCode = async () => {
    try {
      setIsLoading(true);
      const res = await api.post("/auth/forget-password/verify-code", {
        email: props.email,
        otp: code,
      });
      navigate("/reset-password", {
        state: { from: "/forgot-password", email: props.email },
      });
      toast.success(res.data.message, toastTifyOptions);
    } catch (error) {
      const typedError = error as AxiosError;
      const data = typedError.response?.data as ErrorReponseData;
      toast.error(data.message, toastTifyOptions);
    } finally {
      setIsLoading(false);
    }
  };

  const [resendTime, setResendTime] = useState(0);

  useEffect(() => {
    setResendTime(60);
    const interval = setInterval(() => {
      setResendTime((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <FormContainer>
      <FormHeader
        title="Xác thực tài khoản của bạn"
        subtitle="Một email đã được gửi đến email của bạn. Vui lòng nhập mã xác nhận để cài đặt mật khẩu mới."
      />
      <FormGroup>
        {isLoading && <CircularProgress />}
        {!isLoading && (
          <NormalFormControl
            label="Nhập mã xác nhận"
            name="verificationCode"
            type="text"
            onChange={(e) => setCode(e.target.value)}
          />
        )}

        <div className="w-full flex gap-4 items-center">
          {resendTime === 0 ? (
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
          ) : (
            <div className="p-2">
              <Typography variant="subtitle2" color={`#0581e6`}>
                Gửi lại mã sau {resendTime}s
              </Typography>
            </div>
          )}
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
