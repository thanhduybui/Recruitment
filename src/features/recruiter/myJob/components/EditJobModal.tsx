import {
  ModalBackdrop,
  ModalContentContainer,
  ModalHeader,
  ScrollModalContainer,
} from "@components/ui/modal";
import { modalName } from "@data/constants";
import {
  TextInput,
  Textarea,
  NormalSelect,
  SearchSelect,
} from "@components/form";
import { Editor } from "@tinymce/tinymce-react";
import { Editor as TinyMCEEditor } from "tinymce";
import { majors } from "@data/api";
import { useRef } from "react";
import { TextHeading } from "@components/heading";
import { Button, FormControlLabel, Switch } from "@mui/material";
import { CompanyInfo, Option } from "@data/interface";
import { useRouteLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@store";

export default function EditJobModal() {
  const editorRef = useRef<TinyMCEEditor | null>(null);

  const data = useRouteLoaderData("recruiterInfo");

  const jobs = useSelector((state: RootState) => state.jobDetail.jobDetail);

  const {
    companyInfo,
    positions,
    salaryRanges,
    experienceRanges,
    fields,
    workModes,
  } = data as {
    companyInfo: CompanyInfo;
    positions: Option[];
    salaryRanges: Option[];
    experienceRanges: Option[];
    fields: Option[];
    workModes: Option[];
  };

  return (
    <ModalBackdrop modalName={modalName.EDIT_JOB_MODAL}>
      <ModalContentContainer>
        <ModalHeader modalName={modalName.EDIT_JOB_MODAL} title="Fesher Java" />
        <ScrollModalContainer wide>
          <form className="p-4">
            <TextHeading title="Thông tin chung" borderStart small />
            <div className="flex gap-4 mt-3">
              <div className="flex-1 w-3/5 flex flex-col gap-4">
                <Textarea
                  label="Tên công việc"
                  defaultValue={jobs?.title}
                  required
                />
                <Textarea
                  label="Địa điểm làm việc"
                  defaultValue={jobs?.workLocation}
                  required
                />
                <Textarea
                  label="Thời gian làm việc"
                  defaultValue={jobs?.workTime}
                  required
                />
              </div>
              <div className="w-2/5">
                <Textarea
                  label="Công ty"
                  defaultValue={companyInfo.name}
                  disabled
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-3 mt-5 gap-4">
              <TextInput
                label="Số lượng ứng tuyển"
                type="number"
                defaultValue={jobs?.slots + ""}
              />
              <TextInput
                label="Hạn ứng tuyển"
                type="datetime-local"
                defaultValue={jobs?.deadline}
              />
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Việc gấp"
                sx={{ margin: "auto" }}
              />
            </div>
            <div className="grid grid-cols-3 mt-5 gap-4">
              <NormalSelect
                label="Chức vụ"
                options={positions}
                initValue={jobs?.position}
              />
              <NormalSelect
                label="Mức lương"
                options={salaryRanges}
                initValue={jobs?.salaryRange}
              />
              <NormalSelect
                label="Mức kinh nghiệm"
                options={experienceRanges}
                initValue={jobs?.experienceRange}
              />
              <SearchSelect
                label="Lĩnh vực"
                options={fields}
                initValue={jobs?.field}
              />
              <SearchSelect
                label="Ngành nghề"
                options={majors}
                initValue={jobs?.major}
              />
              <NormalSelect
                label="Chế độ làm việc"
                options={workModes}
                initValue={jobs?.workMode}
              />
            </div>
            <div className="mt-10">
              <TextHeading title="Mô tả công việc" borderStart small />
              <div className="mt-2">
                <Editor
                  apiKey="rx76hjl3edecutx7ny0rxd59u482ut6k660pxq6uomzeowpg"
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  initialValue={jobs?.description}
                  init={{
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

            <div className="mt-10">
              <TextHeading title="Yêu cầu công việc" borderStart small />
              <div className="mt-2">
                <Editor
                  initialValue={jobs?.requirement}
                  apiKey="rx76hjl3edecutx7ny0rxd59u482ut6k660pxq6uomzeowpg"
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  init={{
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

            <div className="mt-10">
              <TextHeading title="Đãi ngộ" borderStart small />
              <div className="mt-2">
                <Editor
                  initialValue={jobs?.benefit}
                  apiKey="rx76hjl3edecutx7ny0rxd59u482ut6k660pxq6uomzeowpg"
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  init={{
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
          </form>
        </ScrollModalContainer>
        <div className="flex gap-4 my-10 justify-end px-4">
          <Button variant="outlined" color="primary">
            Huỷ
          </Button>
          <Button variant="contained" color="primary">
            Lưu thay đổi
          </Button>
        </div>
      </ModalContentContainer>
    </ModalBackdrop>
  );
}
