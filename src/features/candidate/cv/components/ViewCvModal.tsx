import { ModalBackdrop } from "@components/ui/modal";
import { EditModalContainer } from "@components/ui/modal";
import { createPortal } from "react-dom";
import { ModalHeader } from "@components/ui/modal";
import { modalName } from "@data/constants";
import { TextInput } from "@components/form";

export default function ViewCvModal() {
  return createPortal(
    <ModalBackdrop modalName={modalName.VIEW_CV_MODAL}>
      <EditModalContainer>
        <ModalHeader title="Chi tiết CV" modalName={modalName.VIEW_CV_MODAL} />
        <TextInput label="Tên CV" />
        <iframe src="" className="h-[400px]" />
      </EditModalContainer>
    </ModalBackdrop>,
    document.getElementById("modal") as HTMLElement
  );
}
