import { List } from "@mui/material";
import { DropDownItem } from "@components/layouts";

export default function DropDownMenu() {
  return (
    <List>
      <DropDownItem name="Việc làm mới nhất"></DropDownItem>
      <DropDownItem name="Việc làm đã lưu"></DropDownItem>
    </List>
  );
}
