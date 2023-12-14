import Container from "@mui/material/Container";

type LargeContainerProps = {
  children?: React.ReactNode;
};
export default function LargeContainer({ children }: LargeContainerProps) {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      maxWidth="xl"
      fixed
    >
      {children}
    </Container>
  );
}
