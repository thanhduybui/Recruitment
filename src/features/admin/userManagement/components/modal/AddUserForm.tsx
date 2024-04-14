import { RadioButtonGroup, TextInput } from "@components/form";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { FormWrapper } from "@features/admin/userManagement";

const options: Record<string, string> = {
  ADMIN: "Admin",
  CANDIDATE: "Ứng viên",
  RECRUITER: "Doanh nghiệp",
};

export default function AddCandidateTab() {
  const defaultRole = "ADMIN";
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="subtitle2" sx={{ marginBottom: "2.4rem" }}>
        Các trường đánh dấu <span className="text-error-400">(*)</span> là bắt
        buộc
      </Typography>
      <FormWrapper>
        <RadioButtonGroup
          options={options}
          label="Chọn loại tài khoản"
          value={defaultRole}
          sm
          onChosen={() => {}}
        />
        <TextInput label="Họ tên" type="text" required />
        <TextInput label="Email đăng nhập" type="email" required />
        <TextInput label="Mật khẩu" type="password" required />
        <TextInput label="Mật khẩu" type="password" required />
        <TextInput label="Số điện thoại" type="phoneNumber" />
        <Button variant="contained" color="primary">
          Thêm
        </Button>
      </FormWrapper>
    </Box>
  );
}
