import Header from "@components/layouts/header/Header";
import { RootState } from "@store";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { Alert, Button, Container } from "@mui/material";
import { logout } from "@store";
import { useNavigate } from "react-router-dom";
import { useAlert } from "@hooks";

function HomePage() {
  const [showAlert, setShowAlert] = useAlert(false);
  const isLogin = useSelector((state: RootState) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickHandler = () => {
    dispatch(logout());
    navigate("/login");
  };

  useEffect(() => {
    if (isLogin) {
      setShowAlert(true);
    }
    return () => {};
  }, [setShowAlert, isLogin]);

  return (
    <React.Fragment>
      <Header />
      <Container>
        {showAlert && <Alert severity="success">Đăng nhập thành công</Alert>}
        {isLogin && <p>Bạn đã đăng nhập thành công</p>}
        {isLogin && (
          <Button onClick={onClickHandler} variant="contained" color="primary">
            Đăng xuất
          </Button>
        )}
      </Container>
    </React.Fragment>
  );
}
export default HomePage;
