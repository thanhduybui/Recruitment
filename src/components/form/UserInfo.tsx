import { RadioButtonGroup, TextInput } from "@components/form";

export default function UserInfo() {
  return (
    <div className="flex flex-col gap-4">
      <TextInput
        labelBold={true}
        label="Họ và tên"
        defaultValue="Bùi Thanh Duy"
        id="fullName"
        type="text"
      ></TextInput>
      <RadioButtonGroup
        label="Giới tính"
        values={["Nam", "Nữ", "Khác"]}
        sm
        labelBold
      />
      <TextInput
        labelBold={true}
        label="Số điện thoại"
        defaultValue="0383314133"
        type="phone"
        id="phoneNumber"
      ></TextInput>
      <TextInput
        labelBold={true}
        label="Email"
        defaultValue="dtb1742002@gmail.com"
        type="email"
        id="email"
        disabled={true}
      ></TextInput>
    </div>
  );
}
