import { RootState } from "@store";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { Alert, Container } from "@mui/material";
import { useAlert } from "@hooks";
import { useLocation } from "react-router-dom";
import { Slider } from "@components/ui";

function HomePage() {
  const location = useLocation();
  const [showAlert, setShowAlert] = useAlert(false);
  const isLogin = useSelector((state: RootState) => state.auth.isAuthenticated);

  useEffect(() => {
    if (isLogin && location.pathname === "/login") {
      setShowAlert(true);
    }
    return () => {};
  }, [setShowAlert, isLogin, location]);

  return (
    <React.Fragment>
      <Container>
        {showAlert && <Alert severity="success">Đăng nhập thành công</Alert>}
        <Slider />
      </Container>
    </React.Fragment>
  );
}
export default HomePage;
