import {
  ModalBackdrop,
  ModalContentContainer,
  ModalHeader,
} from "@components/ui/modal";
import { modalName } from "@data/constants";

export default function EditJobModal() {
  return (
    <ModalBackdrop modalName={modalName.EDIT_JOB_MODAL}>
      <ModalContentContainer>
        <ModalHeader modalName={modalName.EDIT_JOB_MODAL} title="Fesher Java" />
        <>Modal xem chi tiết công việc đã đăng tuyển</>
      </ModalContentContainer>
    </ModalBackdrop>
  );
}
