import { FileDropZone } from "@components/form/File";
import { MainSectionContainer } from "@components/ui";
import pdf from "@assets/pdf/test_cv.pdf";

import { useState } from "react";
import { Button } from "@mui/material";

export default function VerifyAccount() {
  const [file, setFile] = useState<File | null>(null);
  const [isVerified, setIsVerified] = useState(false);
  console.log(file);

  return (
    <MainSectionContainer heading="Giấy xác nhận danh nghiệp">
      <div className="mt-4">
        {!isVerified && (
          <FileDropZone
            description="Kích thước file không quá 200MB và phải trong số các định dạng: docx pdf"
            content="Tải chứng nhận lên"
            onSelectFile={(file) => setFile(file)}
          />
        )}
        {isVerified && <iframe src={pdf} className="w-full h-72"></iframe>}
      </div>

      <div className="mt-4 flex items-center justify-center">
        <Button
          color={isVerified ? "error" : "primary"}
          variant="contained"
          sx={{ textTransform: "none" }}
          onClick={() => setIsVerified(!isVerified)}
        >
          {isVerified ? "Xoá chứng nhận" : "Lưu chứng nhận"}
        </Button>
      </div>
    </MainSectionContainer>
  );
}
