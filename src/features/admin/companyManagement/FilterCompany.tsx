import React, { useState } from "react";
import {
  IconButton,
  Tooltip,
  Paper,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import CheckIcon from "@mui/icons-material/Check";
import Popover from "@mui/material/Popover";
import { useDispatch, useSelector } from "react-redux";
import { setIndex } from "@store/companyFilterTab";
import { RootState } from "@store";
import { companyFilterTab } from "@data/constants";

const { NOT_VERIFIED, VERIFIED } = companyFilterTab;

const iconButtonStyles = {
  borderRadius: "8px",
  padding: "10px",
  backgroundColor: "#F3F4F6",
};

const FilterTypeCompany = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const dispatch = useDispatch();
  const index: number = useSelector(
    (state: RootState) => state.companyFilterTab.tabIndex
  );
  const open = Boolean(anchorEl);
  const id = open ? "type-user-menu" : undefined;

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
              { tab: NOT_VERIFIED, text: "Chưa xác thực" },
              { tab: VERIFIED, text: "Đã xác thực" },
            ].map((item) => (
              <MenuItem key={item.tab} onClick={() => handleClose(item.tab)}>
                {index === item.tab && (
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                )}
                {index === item.tab ? (
                  <p>{item.text}</p>
                ) : (
                  <ListItemText inset>{item.text}</ListItemText>
                )}
              </MenuItem>
            ))}
          </MenuList>
        </Paper>
      </Popover>
    </div>
  );
};

export default FilterTypeCompany;
