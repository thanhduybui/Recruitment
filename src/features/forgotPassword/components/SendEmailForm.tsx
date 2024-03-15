import { FormContainer } from "@components/form";
import { FormHeader, NormalFormControl, FormGroup } from "@components/form";
import { Button, CircularProgress } from "@mui/material";
import { InputConstants } from "@data/constants";
import { useState } from "react";

type SendEmailFormProps = {
  onSwitchForm: () => void;
};
export default function SendEmailForm(props: SendEmailFormProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onEmailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const hanldeSubmitEmailButtonClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      props.onSwitchForm();
    }, 2000);
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
            subtitle="Bạn cần thực hiện một số bước theo yêu cầu để lấy lại mật khẩu"
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
