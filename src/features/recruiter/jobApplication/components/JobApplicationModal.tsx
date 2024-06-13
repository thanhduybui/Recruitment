import {
  ModalBackdrop,
  ModalContentContainer,
  ModalHeader,
  ScrollModalContainer,
} from "@components/ui/modal";
import { modalName } from "@data/constants";
import { createPortal } from "react-dom";
import { InformationRow } from "..";
import { TextHeading } from "@components/heading";
import { CloseModalButton } from "@components/ui/button";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@store";
import { getAccessToken } from "@utils/authUtils";
import api from "@utils/axios";
import { toast } from "react-toastify";
import { toastTifyOptions } from "@utils/toastifyUtils";
import { stat } from "fs";

type CvProps = {
  id: string;
  name: string;
  cvUrl: string;
  isDefault: boolean;
};

type JobApplicationProps = {
  id: string;
  email: string;
  name: string;
  phone: string;
  cv: CvProps;
  status: string;
};

export default function JobApplicationModal() {
  const jobApplicationId = useSelector(
    (state: RootState) => state.jobApplicatonId.jobApplicationId
  );
  const [jobApplication, setJobApplication] =
    useState<JobApplicationProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(`/job-applications/${jobApplicationId}`, {
          headers: { Authorization: `Bearer ${getAccessToken()}` },
        });
        setJobApplication(res.data.data.job_application);
      } catch (error) {
        console.error("Error fetching company jobs", error);
      }
    };
    fetchData();
  }, []);

  const handleSeletedApplication = async () => {
    try {
      const res = await api.put(
        `/job-applications/${jobApplicationId}`,
        { status: "APPROVED" },
        {
          headers: { Authorization: `Bearer ${getAccessToken()}` },
        }
      );
      toast.success("Đánh dấu hồ sơ phù hợp thành công", toastTifyOptions);
    } catch (error) {
      toast.error("Thử lại sau", toastTifyOptions);
      console.error("Error approving job application", error);
    }
  };

  return createPortal(
    <ModalBackdrop modalName={modalName.JOB_APPLICATION_MODAL}>
      <ModalContentContainer>
        <ModalHeader
          modalName={modalName.JOB_APPLICATION_MODAL}
          title="Đơn ứng tuyển"
        />
        <ScrollModalContainer wide>
          <div className="flex flex-col gap-2 mb-4">
            <InformationRow label="Họ và tên" value={jobApplication?.name} />
            <InformationRow label="Email" value={jobApplication?.email} />
            <InformationRow label="SĐT" value={jobApplication?.phone} />
          </div>
          <div className="flex flex-col gap-4">
            <TextHeading title="CV ứng tuyển" borderStart small />
            <iframe
              className="border border-gray-150 w-full md:h-[400px]"
              src={jobApplication?.cv.cvUrl}
            />
          </div>
        </ScrollModalContainer>
        <div className="flex justify-end gap-2 items-center">
          {jobApplication?.status !== "APPROVED" && (
            <Button variant="contained" onClick={handleSeletedApplication}>
              Phù hợp
            </Button>
          )}
          {jobApplication?.status === "APPROVED" && (
            <p className="text-primary-400 text-sm">Hồ sơ phù hợp</p>
          )}
          <CloseModalButton modalName={modalName.JOB_APPLICATION_MODAL} />
        </div>
      </ModalContentContainer>
    </ModalBackdrop>,
    document.getElementById("root") as HTMLElement
  );
}
