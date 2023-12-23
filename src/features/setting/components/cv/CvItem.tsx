import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { Tooltip } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

type CvProps = {
  name: string;
  default?: boolean;
  upload?: boolean;
};

const IconButtonStyles = {
  backgroundColor: "#fcfcfc",
  "&:hover": {
    backgroundColor: "#fff",
  },
};

const chipStyles = {
  backgroundColor: "#fff",
  "&hover": {
    backgroundColor: "#fcfcfc",
  },
  boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.2)",
};

export default function Cv(props: CvProps) {
  const backgroundImageUrl =
    "url('https://tenten.vn/tin-tuc/wp-content/uploads/2022/03/cv-xin-viec-la-gi-5.png')"; // Replace 'path_to_your_image.jpg' with the actual image path

  const backgroundStyle = {
    backgroundImage: backgroundImageUrl,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="border-2 border-primary-500 rounded-md z-0"
      style={backgroundStyle}
    >
      <div className="p-2 flex flex-col justify-between bg-gradient-to-t from-gray-300 to-transparent w-full h-40">
        <div className="flex items-center justify-between">
          {props.default ? (
            <Chip
              label="CV chính"
              size="small"
              icon={<StarIcon color="secondary" />}
              sx={chipStyles}
            />
          ) : (
            <Chip
              label="Đặt làm CV chính"
              size="small"
              icon={<StarBorderOutlinedIcon color="secondary" />}
              sx={chipStyles}
            />
          )}
        </div>
        <div className="flex items-center">
          <Typography
            variant="subtitle1"
            component="span"
            style={{ fontWeight: 600, color: "#fff" }}
          >
            {props.name}
          </Typography>
          <div className="flex items-center justify-between gap-1 ml-auto">
            <Tooltip title="Xem chi tiết">
              <IconButton size="small" sx={IconButtonStyles}>
                <RemoveRedEyeOutlinedIcon color="success" />
              </IconButton>
            </Tooltip>
            {props.upload || (
              <Tooltip title="Chỉnh sửa">
                <IconButton size="small" sx={IconButtonStyles}>
                  <ModeEditOutlineOutlinedIcon color="primary" />
                </IconButton>
              </Tooltip>
            )}
            <Tooltip title="Xóa CV">
              <IconButton size="small" sx={IconButtonStyles}>
                <DeleteOutlineTwoToneIcon color="error" />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}
