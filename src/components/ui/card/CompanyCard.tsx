import { CompanyLogo } from "@components/ui";
import { Card, Typography } from "@mui/material";

export default function CompanyCard() {
  return (
    <Card
      variant="outlined"
      sx={{
        "&:hover": {
          transition: "all 0.5",
        },
      }}
    >
      <div className="p-2 flex items-center gap-4">
        <CompanyLogo></CompanyLogo>
        <Typography variant="body2" color={`#555555`} fontWeight={600}>
          Công ty TNHH Phần mềm FPT
        </Typography>
      </div>
    </Card>
  );
}
