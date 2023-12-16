import { IconButton, Tooltip } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Check from "@mui/icons-material/Check";
import Popover from "@mui/material/Popover";
import { useState } from "react";

const iconButtonStyles = {
  borderRadius: "8px",
  padding: "10px",
  backgroundColor: "#F3F4F6",
};

export default function FilterTypeUser() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "type-user-menu" : undefined;

  return (
    <div>
      <Tooltip title="Lọc">
        <IconButton
          sx={iconButtonStyles}
          id="basic-button"
          aria-controls={id}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <FilterListIcon color="primary" />
        </IconButton>
      </Tooltip>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Paper>
          <MenuList>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              Ứng viên
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemText inset>Nhà tuyển dụng</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemText inset>Quản trị viên</ListItemText>
            </MenuItem>
          </MenuList>
        </Paper>
      </Popover>
    </div>
  );
}
