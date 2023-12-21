import Typography from "@mui/material/Typography";

type MainSectionContainerProps = {
  children: React.ReactNode;
  heading: string;
};

export default function MainSectionContainer({
  children,
  heading,
}: MainSectionContainerProps) {
  return (
    <div className="p-4">
      <Typography
        variant="h6"
        component="h6"
        sx={{ fontWeight: 600 }}
        className="text-primary-600"
      >
        {heading}
      </Typography>
      {children}
    </div>
  );
}
