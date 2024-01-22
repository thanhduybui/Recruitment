import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import { setTabIndex } from "@store/sidebar";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { RootState } from "@store";
import Tooltip from "@mui/material/Tooltip";

type SideBarItemProps = {
  tabIndex: number;
  textContent?: string;
  icon?: React.ReactNode;
};
export default function SideBarItem(props: SideBarItemProps) {
  const dispatcher = useDispatch();
  const isMdScreen = useMediaQuery("(min-width: 768px)");

  const selectdTabIndex = useSelector(
    (state: RootState) => state.sidebar.tabIndex
  );

  const handleListItemClick = (index: number) => {
    dispatcher(setTabIndex(index));
  };

  return (
    <>
      {!isMdScreen ? (
        <Tooltip title={props.textContent} placement="right">
          <IconButton size="large">{props.icon}</IconButton>
        </Tooltip>
      ) : (
        <ListItemButton
          key={props.tabIndex}
          sx={{
            borderRight:
              selectdTabIndex === props.tabIndex ? "5px solid #0572cc" : "none",
          }}
          selected={selectdTabIndex === props.tabIndex}
          onClick={() => handleListItemClick(props.tabIndex)}
        >
          <ListItemIcon sx={{ padding: 0, margin: 0 }}>
            {props.icon}
          </ListItemIcon>
          <ListItemText primary={props.textContent} />
        </ListItemButton>
      )}
    </>
  );
}
