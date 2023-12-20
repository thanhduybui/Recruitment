import { FormHeader, SearchSelect, TextInput } from "@components/form";
import { TextHeading } from "@components/heading";
import { MediumContainer } from "@components/ui";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import ViewCompactOutlinedIcon from "@mui/icons-material/ViewCompactOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { locations } from "@data/api";
import Button from "@mui/material/Button";

export default function EmployerRegisterPage() {
  return (
    <MediumContainer>
      <div className="bg-white  w-full flex rounded-md">
        <form className="w-7/12 px-4 py-10 flex flex-col gap-4">
          <FormHeader
            title="Đăng ký tài khoản Nhà tuyển dụng"
            subtitle="Cùng tạo dựng lợi thế cho doanh nghiệp bằng cách tìm kiếm những ứng viên ưu tú nhất."
          />
          <div className="px-6 flex flex-col gap-4">
            <TextHeading title="Thông tin tài khoản" borderStart small />
            <TextInput
              label="Nhập email liên hệ"
              placeholder="Nhập email liên hệ"
              strict
              startIcon={<MailOutlineIcon />}
            />
            <TextInput
              placeholder="Nhập mật khẩu"
              label="Nhập mật khẩu"
              strict
              type="password"
              startIcon={<LockOutlinedIcon />}
            />
            <TextInput
              placeholder="Nhập lại mật khẩu"
              label="Nhập lại mật khẩu"
              strict
              type="password"
              startIcon={<LockOutlinedIcon />}
            />
          </div>
          <div className="px-6 flex flex-col gap-4">
            <TextHeading title="Thông tin nhà tuyển dụng" borderStart small />
            <TextInput
              label="Họ và tên"
              strict
              type="text"
              placeholder="Nhập họ và tên"
              startIcon={<PersonOutlineOutlinedIcon />}
            />
            <TextInput
              label="Số điện thoại"
              strict
              type="text"
              placeholder="Nhập số điện thoại"
              startIcon={<LocalPhoneOutlinedIcon />}
            />
            <TextInput
              label="Tên công ty"
              strict
              type="text"
              placeholder="Nhập tên công ty"
              startIcon={<ViewCompactOutlinedIcon />}
            />
            <SearchSelect
              startIcon={<LocationOnOutlinedIcon />}
              label="Vị trí làm việc"
              required
              options={locations}
              initValue={locations[0]}
            />
          </div>
          <div className="m-auto">
            <Button variant="contained" sx={{ textTransform: "none" }} disabled>
              Đăng ký
            </Button>
          </div>
        </form>
        <div className="w-5/12 rounded-r-md bg-gradient-to-br from-primary-600 to-primary-200">
          Ảnh
        </div>
      </div>
    </MediumContainer>
  );
}
