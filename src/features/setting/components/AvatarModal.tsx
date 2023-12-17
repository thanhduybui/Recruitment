import { ModalBackdrop, ModalContentContainer } from "@components/ui/modal";
import { modalName } from "@data/constants";
import { UserModalAvatar } from "..";
import { ModalHeader } from "@components/ui/modal";
import { createPortal } from "react-dom";

const { AVATAR_MODAL } = modalName;
export default function AvatarModal() {
  return createPortal(
    <ModalBackdrop modalName={AVATAR_MODAL}>
      <ModalContentContainer>
        <ModalHeader modalName={AVATAR_MODAL} title="Cập nhập ảnh đại diện" />
        <UserModalAvatar></UserModalAvatar>
      </ModalContentContainer>
    </ModalBackdrop>,
    document.getElementById("modal") as HTMLElement
  );
}
