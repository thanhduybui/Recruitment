import { Container } from "@mui/material";
import { SendEmailForm, ConfirmCodeForm } from "..";
import { useState } from "react";

export default function ForgotPasswordForm() {
  const [isChangeForm, setIsChangeForm] = useState(false);

  const onChangeFormHandler = () => {
    setIsChangeForm(true);
  };
  return (
    <Container maxWidth="md" sx={{ marginBottom: "2.4rem" }} fixed>
      {!isChangeForm && <SendEmailForm onSwitchForm={onChangeFormHandler} />}
      {isChangeForm && <ConfirmCodeForm />}
    </Container>
  );
}
