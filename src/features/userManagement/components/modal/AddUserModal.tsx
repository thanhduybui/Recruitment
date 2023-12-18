import {
  ModalBackdrop,
  ModalContentContainer,
  ModalHeader,
} from "@components/ui/modal";
import { modalName } from "@data/constants";
import { createPortal } from "react-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import { AddAdminTab, AddCompanyTab, AddCandidateTab } from "../..";

export default function AddUserModal() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return createPortal(
    <ModalBackdrop modalName={modalName.ADD_USER_MODAL}>
      <ModalContentContainer>
        <ModalHeader
          title="Thêm tài khoản"
          modalName={modalName.ADD_USER_MODAL}
        />
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              label="Admin"
              {...a11yProps(0)}
              sx={{ textTransform: "none" }}
            />
            <Tab
              label="Nhà tuyển dụng"
              {...a11yProps(1)}
              sx={{ textTransform: "none" }}
            />
            <Tab
              label="Ứng viên"
              {...a11yProps(2)}
              sx={{ textTransform: "none" }}
            />
          </Tabs>
        </Box>
        <AddAdminTab value={value} index={0}></AddAdminTab>
        <AddCompanyTab value={value} index={1}></AddCompanyTab>
        <AddCandidateTab value={value} index={2}></AddCandidateTab>
      </ModalContentContainer>
    </ModalBackdrop>,
    document.getElementById("modal") as HTMLElement
  );
}
