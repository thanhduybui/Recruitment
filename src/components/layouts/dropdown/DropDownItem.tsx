import { ListItem, ListItemText, ListItemButton } from "@mui/material";

type DropDownItemProps = {
  name: string;
};

export default function DropDownItem(props: DropDownItemProps) {
  return (
    <ListItem style={{ margin: 0 }}>
      <ListItemButton>
        <ListItemText primary={props.name} />
      </ListItemButton>
    </ListItem>
  );
}
