import { RadioButtonGroup, TextInput } from "@components/form";
import { Gender, InputConstants } from "@data/constants";

import { UserProfile } from "@features/recruiter/recuiterInfo";
import { useState } from "react";

type UserInfoProps = {
  profile: UserProfile | null;
};
export default function UserInfo({ profile }: UserInfoProps) {
  const [gender, setGender] = useState(profile?.gender);
  const onChosenHandler = (value: string) => {
    console.log(gender);
    setGender(value);
  };

  return (
    <div className="flex flex-col gap-4">
      <TextInput
        labelBold={true}
        label="Họ và tên"
        defaultValue={profile?.fullName}
        id="fullName"
        name={InputConstants.FULL_NAME}
        type="text"
      ></TextInput>
      <RadioButtonGroup
        label="Giới tính"
        options={Gender}
        onChosen={onChosenHandler}
        sm
        labelBold
      />
      <TextInput
        labelBold={true}
        label="Số điện thoại"
        defaultValue={profile?.phoneNumber}
        type="phone"
        name={InputConstants.PHONE_NUMBER}
        id="phoneNumber"
      ></TextInput>
      <TextInput
        labelBold={true}
        label="Email"
        defaultValue={profile?.email}
        type="email"
        id="email"
        name={InputConstants.EMAIL}
        disabled={true}
      ></TextInput>
    </div>
  );
}
