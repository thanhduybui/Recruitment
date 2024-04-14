import {
  ModalBackdrop,
  ModalHeader,
  ScrollModalContainer,
} from "@components/ui/modal";
import { modalName } from "@data/constants";
import { createPortal } from "react-dom";
import { AddUserForm } from "../..";
import { EditModalContainer } from "@components/ui/modal";

export default function AddUserModal() {
  return createPortal(
    <ModalBackdrop modalName={modalName.ADD_USER_MODAL}>
      <EditModalContainer>
        <ModalHeader
          title="Thêm tài khoản"
          modalName={modalName.ADD_USER_MODAL}
        />
        <ScrollModalContainer wide>
          <AddUserForm />
        </ScrollModalContainer>
      </EditModalContainer>
    </ModalBackdrop>,
    document.getElementById("modal") as HTMLElement
  );
}
