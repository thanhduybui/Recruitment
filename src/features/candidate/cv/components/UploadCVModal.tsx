import { TextInput } from "@components/form";
import { FileDropZone } from "@components/form/File";
import { FormControlLabel } from "@components/form/FormUI";
import {
  ModalBackdrop,
  ModalContentContainer,
  ModalHeader,
} from "@components/ui/modal";
import { modalName } from "@data/constants";
import { Button, CircularProgress } from "@mui/material";
import { useDispatch } from "react-redux";
import { closeModal } from "@store/modal";
import { useState } from "react";
import api from "@utils/axios";
import { getAccessToken } from "@utils/authUtils";
import { toast } from "react-toastify";
import { toastTifyOptions } from "@utils/toastifyUtils";

export default function UploadCVModal() {
  const dispatch = useDispatch();
  const [file, setFile] = useState<File | null>(null);
  const [cvName, setCvName] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const onCloseHanlder = () => {
    dispatch(closeModal({ modalName: modalName.UPLOAD_CV_MODAL }));
  };

  const onSaveCvHandler = async () => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("file", file as File);
      formData.append("name", cvName);
      const res = await api.post("/cv/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${getAccessToken()}`,
        },
        timeout: 10000,
      });
      toast.success(res.data.message, toastTifyOptions);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
      onCloseHanlder();
    }
  };

  return (
    <ModalBackdrop modalName={modalName.UPLOAD_CV_MODAL}>
      {isLoading && <CircularProgress />}
      {!isLoading && (
        <ModalContentContainer>
          <ModalHeader
            title="Tải lên CV"
            modalName={modalName.UPLOAD_CV_MODAL}
          />
          <div className="flex flex-col gap-8">
            <div>
              <FormControlLabel label="Nhập tên cv" strict />
              <TextInput
                placeholder="Fresher blockchain developer"
                inputChange={(e) => setCvName(e.target.value)}
              />
            </div>
            <div>
              <FormControlLabel label="Tải file lên" strict />
              <FileDropZone
                onSelectFile={(file) => {
                  setFile(file);
                }}
                exts={[".pdf", ".docx", ".doc"]}
                isPapers
              />
            </div>
            <div className="flex gap-4 ml-auto">
              <Button
                color="primary"
                variant="outlined"
                size="small"
                onClick={onCloseHanlder}
              >
                Hủy
              </Button>
              <Button
                color="primary"
                variant="contained"
                size="small"
                onClick={onSaveCvHandler}
              >
                Lưu CV
              </Button>
            </div>
          </div>
        </ModalContentContainer>
      )}
    </ModalBackdrop>
  );
}
