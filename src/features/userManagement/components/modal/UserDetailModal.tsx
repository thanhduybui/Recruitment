import { TextInput } from "@components/form";
import {
  ModalBackdrop,
  ModalContentContainer,
  ModalHeader,
} from "@components/ui/modal";
import { modalName } from "@data/constants";
import { createPortal } from "react-dom";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { closeModal } from "@store/modal";

export default function UserDetailModal() {
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(closeModal({ modalName: modalName.USER_DETAIL_MODAL }));
  };

  return createPortal(
    <ModalBackdrop modalName={modalName.USER_DETAIL_MODAL}>
      <ModalContentContainer>
        <ModalHeader
          title="Chi tiết tài khoản"
          modalName={modalName.USER_DETAIL_MODAL}
        />
        <div className="w-3/4 m-auto max-h-[700px] overflow-y-scroll mt-5">
          <form className="flex gap-6">
            <div className="flex flex-col gap-4">
              <TextInput
                disabled
                defaultValue="12345"
                label="Mã người dùng"
                labelBold
              />
              <TextInput
                disabled
                defaultValue="Bùi Thanh Duy"
                label="Tên người dùng"
                labelBold
              />
              <TextInput
                disabled
                defaultValue="Nam"
                label="Giới tính"
                labelBold
              />
              <TextInput
                disabled
                defaultValue="dtb1742002@gmail.com"
                label="Địa chỉ email"
                labelBold
              />
              <TextInput
                disabled
                defaultValue="123456789"
                label="Số điện thoại"
                labelBold
              />
            </div>
            <div className="flex flex-col gap-4">
              <TextInput
                disabled
                defaultValue="20"
                label="Số lần ứng tuyển"
                labelBold
              />
              <TextInput
                disabled
                defaultValue="Đang hoạt động"
                label="Trạng thái"
                labelBold
              />
              <TextInput
                disabled
                defaultValue="Hồ Chí Minh"
                label="Nơi làm việc"
                labelBold
              />
              <TextInput
                disabled
                defaultValue="5"
                label="Số lượng CV"
                labelBold
              />
            </div>
          </form>
        </div>
        <div className="my-6 flex justify-end">
          <Button color="primary" variant="contained" onClick={closeHandler}>
            Đóng
          </Button>
        </div>
      </ModalContentContainer>
    </ModalBackdrop>,
    document.getElementById("modal") as HTMLElement
  );
}
