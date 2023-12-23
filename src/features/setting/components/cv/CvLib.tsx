import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import CvCard from "./CvItem";
import CvLibContainer from "./CvLibContainer";

export default function CvLib() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className="flex item-center justify-between mb-2">
        <Typography
          variant="subtitle1"
          component="p"
          sx={{ fontWeight: 600 }}
          className="text-gray-400"
        >
          CV đã lưu
        </Typography>
        <div>
          <Button
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            startIcon={<AddRoundedIcon />}
            size="small"
            color="primary"
            variant="contained"
          >
            Tạo mới
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}>Tạo CV từ Jobhunt</MenuItem>
            <MenuItem onClick={handleClose}>Tải CV lên</MenuItem>
          </Menu>
        </div>
      </div>
      <Divider />
      <CvLibContainer>
        <CvCard name="Java backend" default />
        <CvCard name="Java intern" upload />
      </CvLibContainer>
    </div>
  );
}
