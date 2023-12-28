import {
  FormHeader,
  RadioButtonGroup,
  SearchSelect,
  TextInput,
} from "@components/form";
import { TextHeading } from "@components/heading";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import ViewCompactOutlinedIcon from "@mui/icons-material/ViewCompactOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { positions } from "@data/api";
import Button from "@mui/material/Button";
import { InputConstants } from "@data/constants";
import { useEffect, useState } from "react";
import { FileDropZone } from "@components/form/File";

export default function RecruiterRegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: (value: string) => void
  ) => {
    setter(e.target.value);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsFormValid(
        email !== "" &&
          password !== "" &&
          confirmPassword !== "" &&
          fullName !== "" &&
          phoneNumber !== "" &&
          companyName !== ""
      );
    }, 500);

    return () => clearTimeout(timeout);
  }, [email, password, confirmPassword, fullName, phoneNumber, companyName]);

  return (
    <form className="w-7/12 px-4 py-10 flex flex-col gap-4">
      <FormHeader
        title="Đăng ký tài khoản Nhà tuyển dụng"
        subtitle="Cùng tạo dựng lợi thế cho doanh nghiệp bằng cách tìm kiếm những ứng viên ưu tú nhất."
      />
      <div className="px-6 flex flex-col gap-6">
        <TextHeading title="Thông tin tài khoản" borderStart small />
        <TextInput
          label="Nhập email liên hệ"
          placeholder="Nhập email liên hệ"
          inputChange={(e) => handleInputChange(e, setEmail)}
          name={InputConstants.EMAIL}
          required
          startIcon={<MailOutlineIcon />}
        />
        <TextInput
          placeholder="Nhập mật khẩu"
          label="Nhập mật khẩu"
          required
          inputChange={(e) => handleInputChange(e, setPassword)}
          name={InputConstants.PASSWORD}
          type="password"
          startIcon={<LockOutlinedIcon />}
        />
        <TextInput
          placeholder="Nhập lại mật khẩu"
          label="Nhập lại mật khẩu"
          required
          type="password"
          name={InputConstants.CONFIRM_PASSWORD}
          inputChange={(e) => handleInputChange(e, setConfirmPassword)}
          passwordValue={password}
          startIcon={<LockOutlinedIcon />}
        />
      </div>
      <div className="px-6 flex flex-col gap-6 mt-10">
        <TextHeading title="Thông tin nhà tuyển dụng" borderStart small />
        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
          <TextInput
            name={InputConstants.FULL_NAME}
            label="Họ và tên"
            required
            type="text"
            placeholder="Nhập họ và tên"
            inputChange={(e) => handleInputChange(e, setFullName)}
            startIcon={<PersonOutlineOutlinedIcon />}
          />
          <div className="flex items-center">
            <RadioButtonGroup label="Giới tính" values={["Nam", "Nữ"]} sm />
          </div>
          <TextInput
            name={InputConstants.PHONE_NUMBER}
            label="Số điện thoại"
            required
            type="phone"
            inputChange={(e) => handleInputChange(e, setPhoneNumber)}
            placeholder="Nhập số điện thoại"
            startIcon={<LocalPhoneOutlinedIcon />}
          />
          <SearchSelect
            startIcon={<LocationOnOutlinedIcon />}
            label="Vị trí làm việc"
            required
            options={positions}
          />
        </div>

        <TextInput
          name={InputConstants.COMPANY_NAME}
          label="Tên công ty"
          required
          type="text"
          inputChange={(e) => handleInputChange(e, setCompanyName)}
          placeholder="Nhập tên công ty"
          startIcon={<ViewCompactOutlinedIcon />}
        />

        <FileDropZone
          content="Tải giấy chứng nhận kinh doanh lên"
          description="File không được lớn hơn 10MB và định dạnh file là pdf hoặc docx"
        />
      </div>
      <div className="m-auto mt-6">
        {isFormValid && (
          <Button variant="contained" sx={{ textTransform: "none" }}>
            Đăng ký
          </Button>
        )}
        {!isFormValid && (
          <Button variant="contained" sx={{ textTransform: "none" }} disabled>
            Đăng ký
          </Button>
        )}
      </div>
    </form>
  );
}
