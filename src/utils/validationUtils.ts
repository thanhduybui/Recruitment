import { InputConstants } from "@data/constants";

export const getValidationRule = (
  value: string,
  name: string,
  passwordValue?: string
) => {
  switch (name) {
    case InputConstants.USERNAME:
      return !/^[A-Za-z0-9]+$/.test(value)
        ? "Tên đăng nhập chỉ chứa chữ cái và số"
        : "";
    case InputConstants.PASSWORD:
      return !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)
        ? "Mật khẩu phải có ít nhất 8 ký tự, bao gồm ít nhất một chữ cái và một số"
        : "";
    case InputConstants.EMAIL:
      return !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value)
        ? "Email không hợp lệ"
        : "";
    case InputConstants.CONFIRM_PASSWORD:
      return value !== passwordValue ? "Mật khẩu xác nhận không khớp" : "";
    default:
      return "";
  }
};
