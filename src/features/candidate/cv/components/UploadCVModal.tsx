import { TextInput } from "@components/form";
import { FileDropZone } from "@components/form/File";
import { FormControlLabel } from "@components/form/FormUI";
import {
  ModalBackdrop,
  ModalContentContainer,
  ModalHeader,
} from "@components/ui/modal";
import { modalName } from "@data/constants";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { closeModal } from "@store/modal";

export default function UploadCVModal() {
  const dispatch = useDispatch();

  const onCloseHanlder = () => {
    dispatch(closeModal({ modalName: modalName.UPLOAD_CV_MODAL }));
  };

  return (
    <ModalBackdrop modalName={modalName.UPLOAD_CV_MODAL}>
      <ModalContentContainer>
        <ModalHeader title="Tải lên CV" modalName={modalName.UPLOAD_CV_MODAL} />
        <div className="flex flex-col gap-8">
          <div>
            <FormControlLabel label="Nhập tên cv" strict />
            <TextInput placeholder="Fresher blockchain developer" />
          </div>
          <div>
            <FormControlLabel label="Tải file lên" strict />
            <FileDropZone onSelectFile={() => {}} />
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
            <Button color="primary" variant="contained" size="small">
              Lưu CV
            </Button>
          </div>
        </div>
      </ModalContentContainer>
    </ModalBackdrop>
  );
}
