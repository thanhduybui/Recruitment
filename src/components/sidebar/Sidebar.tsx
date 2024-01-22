import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { SideBarItem } from "@components/sidebar";
import { useMediaQuery } from "@mui/material";
import { SidebarItemType } from "@data/interface";

type SidebarProps = {
  items?: SidebarItemType[];
};

export default function AdminSidebar({ items }: SidebarProps) {
  const isMdScreen = useMediaQuery("(min-width: 768px)");
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        marginTop: "2rem",
      }}
    >
      <List
        component="nav"
        aria-label="main mailbox folders"
        sx={{
          display: isMdScreen ? "auto" : "flex",
          flexDirection: isMdScreen ? "row" : "column",
        }}
      >
        {items &&
          items.map((item) => (
            <SideBarItem
              key={item.tabIndex}
              icon={item.icon}
              textContent={item.content}
              tabIndex={item.tabIndex}
            />
          ))}
      </List>
    </Box>
  );
}
