import { Avatar, Link, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import Groups2Icon from "@mui/icons-material/Groups2";

type CompanyHeaderProps = {
  companyName?: string;
  companyLogo?: string;
  companyWebsite?: string;
  companySize?: string;
};

export default function CompanyHeader(props: CompanyHeaderProps) {
  return (
    <div className="flex gap-4 bg-gradient-to-r from-primary-800 to-primary-500 p-4 text-white">
      <Avatar
        src={props.companyLogo}
        alt="company logo"
        sx={{ width: 150, height: 150 }}
      />
      <div className="flex flex-col gap-4">
        <Typography variant="h6">{props.companyName}</Typography>
        <div className="flex items-center gap-8">
          <div className="flex gap-2 items-center ">
            <LanguageIcon></LanguageIcon>
            <Link
              variant="body2"
              href={props.companyWebsite}
              sx={{
                color: "#ffffff",
                maxWidth: "200px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {props.companyWebsite}
            </Link>
          </div>
          <div className="flex gap-2 items-center">
            <Groups2Icon></Groups2Icon>
            <Typography variant="body2">{props.companySize}</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
