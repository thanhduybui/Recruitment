import { Button, CircularProgress } from "@mui/material";
import { FileDropZone } from "@components/form/File";
import { useState } from "react";
import { setUserAvatar } from "@store/avatar";
import api from "@utils/axios";
import { getAccessToken } from "@utils/authUtils";
import { useDispatch } from "react-redux";

export default function UserModalAvatar() {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const onUpdateImgHandler = async () => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("file", file as File);
      const res = await api.put("/users/avatar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${getAccessToken()}`,
        },
      });
      dispatch(setUserAvatar({ url: res.data.data.avatar }));
      console.log(res.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex items-stretch px-2 pb-10 gap-4">
      {isLoading ? (
        <CircularProgress></CircularProgress>
      ) : (
        <FileDropZone
          description="Kích thước file không quá 200MB và phải trong số các định dạng: png, jpg, jpeg"
          content="Tải ảnh lên"
          onSelectFile={(file) => setFile(file)}
        />
      )}
      <div className="flex-none flex flex-col gap-4">
        <Button
          color="primary"
          variant="contained"
          size="small"
          onClick={onUpdateImgHandler}
        >
          Thay ảnh mới
        </Button>
        <Button color="error" variant="contained" size="small">
          Xoá ảnh
        </Button>
        <Button color="primary" variant="outlined" size="small">
          Thoát
        </Button>
      </div>
    </div>
  );
}
