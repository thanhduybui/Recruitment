import SearchInput from "@components/form/Input/SearchInput";
import { Button } from "@mui/material";

export default function TableFilter() {
  return (
    <form className="flex items-center gap-2 justify-end mb-2">
      <SearchInput placeholder="Tìm kiếm người dùng" />
      <Button
        variant="contained"
        className="bg-primary-600 text-white"
        sx={{ textTransform: "none" }}
        size="large"
      >
        Tìm kiếm
      </Button>
    </form>
  );
}
