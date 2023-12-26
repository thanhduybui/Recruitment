import { TextHeading } from "@components/heading";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { CompanySectionContainer } from "..";

export default function CompanyDescription() {
  const [showAll, setShowAll] = useState(false);

  const descriptionText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
  laudantium, molestiae dolore ab eum, adipisci optio quidem delectus
  aliquid sapiente dolorem quasi illum nesciunt, commodi omnis minima
  atque temporibus cum. Lorem ipsum dolor sit amet consectetur adipisicing
  elit. Reprehenderit laudantium, molestiae dolore ab eum, adipisci optio
  quidem delectus aliquid sapiente dolorem quasi illum nesciunt, commodi
  omnis minima atque temporibus cum. Lorem ipsum dolor sit amet
  consectetur adipisicing elit. Reprehenderit laudantium, molestiae dolore
  ab eum, adipisci optio quidem delectus aliquid sapiente dolorem quasi
  illum nesciunt, commodi omnis minima atque temporibus cum. Lorem ipsum
  dolor sit amet consectetur adipisicing elit. Reprehenderit laudantium,
  molestiae dolore ab eum, adipisci optio quidem delectus aliquid sapiente
  dolorem quasi illum nesciunt, commodi omnis minima atque temporibus cum.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
  laudantium, molestiae dolore ab eum, adipisci optio quidem delectus
  aliquid sapiente dolorem quasi illum nesciunt, commodi omnis minima
  atque temporibus cum.`;

  const textToShow = showAll
    ? descriptionText
    : descriptionText.slice(
        0,
        descriptionText.indexOf(".", descriptionText.indexOf(".") + 1) + 1
      );

  return (
    <CompanySectionContainer>
      <TextHeading title="Thông tin công ty" borderStart />
      <Typography variant="body2" component={"p"}>
        {textToShow}
      </Typography>
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
