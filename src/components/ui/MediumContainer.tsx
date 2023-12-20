import Container from "@mui/material/Container";

type MediumContainerProps = {
  children?: React.ReactNode;
};

export default function MediumContainer({ children }: MediumContainerProps) {
  return (
    <Container
      style={{
        padding: 0,
        marginBottom: "2.4rem",
        marginTop: "0.6rem",
        position: "relative",
      }}
    >
      {children}
    </Container>
  );
}
