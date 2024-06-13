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

  const onClickHandler = async () => {
    if (!isVerified) {
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
        setIsVerified(true);
      } catch (error) {
        console.error("error", error);
        toast.error("Cập nhật thất bại", toastTifyOptions);
      } finally {
        setIsLoading(false);
      }
    } else {
      dispatch(openModal({ modalName: modalName.DELETE_LICENSE_MODAL }));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/companies/profile", {
          headers: {
            Authorization: `Bearer ${getAccessToken()}`,
          },
        });

        if (res.data.data.company?.businessLicense) {
          setFileSrc(res.data.data.company?.businessLicense);
          setIsVerified(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [isVerified]);

  const handleDeleteLicense = () => {
    setIsVerified(false);
    setFile(null);
  };

  return (
    <>
      <ToastContainer {...toastContainerOptions} />
      <MainSectionContainer heading="Giấy xác nhận doanh nghiệp">
        <ModalDeleteLicense onVerified={handleDeleteLicense} />
        <div className="mt-4">
          {isLoading && <CircularProgress></CircularProgress>}
          {!isLoading && !isVerified && (
            <FileDropZone
              isPapers
              description="Kích thước file không quá 200MB và phải trong số các định dạng: pdf"
              content="Tải chứng nhận lên"
              exts={[".pdf"]}
              onSelectFile={handleSelectFile}
            />
          )}
          {/* {isVerified && (
            <iframe src={fileSrc} className="w-full h-screen"></iframe>
          )} */}
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
        </div>

        <div className="mt-4 flex items-center justify-center">
          <Button
            color={isVerified ? "error" : "primary"}
            variant="contained"
            sx={{
              textTransform: "none",
              "&.Mui-disabled": {
                backgroundColor: "#CCCCCC", // Change the background color for disabled state
                color: "#888888", // Change the text color for disabled state
                // Add any other styles you want for the disabled state
              },
            }}
            disabled={file === null && !isVerified}
            onClick={onClickHandler}
          >
            {isVerified ? "Xoá chứng nhận" : "Lưu chứng nhận"}
          </Button>
        </div>
      </MainSectionContainer>
    </>
  );
}
