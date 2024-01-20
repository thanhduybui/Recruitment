import { TextHeading } from "@components/heading";
import Button from "@mui/material/Button";
import { useState } from "react";
import { CompanySectionContainer } from "..";

type CompanyDescriptionProps = {
  description?: string;
};
export default function CompanyDescription({
  description,
}: CompanyDescriptionProps) {
  const [showAll, setShowAll] = useState(false);
  const verifyDescription = description
    ? description.trim()
    : "Không có thông tin hiển thị";

  const textToShow = showAll
    ? verifyDescription
    : verifyDescription.slice(
        0,
        verifyDescription.indexOf(".", verifyDescription.indexOf(".") + 1) + 1
      );

  return (
    <CompanySectionContainer>
      <TextHeading title="Thông tin công ty" borderStart />
      <div
        className="text-sm"
        dangerouslySetInnerHTML={{ __html: textToShow || "" }}
      />
      <div className="flex items-center justify-center">
        <Button
          color="primary"
          sx={{ textTransform: "none", width: "100px" }}
          onClick={() => setShowAll(!showAll)}
        >
          {!showAll ? "Xem thêm" : "Ẩn bớt"}
        </Button>
      </div>
    </CompanySectionContainer>
  );
}
