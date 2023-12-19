import { LargeContainer } from "@components/ui";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <LargeContainer>
      <div className="mx-auto mt-20">
        <Typography
          variant="h1"
          sx={{ fontWeight: 600 }}
          className="text-primary-500"
        >
          404
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          Không tìm thấy trang
        </Typography>

        <Link to="/">
          <Button
            variant="contained"
            size="large"
            color="primary"
            sx={{ textTransform: "none", mt: "64px" }}
          >
            Về trang chủ
          </Button>
        </Link>
      </div>
    </LargeContainer>
  );
}
