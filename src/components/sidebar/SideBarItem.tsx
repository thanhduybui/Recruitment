import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import { setTabIndex } from "@store/sidebar";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { RootState } from "@store";
import Tooltip from "@mui/material/Tooltip";
import { setRecruiterTabIndex } from "@store/recruiterSidebar";

type SideBarItemProps = {
  selectedIndex?: number;
  tabIndex: number;
  textContent?: string;
  icon?: React.ReactNode;
  isRecruiter?: boolean;
};
export default function SideBarItem(props: SideBarItemProps) {
  const dispatcher = useDispatch();

  const isMdScreen = useMediaQuery("(min-width: 768px)");

  const selectdTabIndex = useSelector((state: RootState) => {
    if (!props.isRecruiter) return state.sidebar.tabIndex;
    return state.recruiterSidebar.recruiterTabIndex;
  });

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    if (props.isRecruiter) {
      dispatcher(setRecruiterTabIndex(index));
    } else {
      dispatcher(setTabIndex(index));
    }
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
          onClick={(event) => handleListItemClick(event, props.tabIndex)}
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
