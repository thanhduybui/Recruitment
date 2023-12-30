import React, { useEffect } from "react";
import { Alert, Container } from "@mui/material";
import { useAlert } from "@hooks";
import { useLocation } from "react-router-dom";
import { Slider } from "@components/ui";
import { useSelector } from "react-redux";
import { RootState } from "@store";

function HomePage() {
  const location = useLocation();
  const [showAlert, setShowAlert] = useAlert(false);
  const isLogin = useSelector((state: RootState) => state.auth.isAuthenticated);

  useEffect(() => {
    if (location.state && location.state.from === "/login") {
      setShowAlert(true);
    }
    return () => {};
  }, [setShowAlert, location.state]);

  return (
    <React.Fragment>
      <Container>
        {isLogin && showAlert && (
          <Alert severity="success">Đăng nhập thành công</Alert>
        )}
        <Slider />
      </Container>
    </React.Fragment>
  );
}
export default HomePage;
