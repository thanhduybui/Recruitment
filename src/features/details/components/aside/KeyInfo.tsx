import { TextHeading } from "@components/heading";
import Chip from "@mui/material/Chip";
export default function KeyInfo() {
  return (
    <>
      <div className="major mb-4">
        <TextHeading title="Ngành nghề/ lĩnh vực" />
        <div className="inline-block mt-2">
          <Chip
            label="Lập trình"
            style={{ marginRight: "0.4rem", marginBottom: "0.4rem" }}
          />
          <Chip
            label="Backend developer"
            style={{ marginRight: "0.4rem", marginBottom: "0.4rem" }}
          />
          <Chip
            label="Fullstack developer"
            style={{ marginRight: "0.4rem", marginBottom: "0.4rem" }}
          />
        </div>
      </div>
      <div className="skills">
        <TextHeading title="Kỹ năng" />
        <div className="inline-block mt-2">
          <Chip
            label="Java"
            style={{ marginRight: "0.4rem", marginBottom: "0.4rem" }}
          />
          <Chip
            label="Spring Boot"
            style={{ marginRight: "0.4rem", marginBottom: "0.4rem" }}
          />
          <Chip
            label="React"
            style={{ marginRight: "0.4rem", marginBottom: "0.4rem" }}
          />
        </div>
      </div>
    </>
  );
}
