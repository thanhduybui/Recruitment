import { FormContainer } from "@components/form";
import { FormHeader, NormalFormControl, FormGroup } from "@components/form";
import { Button, CircularProgress } from "@mui/material";
import { InputConstants } from "@data/constants";
import { useState } from "react";
import api from "@utils/axios";
import { toast } from "react-toastify";
import { toastTifyOptions } from "@utils/toastifyUtils";
import { AxiosError } from "axios";
import { ErrorReponseData } from "@data/interface";

type SendEmailFormProps = {
  onSwitchForm: () => void;
  onEmailChange: (email: string) => void;
};
export default function SendEmailForm(props: SendEmailFormProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onEmailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    props.onEmailChange(event.target.value);
  };

  const hanldeSubmitEmailButtonClick = async () => {
    setIsLoading(true);
    try {
      const res = await api.post("/auth/forget-password/send-code", { email });
      toast.success(
        (res.data.message as string) || "Gửi mã thành công",
        toastTifyOptions
      );
      props.onSwitchForm();
    } catch (error) {
      const typedError = error as AxiosError;
      const data = typedError.response?.data as ErrorReponseData;
      toast.error(data.message, toastTifyOptions);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormContainer>
      <div className="flex justify-center">
        {isLoading && <CircularProgress />}
      </div>
      {!isLoading && (
        <>
          <FormHeader
            title="Lấy lại tài khoản"
            subtitle="Bạn cần thực hiện một số bước theo yêu cầu để đặt lại mật khẩu"
          />
          <FormGroup>
            <NormalFormControl
              label="Nhập email"
              type="email"
              value={email}
              name={InputConstants.EMAIL}
              onChange={onEmailChangeHandler}
            />
            <Button
              onClick={hanldeSubmitEmailButtonClick}
              variant="contained"
              color="primary"
              style={{
                margin: "0 auto",
                width: "50%",
                textTransform: "none",
                fontSize: "1.1rem",
              }}
            >
              Nhận mã
            </Button>
          </FormGroup>
        </>
      )}
    </FormContainer>
  );
}
