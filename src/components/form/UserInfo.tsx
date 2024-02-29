import { RadioButtonGroup, TextInput } from "@components/form";
import { Gender, InputConstants } from "@data/constants";
import Button from "@mui/material/Button";
import { UserProfile } from "@features/recruiter/recuiterInfo";
import { useState } from "react";
import api from "@utils/axios";
import { getAccessToken } from "@utils/authUtils";
import { useAlert } from "@hooks";
import { Alert } from "@mui/material";

type UserInfoProps = {
  profile: UserProfile | null;
};
export default function UserInfo({ profile }: UserInfoProps) {
  const [gender, setGender] = useState(profile?.gender);
  const [fullName, setFullName] = useState(profile?.fullName);
  const [phoneNumber, setPhoneNumber] = useState(profile?.phoneNumber);
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useAlert(false, 3000);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const onChosenHandler = (value: string) => {
    setGender(value);
  };

  const onClickHanlder = async () => {
    try {
      setIsLoading(true);
      const res = await api.put(
        "/users/profile",
        {
          fullName: fullName,
          gender: gender,
          phoneNumber: phoneNumber,
        },
        { headers: { Authorization: `Bearer ${getAccessToken()}` } }
      );
      setMessage(res.data.message);
      setShowAlert(true);
      setError(false);
    } catch (error) {
      setError(true);
      setMessage("Cập nhật thất bại");
      setShowAlert(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {showAlert && (
        <Alert severity={error ? "error" : "success"}>{message}</Alert>
      )}
      <TextInput
        inputChange={(e) => setFullName(e.target.value)}
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
        value={profile?.gender}
        sm
        labelBold
      />
      <TextInput
        inputChange={(e) => setPhoneNumber(e.target.value)}
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
      ></TextInput>{" "}
      <div className="flex items-center justify-center gap-2 mt-4">
        <Button
          variant="contained"
          color="primary"
          sx={{ textTransform: "none" }}
          onClick={onClickHanlder}
        >
          {isLoading ? "Loading..." : "Cập nhật"}
        </Button>
      </div>
    </div>
  );
}
