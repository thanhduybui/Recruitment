import {
  ModalBackdrop,
  ModalContentContainer,
  ModalHeader,
  ModalScrollContainer,
} from "@components/ui/modal";
import { LongDescriptionBox, TextInput, Textarea } from "@components/form";
import { createPortal } from "react-dom";
import { modalName } from "@data/constants";
import Button from "@mui/material/Button";
import { closeModal } from "@store/modal";
import { useDispatch } from "react-redux";

export default function JobDetailModal() {
  const dispatch = useDispatch();

  const onCloseHandler = () => {
    dispatch(closeModal({ modalName: modalName.JOB_DETAIL_MODAL }));
  };
  return createPortal(
    <ModalBackdrop modalName={modalName.JOB_DETAIL_MODAL}>
      <ModalContentContainer>
        <ModalHeader
          title="Chi tiết việc làm"
          modalName={modalName.JOB_DETAIL_MODAL}
        />
        <ModalScrollContainer wide={true}>
          <form className="px-8 flex flex-col gap-4">
            <div className="flex gap-8 justify-center">
              <div className="flex w-3/5 flex-col gap-2">
                <Textarea
                  label="Tên công việc"
                  defaultValue="Tuyển freshser Ruby on Rails tháng 2 triệu"
                  disabled
                />

                <Textarea
                  label="Công ty"
                  defaultValue="Công ty TNHH Tuyệt đối an toàn"
                  disabled
                />
              </div>
              <div className="flex w-2/5 flex-col gap-2">
                <TextInput
                  disabled
                  label="Hạn ứng tuyển"
                  defaultValue="20/10/2024"
                  labelBold
                />
                <TextInput
                  disabled
                  label="Số lượng cần tuyển"
                  defaultValue="2"
                  labelBold
                />
                <TextInput
                  disabled
                  defaultValue="100"
                  label="Số lượt xem"
                  labelBold
                />
                <TextInput
                  disabled
                  defaultValue="80"
                  label="Số đơn ứng tuyển"
                  labelBold
                />
              </div>
            </div>
            <LongDescriptionBox label="Mô tả công việc" />
            <LongDescriptionBox label="Yêu cầu công việc" />
            <LongDescriptionBox label="Đãi ngộ" />
          </form>
        </ModalScrollContainer>
        <div className="my-6 flex justify-end px-8">
          <Button color="primary" variant="contained" onClick={onCloseHandler}>
            Đóng
          </Button>
        </div>
      </ModalContentContainer>
    </ModalBackdrop>,
    document.getElementById("modal") as HTMLElement
  );
}
