import {
  FormHeader,
  RadioButtonGroup,
  SearchSelect,
  TextInput,
} from "@components/form";
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
import { InputConstants } from "@data/constants";
import { useEffect, useState } from "react";

export default function EmployerRegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (
    value: string,
    setter: (value: string) => void
  ) => {
    setter(value);
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
    <MediumContainer>
      <div className="bg-white  w-full flex rounded-md">
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
              inputChange={(value) => handleInputChange(value, setEmail)}
              name={InputConstants.EMAIL}
              required
              startIcon={<MailOutlineIcon />}
            />
            <TextInput
              placeholder="Nhập mật khẩu"
              label="Nhập mật khẩu"
              required
              inputChange={(value) => handleInputChange(value, setPassword)}
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
              inputChange={(value) =>
                handleInputChange(value, setConfirmPassword)
              }
              passwordValue={password}
              startIcon={<LockOutlinedIcon />}
            />
          </div>
          <div className="px-6 flex flex-col gap-6 mt-10">
            <TextHeading title="Thông tin nhà tuyển dụng" borderStart small />
            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              <TextInput
                label="Họ và tên"
                required
                type="text"
                placeholder="Nhập họ và tên"
                inputChange={(value) => handleInputChange(value, setFullName)}
                startIcon={<PersonOutlineOutlinedIcon />}
              />
              <div className="flex items-center">
                <RadioButtonGroup label="Giới tính" values={["Nam", "Nữ"]} sm />
              </div>
              <TextInput
                label="Số điện thoại"
                required
                type="text"
                inputChange={(value) =>
                  handleInputChange(value, setPhoneNumber)
                }
                placeholder="Nhập số điện thoại"
                startIcon={<LocalPhoneOutlinedIcon />}
              />
              <TextInput
                label="Tên công ty"
                required
                type="text"
                inputChange={(value) =>
                  handleInputChange(value, setCompanyName)
                }
                placeholder="Nhập tên công ty"
                startIcon={<ViewCompactOutlinedIcon />}
              />
            </div>
            <SearchSelect
              startIcon={<LocationOnOutlinedIcon />}
              label="Vị trí làm việc"
              required
              options={locations}
              initValue={locations[0]}
            />
          </div>
          <div className="m-auto mt-6">
            {isFormValid && (
              <Button variant="contained" sx={{ textTransform: "none" }}>
                Đăng ký
              </Button>
            )}
            {!isFormValid && (
              <Button
                variant="contained"
                sx={{ textTransform: "none" }}
                disabled
              >
                Đăng ký
              </Button>
            )}
          </div>
        </form>
        <div className="w-5/12 rounded-r-md bg-gradient-to-br from-primary-600 to-primary-200">
          Ảnh
        </div>
      </div>
    </MediumContainer>
  );
}
