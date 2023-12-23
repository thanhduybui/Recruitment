import { Select, TextInput } from "@components/form";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { AddUserTabProps } from "@features/admin/userManagement/interface";
import { FormWrapper } from "@features/admin/userManagement";

const companyOptions = [
  { value: "1", name: "Công ty 1" },
  { value: "2", name: "Công ty 2" },
  { value: "3", name: "Công ty 3" },
  { value: "4", name: "Công ty 4" },
  { value: "5", name: "Công ty 5" },
  { value: "6", name: "Công ty 6" },
  { value: "7", name: "Công ty 7" },
  { value: "8", name: "Công ty 8" },
  { value: "9", name: "Công ty 9" },
  { value: "10", name: "Công ty 10" },
  { value: "11", name: "Công ty 11" },
  { value: "12", name: "Công ty 12" },
  { value: "13", name: "Công ty 13" },
  { value: "14", name: "Công ty 14" },
  { value: "15", name: "Công ty 15" },
  { value: "16", name: "Công ty 16" },
  { value: "17", name: "Công ty 17" },
  { value: "18", name: "Công ty 18" },
  { value: "19", name: "Công ty 19" },
  { value: "20", name: "Công ty 20" },
  { value: "21", name: "Công ty 21" },
  { value: "22", name: "Công ty 22" },
  { value: "23", name: "Công ty 23" },
  { value: "24", name: "Công ty 24" },
  { value: "25", name: "Công ty 25" },
  { value: "26", name: "Công ty 26" },
  { value: "27", name: "Công ty 27" },
  { value: "28", name: "Công ty 28" },
  { value: "29", name: "Công ty 29" },
  { value: "30", name: "Công ty 30" },
];

export default function AddUserTab(props: AddUserTabProps) {
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
            Để thêm tài khoản doanh nghiệp, doanh nghiệp của bạn phải đăng ký
            với hệ thống trước đó. Các trường đánh dấu{" "}
            <span className="text-error-400">(*)</span> là bắt buộc
          </Typography>
          <FormWrapper>
            <div className="flex flex-col gap-2">
              <TextInput label="Tên đăng nhập" type="text" strict />
              <TextInput label="Mật khẩu" type="text" strict />
            </div>
            <div className="flex flex-col gap-2">
              <Select
                label="Chọn công ty"
                search
                options={companyOptions}
                strict
              />
              <TextInput label="Số điện thoại" type="phoneNumber" strict />
              <TextInput label="Email" type="email" strict />
              <Button variant="contained" color="primary">
                Thêm
              </Button>
            </div>
          </FormWrapper>
        </Box>
      )}
    </div>
  );
}
