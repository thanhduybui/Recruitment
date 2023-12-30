import { InputConstants } from "@data/constants";

export const getValidationRule = (
  value: string,
  name: string,
  passwordValue?: string
) => {
  switch (name) {
    case InputConstants.FULL_NAME:
      return !/^[\p{L}\p{M}\s]+$/u.test(value)
        ? "Họ và tên chỉ chứa chữ cái"
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
    case InputConstants.COMPANY_NAME:
      return !value ? "Tên công ty không được bỏ trống" : "";
    case InputConstants.PHONE_NUMBER:
      return !/^(\+?\d{1,3}[- ]?)?\d{9,}$/.test(value)
        ? "Số điện thoại không hợp lệ"
        : "";
    default:
      return "";
  }
};
