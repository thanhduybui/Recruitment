import { Option } from "@data/interface";

export type Category = { value: string; name: string };

export const fields = [
  { value: "0", name: "Tất cả lĩnh vực" },
  { value: "1", name: "Công nghệ thông tin" },
  { value: "2", name: "Thiết kế đồ họa" },
  { value: "3", name: "Kinh doanh" },
  { value: "4", name: "Marketing" },
  { value: "5", name: "Nhân sự" },
  { value: "6", name: "Tài chính" },
  { value: "7", name: "Bán hàng" },
  { value: "8", name: "Hành chính" },
  { value: "9", name: "Khác" },
];

export const majors: Option[] = [
  { id: "1", name: "Sales" },
  { id: "2", name: "Thiết kế đồ họa" },
  { id: "3", name: "Lập trình di động" },
  { id: "4", name: "Lập trình web" },
  { id: "5", name: "Kiểm toán viên" },
  { id: "6", name: "Kỹ sư xây dựng" },
  { id: "7", name: "Giảng viên" },
  { id: "8", name: "Giáo viên mầm non" },
];

export const positions: Option[] = [
  { id: "0", name: "Tất cả vị trí" },
  { id: "1", name: "Nhân viên" },
  { id: "2", name: "Trưởng nhóm" },
  { id: "3", name: "Quản lý" },
  { id: "4", name: "Giám đốc" },
  { id: "5", name: "Khác" },
];

export const postTypes: Option[] = [{ id: "1", name: "Vị trí tuyển dụng gấp" }];

export const skills: Option[] = [
  { id: "0", name: "Tất cả kỹ năng" },
  { id: "1", name: "Làm việc nhóm" },
  { id: "2", name: "Giao tiếp" },
  { id: "3", name: "Tiếng Anh" },
  { id: "4", name: "Tiếng Nhật" },
  { id: "5", name: "Tiếng Trung" },
  { id: "6", name: "Tiếng Hàn" },
  { id: "7", name: "Tiếng Pháp" },
  { id: "8", name: "Tiếng Đức" },
  { id: "9", name: "Tiếng Nga" },
  { id: "10", name: "Tiếng Tây Ban Nha" },
  { id: "11", name: "Tiếng Bồ Đào Nha" },
  { id: "12", name: "Tiếng Ý" },
  { id: "13", name: "Tiếng Ả Rập" },
  { id: "14", name: "Tiếng Thụy Điển" },
  { id: "15", name: "Tiếng Hà Lan" },
  { id: "16", name: "Tiếng Phần Lan" },
  { id: "17", name: "Tiếng Thái" },
  { id: "18", name: "Tiếng Indonesia" },
  { id: "19", name: "Tiếng Malaysia" },
  { id: "20", name: "Tiếng Lào" },
  { id: "21", name: "Tiếng Campuchia" },
  { id: "22", name: "Tiếng Myanmar" },
  { id: "23", name: "Tiếng Philipin" },
  { id: "24", name: "Tiếng Bungari" },
  { id: "25", name: "Tiếng Ba Lan" },
  { id: "26", name: "Tiếng Séc" },
  { id: "27", name: "Tiếng Hy Lạp" },
];
