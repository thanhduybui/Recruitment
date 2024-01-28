import { FileDropZone } from "@components/form/File";
import { MainSectionContainer } from "@components/ui";
import pdf from "@assets/pdf/test_cv.pdf";
import { useState } from "react";
import { Button } from "@mui/material";
import { FileWithPath } from "react-dropzone";

export default function VerifyAccount() {
  const [file, setFile] = useState<FileWithPath | null>(null);
  const [isVerified, setIsVerified] = useState(false);

  const handleSelectFile = (file: FileWithPath | null) => {
    setFile(file);
  };

  return (
    <MainSectionContainer heading="Giấy xác nhận doanh nghiệp">
      <div className="mt-4">
        {!isVerified && (
          <FileDropZone
            isPapers
            description="Kích thước file không quá 200MB và phải trong số các định dạng: docx, pdf"
            content="Tải chứng nhận lên"
            exts={[".docx", ".pdf"]}
            onSelectFile={handleSelectFile}
          />
        )}
        {isVerified && <iframe src={pdf} className="w-full h-72"></iframe>}
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
          disabled={file === null}
          onClick={() => setIsVerified(!isVerified)}
        >
          {isVerified ? "Xoá chứng nhận" : "Lưu chứng nhận"}
        </Button>
      </div>
    </MainSectionContainer>
  );
}
