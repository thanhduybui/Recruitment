import {
  ModalContentContainer,
  ScrollModalContainer,
} from "@components/ui/modal";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import IconButton from "@mui/material/IconButton";
import { createPortal } from "react-dom";
import { TextHeading } from "@components/heading";
import { Button } from "@mui/material";
import { ApprovalModalType } from "./CompanyDataList";
import api from "@utils/axios";
import { getAccessToken } from "@utils/authUtils";
import { toast } from "react-toastify";
import { toastTifyOptions } from "@utils/toastifyUtils";

type ApprovalModalProps = {
  onCloseModal?: () => void;
  data?: ApprovalModalType;
  reloadList?: () => void;
};

export default function ApprovalModal(props: ApprovalModalProps) {
  const handleVerify = async () => {
    try {
      const res = await api.put(`/companies/verify/${props.data?.id}`, null, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      });

      if (res.status === 200) {
        toast.success("Xác thực công ty thành công", toastTifyOptions);
        window.location.reload();
        props.onCloseModal && props.onCloseModal();
      }
    } catch (error) {
      console.error("Error verifying company", error);
      toast.error("Duyệt không thành công", toastTifyOptions);
    }
  };

  return createPortal(
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-30 z-50 
      transition-opacity duration-500"
      onClick={props.onCloseModal}
    >
      <ModalContentContainer>
        <div className="flex items-center justify-between border-b-4 border-primary-500">
          <h1 className="text-lg font-semibold">Duyệt giấy chứng nhận</h1>
          <IconButton onClick={props.onCloseModal}>
            <CloseRoundedIcon />
          </IconButton>
        </div>
        <ScrollModalContainer wide>
          <div className="flex flex-col gap-4">
            <TextHeading
              title="GIấy chứng nhận doanh nghiệp"
              borderStart
              small
            />
            <iframe
              className="border border-gray-150 w-full md:h-[400px]"
              src={props.data?.businessLicense}
            />
          </div>
        </ScrollModalContainer>
        <div className="flex justify-end gap-2 items-center">
          {props.data?.isVerified ? (
            <p className="text-success-600">Đã xác thực</p>
          ) : (
            <Button variant="contained" onClick={handleVerify}>
              Duyệt
            </Button>
          )}

          <Button variant="outlined" onClick={props.onCloseModal}>
            Đóng
          </Button>
        </div>
      </ModalContentContainer>
    </div>,
    document.getElementById("root") as HTMLElement
  );
}
