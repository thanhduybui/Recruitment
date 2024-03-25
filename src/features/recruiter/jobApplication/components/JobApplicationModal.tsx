import {
  ModalBackdrop,
  ModalContentContainer,
  ModalHeader,
} from "@components/ui/modal";
import { modalName } from "@data/constants";
import { createPortal } from "react-dom";
import { InformationRow } from "..";
import { TextHeading } from "@components/heading";
import { CloseModalButton } from "@components/ui/button";

export default function JobApplicationModal() {
  return createPortal(
    <ModalBackdrop modalName={modalName.JOB_APPLICATION_MODAL}>
      <ModalContentContainer>
        <ModalHeader
          modalName={modalName.JOB_APPLICATION_MODAL}
          title="Đơn ứng tuyển"
        />
        <div className="flex flex-col gap-2">
          <InformationRow label="Họ và tên" value="Nguyễn Văn A" />
          <InformationRow label="Email" value="nva@gmail.com" />
          <InformationRow label="SĐT" value="0123456789" />
        </div>
        <div className="flex flex-col gap-4">
          <TextHeading title="CV ứng tuyển" borderStart small />
          <iframe
            className="border border-gray-150 w-full md:h-[400px]"
            src="https://firebasestorage.googleapis.com/v0/b/jobhunt-b08b1.appspot.com/o/test_cv.pdf?alt=media&token=1475092c-86d2-48e2-baa1-7eb1964f14fb"
          />
        </div>
        <div className="flex justify-end">
          <CloseModalButton modalName={modalName.JOB_APPLICATION_MODAL} />
        </div>
      </ModalContentContainer>
    </ModalBackdrop>,
    document.getElementById("root") as HTMLElement
  );
}
