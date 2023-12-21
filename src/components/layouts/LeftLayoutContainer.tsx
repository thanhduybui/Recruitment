import Container from "@mui/material/Container";

const containerStyles = {
  backgroundColor: "#ffffff",
  marginTop: "1.2rem",
  padding: 0,
  marginBottom: "2.4rem",
  borderRadius: "5px",
};

type LeftLayoutContainerProps = {
  children: React.ReactNode;
};

export default function LeftLayoutContainer({
  children,
}: LeftLayoutContainerProps) {
  return <Container style={containerStyles}>{children}</Container>;
}
