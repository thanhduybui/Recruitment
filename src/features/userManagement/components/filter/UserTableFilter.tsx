import SearchInput from "@components/form/Input/SearchInput";
import Button from "@mui/material/Button";
import { FilterTypeUser } from "../..";
import AddIcon from "@mui/icons-material/Add";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { AddUserModal } from "@features/userManagement";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@store";
import { modalName } from "@data/constants";
import { openModal } from "@store/modal";

export default function UserTableFilter() {
  const isMediumScreen = useMediaQuery("(min-width: 760px)");
  const [searchOpen, setSearchOpen] = useState(false);
  const addUserModalOpen = useSelector(
    (state: RootState) => state.modals.addUserModal
  );

  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(openModal({ modalName: modalName.ADD_USER_MODAL }));
    console.log(addUserModalOpen);
  };

  return (
    <>
      {addUserModalOpen && <AddUserModal />}
      <div className="flex items-center justify-between">
        <FilterTypeUser />
        <form className="relative flex items-center gap-2 justify-end mb-2">
          <div
            className={`lg:flex items-center gap-2 p-2 lg:p-0 shadow-lg lg:shadow-none h-32 lg:h-fit ${
              searchOpen
                ? "absolute w-[300px] mt-2 flex gap-4 top-full z-20 bg-gray-150 rounded-md"
                : "hidden"
            }`}
          >
            <SearchInput placeholder="Tìm kiếm người dùng" />
            <Button
              variant="contained"
              className="bg-primary-600 text-white"
              sx={{ textTransform: "none" }}
              size={isMediumScreen ? "medium" : "small"}
            >
              Tìm kiếm
            </Button>
          </div>

          {!isMediumScreen && (
            <Tooltip title="Tìm kiếm">
              <IconButton
                color="primary"
                sx={{ border: "2px solid #0581e6" }}
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <SearchIcon />
              </IconButton>
            </Tooltip>
          )}

          {isMediumScreen ? (
            <Button
              startIcon={<AddIcon />}
              variant="outlined"
              color="primary"
              sx={{ textTransform: "none" }}
              onClick={onClickHandler}
            >
              Thêm mới
            </Button>
          ) : (
            <Tooltip title="Thêm mới">
              <IconButton color="primary" sx={{ border: "2px solid #0581e6" }}>
                <AddIcon />
              </IconButton>
            </Tooltip>
          )}
        </form>
      </div>
    </>
  );
}
