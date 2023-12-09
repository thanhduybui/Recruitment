import Typography from "@mui/material/Typography";

export default function CvManage() {
  return (
    <div className="p-4">
      <div>
        <Typography
          variant="h6"
          component="h6"
          sx={{ fontWeight: 600 }}
          className="text-primary-600"
        >
          Quản lý CV
        </Typography>
      </div>
      <div className="w-3/4 m-auto pt-5"></div>
    </div>
  );
}
