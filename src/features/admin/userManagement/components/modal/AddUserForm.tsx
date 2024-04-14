import { RadioButtonGroup, TextInput } from "@components/form";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { FormWrapper } from "@features/admin/userManagement";
import { useState } from "react";
import api from "@utils/axios";
import { getAccessToken } from "@utils/authUtils";
import { toast } from "react-toastify";
import { toastTifyOptions } from "@utils/toastifyUtils";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { modalName } from "@data/constants";
import { openModal } from "@store/modal";

const options: Record<string, string> = {
  ADMIN: "Admin",
  CANDIDATE: "Ứng viên",
  RECRUITER: "Doanh nghiệp",
};

export default function AddCandidateTab() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("ADMIN");
  const dispatch = useDispatch();

  const createNewUserHandler = async () => {
    const data = {
      fullName,
      email,
      password,
      confirmPassword,
      role,
    };

    try {
      const res = await api.post("/users", data, {
        headers: { Authorization: "Bearer " + getAccessToken() },
      });
      window.location.reload();
      toast.success(res.data.message, toastTifyOptions);
      dispatch(openModal({ modalName: modalName.ADD_USER_MODAL }));
    } catch (error) {
      const typedError = error as AxiosError;
      const data = typedError.response?.data as {
        message: string;
        status: number;
      };
      toast.error(data.message, toastTifyOptions);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="subtitle2" sx={{ marginBottom: "2.4rem" }}>
        Các trường đánh dấu <span className="text-error-400">(*)</span> là bắt
        buộc
      </Typography>
      <FormWrapper>
        <RadioButtonGroup
          options={options}
          label="Chọn loại tài khoản"
          value={role}
          sm
          onChosen={(chosenRole) => {
            console.log(chosenRole);
            setRole(chosenRole);
          }}
        />
        <TextInput
          label="Họ tên"
          type="text"
          required
          inputChange={(e) => setFullName(e.target.value)}
        />
        <TextInput
          label="Email đăng nhập"
          type="email"
          required
          inputChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          label="Mật khẩu"
          type="password"
          required
          inputChange={(e) => setPassword(e.target.value)}
        />
        <TextInput
          label="Mật khẩu"
          type="password"
          required
          inputChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={createNewUserHandler}
        >
          Thêm
        </Button>
      </FormWrapper>
    </Box>
  );
}
