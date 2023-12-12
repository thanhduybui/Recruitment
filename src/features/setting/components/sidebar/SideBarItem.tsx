import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import { setTabIndex } from "@store/sidebar";
import { IconButton, useMediaQuery } from "@mui/material";
import { RootState } from "@store";

type SideBarItemProps = {
  selectedIndex?: number;
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

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    dispatcher(setTabIndex(index));
  };

  return (
    <>
      {!isMdScreen ? (
        <IconButton size="large">{props.icon}</IconButton>
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
