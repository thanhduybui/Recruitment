import { Typography } from "@mui/material";

type FormHeaderProps = {
  children?: React.ReactNode;
  title: string;
  subtitle: string;
};

export default function FormHeader(props: FormHeaderProps) {
  return (
    <div className="px-6 flex flex-col">
      <Typography
        className="text-primary-600"
        variant="h6"
        component="h1"
        style={{ fontWeight: "600", fontSize: "1.2rem" }}
      >
        {props.title}
      </Typography>
      <Typography
        className="text-gray-200"
        variant="body1"
        component="p"
        style={{ fontSize: "0.9rem" }}
      >
        {props.subtitle}
      </Typography>
    </div>
  );
}
