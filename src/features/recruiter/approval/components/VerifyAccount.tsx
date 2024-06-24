import { FileDropZone } from "@components/form/File";
import { MainSectionContainer } from "@components/ui";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FileWithPath } from "react-dropzone";
import { getAccessToken } from "@utils/authUtils";
import { Button, CircularProgress } from "@mui/material";
import api from "@utils/axios";
import { ToastContainer } from "react-toastify";
import { toastContainerOptions, toastTifyOptions } from "@utils/toastifyUtils";
import { ModalDeleteLicense } from "..";
import { useDispatch } from "react-redux";
import { openModal } from "@store/modal";
import { modalName } from "@data/constants";
import { Link } from "react-router-dom";

export default function VerifyAccount() {
  const [file, setFile] = useState<FileWithPath | null>(null);
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fileSrc, setFileSrc] = useState("");
  const dispatch = useDispatch();
  const handleSelectFile = (file: FileWithPath | null) => {
    setFile(file);
  };

  console.log("file", file);
  console.log("fileSrc", fileSrc);

  const onUploadHandler = async () => {
    setIsLoading(true);
    const data = new FormData();
    data.append("file", file as File);
    try {
      const res = await api.post("/companies/business-license", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${getAccessToken()}`,
        },
        timeout: 10000,
      });
      toast.success(res.data.message, toastTifyOptions);
    } catch (error) {
      console.error("error", error);
      toast.error("Cập nhật thất bại", toastTifyOptions);
    } finally {
      setIsLoading(false);
    }
  };

  const onClickHandler = () => {
    dispatch(openModal({ modalName: modalName.DELETE_LICENSE_MODAL }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/companies/business-license", {
          headers: {
            Authorization: `Bearer ${getAccessToken()}`,
          },
        });

        if (res.data.data.approval) {
          setFileSrc(res.data.data.approval.businessLicense);
          setIsVerified(res.data.data.approval.verified);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [isVerified]);

  const handleDeleteLicense = () => {
    setFile(null);
  };

  return (
    <>
      <ToastContainer {...toastContainerOptions} />
      <MainSectionContainer heading="Giấy xác nhận doanh nghiệp">
        <ModalDeleteLicense onVerified={handleDeleteLicense} />
        <div className="mt-4">
          {isLoading && <CircularProgress></CircularProgress>}
          {!isLoading && !isVerified && !fileSrc && (
            <FileDropZone
              isPapers
              description="Kích thước file không quá 200MB và phải trong số các định dạng: pdf"
              content="Tải chứng nhận lên"
              exts={[".pdf"]}
              onSelectFile={handleSelectFile}
            />
          )}
          {fileSrc && (
            <div className="flex gap-2 items-center">
              <Link to={fileSrc}>
                <Button variant="outlined">Xem giấy xác nhận</Button>
              </Link>
              {isVerified === true ? (
                <p className="text-success-600">Đã xác nhận</p>
              ) : (
                <p className="text-error-400">Chưa được xác nhận</p>
              )}
            </div>
          )}
        </div>

        <div className="mt-4 flex items-center justify-center">
          {fileSrc !== null && (
            <Button
              color="error"
              variant="contained"
              sx={{
                textTransform: "none",
                "&.Mui-disabled": {
                  backgroundColor: "#CCCCCC", // Change the background color for disabled state
                  color: "#888888", // Change the text color for disabled state
                },
              }}
              onClick={onClickHandler}
            >
              Xóa giấy xác nhận
            </Button>
          )}
          {fileSrc === null && !isVerified && (
            <Button
              color="primary"
              variant="contained"
              sx={{
                textTransform: "none",
                "&.Mui-disabled": {
                  backgroundColor: "#CCCCCC", // Change the background color for disabled state
                  color: "#888888", // Change the text color for disabled state
                  // Add any other styles you want for the disabled state
                },
              }}
              disabled={isLoading && file === null}
              onClick={onUploadHandler}
            >
              Tải lên giấy xác nhận
            </Button>
          )}
        </div>
      </MainSectionContainer>
    </>
  );
}
