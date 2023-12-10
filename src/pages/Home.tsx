import { RootState } from "@store";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { Alert, Container } from "@mui/material";
import { useAlert } from "@hooks";

function HomePage() {
  const [showAlert, setShowAlert] = useAlert(false);
  const isLogin = useSelector((state: RootState) => state.auth.isAuthenticated);

  useEffect(() => {
    if (isLogin) {
      setShowAlert(true);
    }
    return () => {};
  }, [setShowAlert, isLogin]);

  return (
    <React.Fragment>
      <Container>
        {showAlert && <Alert severity="success">Đăng nhập thành công</Alert>}
      </Container>
    </React.Fragment>
  );
}
export default HomePage;
