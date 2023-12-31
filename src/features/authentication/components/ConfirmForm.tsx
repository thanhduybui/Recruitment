import Container from "@mui/material/Container";
import {
  FormGroup,
  NormalFormControl,
  FormHeader,
  FormContainer,
} from "@components/form";
import Button from "@mui/material/Button";
import Cookies from "js-cookie";
import { useRef, useState } from "react";
import api from "@utils/axios";
import { useDispatch } from "react-redux";
import { InformModal } from "@components/ui/modal";
import { openModal } from "@store/modal";
import { modalName } from "@data/constants";
import { useLocation, useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
import { useAlert } from "@hooks";
import { useEffect } from "react";

export default function ConfirmForm() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState();
  const verificationCodeRef = useRef<HTMLInputElement>(null);
  const email = Cookies.get("email");
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useAlert(false, 3000);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.message !== undefined) {
      setShowAlert(true);
    }
    return () => {};
  }, [setShowAlert, location.state]);

  const resendVerifycationHandler = () => {
    api
      .get(`/auth/resend-verify-code?email=${email}`)
      .then(function (res) {
        setMessage(res.data.message);
        dispatch(openModal({ modalName: modalName.INFORM_MODAL }));
      })
      .catch(function (error) {
        if (error.response) {
          const message = error.response.data.message;
          console.log(message);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      });
  };

  const confirmVerifycationHandler = () => {
    api
      .post("/auth/verify", {
        email: email,
        otp: verificationCodeRef.current?.value,
      })
      .then(function (res) {
        Cookies.remove("email");
        navigate("/login", {
          state: { from: "/confirm-account", message: res.data.message },
          replace: true,
        });
      })
      .catch(function (error) {
        if (error.response) {
          const message = error.response.data.message;
          setMessage(message);
          dispatch(openModal({ modalName: modalName.INFORM_MODAL }));
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      });
  };

  return (
    <Container maxWidth="md" fixed>
      <InformModal content={message}></InformModal>
      {showAlert && <Alert security="success">{location.state.message}</Alert>}
      <FormContainer>
        <FormHeader
          title="Xác thực tài khoản của bạn"
          subtitle="Một email đã được gửi đến email của bạn. Vui lòng nhập mã xác nhận để hoàn tất đăng ký."
        />
        <FormGroup>
          <NormalFormControl
            ref={verificationCodeRef}
            label="Nhập mã xác nhận"
            name="verificationCode"
            type="text"
          />

          <div className="w-full flex gap-4 items-center">
            <Button
              disabled={!email}
              variant="outlined"
              color="primary"
              style={{
                width: "100%",
                textTransform: "none",
                fontSize: "1rem",
              }}
              onClick={resendVerifycationHandler}
            >
              Gửi lại mã
            </Button>
            <Button
              disabled={!email}
              variant="contained"
              color="primary"
              style={{
                width: "100%",
                textTransform: "none",
                fontSize: "1rem",
              }}
              onClick={confirmVerifycationHandler}
            >
              Xác nhận
            </Button>
          </div>
        </FormGroup>
      </FormContainer>
    </Container>
  );
}
