import { ModalBackdrop, ModalContentContainer } from "@components/ui/modal";
import { modalName } from "@data/constants";

const { AVATAR_MODAL } = modalName;
export default function AvatarModal() {
  return (
    <ModalBackdrop modalName={AVATAR_MODAL}>
      <ModalContentContainer>Modal chinh sua anh</ModalContentContainer>
    </ModalBackdrop>
  );
}
