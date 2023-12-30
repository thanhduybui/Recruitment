import React, { useEffect } from "react";
import { Alert, Container } from "@mui/material";
import { useAlert } from "@hooks";
import { useLocation, useRouteLoaderData } from "react-router-dom";
import { Slider } from "@components/ui";

function HomePage() {
  const location = useLocation();
  const [showAlert, setShowAlert] = useAlert(false);
  const token = useRouteLoaderData("root");

  useEffect(() => {
    if (token && location.state && location.state.from === "/login") {
      setShowAlert(true);
    }
    return () => {};
  }, [setShowAlert, token, location.state]);

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
