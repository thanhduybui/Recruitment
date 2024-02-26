import { TextHeading } from "@components/heading";
import { CompanyInfoRow, InfoContainer, UpdateCompanyModal } from "..";
import { HTMLContent } from "@features/jobDetails";
import Button from "@mui/material/Button";
import { useRouteLoaderData } from "react-router-dom";
import { CompanyInfo } from "@data/interface";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store";
import { openModal } from "@store/modal";
import { modalName } from "@data/constants";
import { AppAvatar } from "@components/ui";
import { AvatarModal } from "@features/candidate/setting";
import { useEffect } from "react";
import { setCompanyAvatar } from "@store/changeCompanyAvatar";

export default function CompanyInformation() {
  const data = useRouteLoaderData("recruiterInfo");

  const isShowModal = useSelector(
    (state: RootState) => state.modals.updateCompanyModal
  );
  const isAvatarModalOpen = useSelector(
    (state: RootState) => state.modals.avatarModal
  );
  const dispatch = useDispatch();
  const { companyInfo } = data as { companyInfo: CompanyInfo };

  const onClickHandler = () => {
    dispatch(openModal({ modalName: modalName.UPDATE_COMPANY_MODAL }));
  };

  useEffect(() => {
    dispatch(setCompanyAvatar(companyInfo.image));
  }, [dispatch, companyInfo.image]);

  return (
    <div className="my-8 px-2">
      {isAvatarModalOpen && <AvatarModal />}
      {isShowModal && <UpdateCompanyModal companyInfo={companyInfo} />}
      <TextHeading title="Thông tin công ty" borderStart></TextHeading>
      <AppAvatar link={companyInfo.image}></AppAvatar>
      <InfoContainer>
        <CompanyInfoRow label="Tên công ty" value={companyInfo.name} />
        <CompanyInfoRow label="Quy mô" value={companyInfo.scale} />
        <CompanyInfoRow label="Địa chỉ" value={companyInfo.address} />
        <CompanyInfoRow label="Email liên hệ" value={companyInfo.email} />
        <CompanyInfoRow label="Hotline" value={companyInfo.phone} />
        <CompanyInfoRow label="Địa chỉ web" value={companyInfo.webUrl} />
        <CompanyInfoRow label="Mô tả" />
        <div>
          <HTMLContent htmlContent={companyInfo.description} />
        </div>
      </InfoContainer>
      <div className="flex items-center justify-center gap-2 mt-8">
        <Button
          variant="contained"
          color="primary"
          sx={{ textTransform: "none" }}
          onClick={onClickHandler}
        >
          Cập nhật
        </Button>
      </div>
    </div>
  );
}
