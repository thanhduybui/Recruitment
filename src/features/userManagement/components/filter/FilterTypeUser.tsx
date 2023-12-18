import React, { useState } from "react";
import {
  IconButton,
  Tooltip,
  Paper,
  MenuList,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import CheckIcon from "@mui/icons-material/Check";
import Popover from "@mui/material/Popover";
import { useDispatch, useSelector } from "react-redux";
import { setIndex } from "@store/userFilterTab";
import { RootState } from "@store";
import { userFilterTab } from "@data/constants";

const { CANDIDATE_TAB, EMPLOYER_TAB, ADMIN_TAB, PENDING_TAB } = userFilterTab;

const iconButtonStyles = {
  borderRadius: "8px",
  padding: "10px",
  backgroundColor: "#F3F4F6",
};

const FilterTypeUser = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const dispatch = useDispatch();
  const index: number = useSelector(
    (state: RootState) => state.userFilterTab.tabIndex
  );
  const open = Boolean(anchorEl);
  const id = open ? "type-user-menu" : undefined;

  console.log(index);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (tabIndex: number) => {
    setAnchorEl(null);
    dispatch(setIndex(tabIndex as number));
  };

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
        onClose={() => handleClose(1)}
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
            {[
              { tab: CANDIDATE_TAB, text: "Ứng viên" },
              { tab: EMPLOYER_TAB, text: "Nhà tuyển dụng" },
              { tab: ADMIN_TAB, text: "Quản trị viên" },
              { tab: PENDING_TAB, text: "Tài khoản chờ xét duyệt" },
            ].map((item) => (
              <MenuItem key={item.tab} onClick={() => handleClose(item.tab)}>
                {index === item.tab && (
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                )}
                {item.text}
              </MenuItem>
            ))}
          </MenuList>
        </Paper>
      </Popover>
    </div>
  );
};

export default FilterTypeUser;
