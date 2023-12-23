import { TextInput } from "@components/form";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { AddUserTabProps } from "@features/admin/userManagement/interface";
import { FormWrapper } from "@features/admin/userManagement";

export default function AddCandidateTab(props: AddUserTabProps) {
  return (
    <div
      role="tabpanel"
      hidden={props.value !== props.index}
      id={`simple-tabpanel-${props.index}`}
      aria-labelledby={`simple-tab-${props.index}`}
    >
      {props.value === props.index && (
        <Box sx={{ p: 3 }}>
          <Typography variant="subtitle2" sx={{ marginBottom: "2.4rem" }}>
            Các trường đánh dấu <span className="text-error-400">(*)</span> là
            bắt buộc
          </Typography>
          <FormWrapper>
            <TextInput label="Tên đăng nhập" type="text" strict />
            <TextInput label="Mật khẩu" type="text" strict />
            <TextInput label="Email" type="phoneNumber" strict />
            <TextInput label="Số điện thoại" type="phoneNumber" />
            <Button variant="contained" color="primary">
              Thêm
            </Button>
          </FormWrapper>
        </Box>
      )}
    </div>
  );
}
