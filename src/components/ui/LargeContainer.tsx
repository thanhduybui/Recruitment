import Container from "@mui/material/Container";

type LargeContainerProps = {
  children?: React.ReactNode;
  isColumn?: boolean;
};
export default function LargeContainer({
  children,
  isColumn,
}: LargeContainerProps) {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: isColumn ? "column" : "row",
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
