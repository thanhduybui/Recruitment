import { ModalBackdrop, ModalContentContainer } from "@components/ui/modal";
import { modalName } from "@data/constants";
import { UserModalAvatar } from "..";
import { ModalHeader } from "@components/ui/modal";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { RootState } from "@store";

const { AVATAR_MODAL } = modalName;
export default function AvatarModal() {
  const companyImage = useSelector(
    (state: RootState) => state.changeCompanyAvatar.link
  );
  return createPortal(
    <ModalBackdrop modalName={AVATAR_MODAL}>
      <ModalContentContainer>
        <ModalHeader modalName={AVATAR_MODAL} title="Cập nhập ảnh đại diện" />
        <UserModalAvatar image={companyImage}></UserModalAvatar>
      </ModalContentContainer>
    </ModalBackdrop>,
    document.getElementById("modal") as HTMLElement
  );
}
