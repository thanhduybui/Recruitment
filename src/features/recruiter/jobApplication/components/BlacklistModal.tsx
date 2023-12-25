import { CloseModalButton } from "@components/ui/button";
import {
  ModalBackdrop,
  ModalContentContainer,
  ModalHeader,
} from "@components/ui/modal";
import { modalName } from "@data/constants";
import { Typography } from "@mui/material";
import { createPortal } from "react-dom";

export default function BlacklistModal() {
  return createPortal(
    <ModalBackdrop modalName={modalName.BLACKLIST_MODAL}>
      <ModalContentContainer sm>
        <ModalHeader
          modalName={modalName.BLACKLIST_MODAL}
          title="Ứng viên hạn chế"
        />
        <div className="p-4">
          <Typography variant="body1" component="p">
            Huỷ phỏng vấn không báo trước
          </Typography>
        </div>
        <div className="flex justify-end">
          <CloseModalButton modalName={modalName.BLACKLIST_MODAL} />
        </div>
      </ModalContentContainer>
    </ModalBackdrop>,
    document.getElementById("root") as HTMLElement
  );
}
