import {
  CustomFormControlLabel,
  NormalSelect,
  TextInput,
} from "@components/form";
import { Box, Container, Typography } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";
import { editor_key } from "@config/key";
import { useRef } from "react";
import { Editor as TinyMCEEditor } from "tinymce";
import { WorkingProcess } from "@features/candidate/cv";
import StudyProcess from "@features/candidate/cv/components/StudyProcess";
import Button from "@mui/material/Button";
import { FileDropZone } from "@components/form/File";

const jobType = [
  { id: "1", name: "Fulltime" },
  { id: "2", name: "Parttime" },
];

export default function CreateCVPage() {
  const careerObjectRef = useRef<TinyMCEEditor | null>(null);
  return (
    <Container maxWidth="md" sx={{ marginTop: "1rem", marginBottom: "2rem" }}>
      <div className="mx-10 bg-white shadow-md pb-4">
        <Box sx={{ backgroundColor: "#0572cc", padding: "0.4rem 0.8rem" }}>
          <Typography
            variant="subtitle1"
            component="h1"
            sx={{ fontWeight: 400, color: "#ffffff" }}
          >
            Cv cá nhân
          </Typography>
        </Box>
        <div className="profile flex bg-white px-[0.8rem] py-3">
          <div className="avatar min-w-[200px] px-4 pb-7">
            <FileDropZone
              label="Ảnh đại diện"
              labelBold
              onSelectFile={() => {}}
            />
          </div>
          <div className="infor flex-1 flex flex-col gap-4">
            <TextInput label="Tiêu đề CV" required labelBold></TextInput>
            <div className="flex gap-4">
              <div className="flex-1">
                <TextInput
                  labelBold
                  label="Kinh nghiệm việc làm"
                  required
                  placeholder="1 năm/ 2 năm/ 3 năm"
                />
              </div>
              <div className="flex-1">
                <TextInput
                  label="Học vấn"
                  required
                  placeholder="Kỹ sư"
                  labelBold
                />
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex-1">
                <TextInput
                  labelBold
                  label="Trình độ ngoại ngữ"
                  required
                  placeholder="TOEIC 800"
                />
              </div>
              <div className="flex-1">
                <NormalSelect
                  initValue={{ id: "0", name: "Chọn hình thức làm việc" }}
                  label="Loại hình công việc"
                  labelBold
                  options={jobType}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-4 flex flex-col gap-4">
          <div>
            <CustomFormControlLabel label="Mục tiêu nghề nghiệp" strict bold />
            <Editor
              apiKey={editor_key}
              onInit={(_, editor) => (careerObjectRef.current = editor)}
              init={{
                height: 200,
                menubar: false,
                language: "vi",
                language_url: "/langs/vi.js",
                directionality: "ltr",
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "fullscreen",
                  "insertdatetime",
                ],
                toolbar:
                  "undo redo | blocks | " +
                  "bold italic forecolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
              }}
            />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <CustomFormControlLabel label="Quá trình làm việc" strict bold />
              <WorkingProcess />
            </div>
            <div>
              <CustomFormControlLabel label="Quá trình làm việc" strict bold />
              <StudyProcess />
            </div>
            <div>
              <CustomFormControlLabel label="Sở thích cá nhân" strict bold />
              <Editor
                apiKey={editor_key}
                onInit={(_, editor) => (careerObjectRef.current = editor)}
                init={{
                  height: 200,
                  menubar: false,
                  language: "vi",
                  language_url: "/langs/vi.js",
                  directionality: "ltr",
                  plugins: [
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "fullscreen",
                    "insertdatetime",
                  ],
                  toolbar:
                    "undo redo | blocks | " +
                    "bold italic forecolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
                }}
              />
            </div>
          </div>
          <div className="flex justify-end my-4">
            <Button
              variant="contained"
              color="primary"
              sx={{ textTransform: "none" }}
            >
              Lưu CV
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
