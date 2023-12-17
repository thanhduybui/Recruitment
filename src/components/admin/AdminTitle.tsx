import Typography from "@mui/material/Typography";

type AdminTitleProps = {
  title: string;
};
export default function AdminTitle({ title }: AdminTitleProps) {
  return (
    <Typography variant="h6" className="text-primary-600">
      {title}
    </Typography>
  );
}
