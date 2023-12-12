import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

export default function SettingHeader() {
  const theme = useTheme();
  return (
    <Typography
      variant="h6"
      component="h6"
      sx={{
        fontWeight: 600,
        [theme.breakpoints.down("sm")]: {
          fontSize: theme.typography.pxToRem(10), // Adjust font size for smaller screens
        },
      }}
      className="text-primary-600"
    >
      Quản lý CV
    </Typography>
  );
}
