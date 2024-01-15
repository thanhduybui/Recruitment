import { CompanyLogo } from "..";
import { Card, Typography } from "@mui/material";

export type CompanyCardProps = {
  image?: string;
  name?: string;
  id?: string;
};

export default function CompanyCard(props: CompanyCardProps) {
  return (
    <Card
      variant="outlined"
      sx={{
        "&:hover": {
          transition: "all 0.5",
        },
      }}
    >
      <div className="p-2 flex items-center gap-4">
        <div className="w-1/3">
          <CompanyLogo src={props.image}></CompanyLogo>
        </div>
        <div className="w-2/3">
          <Typography variant="body2" color={`#555555`} fontWeight={600}>
            {props.name}
          </Typography>
        </div>
      </div>
    </Card>
  );
}
