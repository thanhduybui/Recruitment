import { TextInput, Textarea } from "@components/form";
import { ScrollContainer } from "@components/ui";
import {
  ModalBackdrop,
  ModalContentContainer,
  ModalHeader,
} from "@components/ui/modal";
import { InputConstants, modalName } from "@data/constants";
import { createPortal } from "react-dom";
import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import { Editor as TinyMCEEditor } from "tinymce";
import FormControlLabel from "@components/form/FormUI/FormControlLabel";
import { Button } from "@mui/material";

export default function UpdateCompanyModal() {
  const editorRef = useRef<TinyMCEEditor | null>(null);
  return createPortal(
    <ModalBackdrop modalName={modalName.UPDATE_COMPANY_MODAL}>
      <ModalContentContainer>
        <ModalHeader
          title="Chỉnh sửa thông tin công ty"
          modalName={modalName.UPDATE_COMPANY_MODAL}
        ></ModalHeader>
        <ScrollContainer>
          <div className="w-4/5 m-auto flex flex-col gap-4">
            <Textarea
              label="Tên công ty"
              required
              labelBold
              defaultValue="Công ty ấy"
            ></Textarea>
            <Textarea
              label="Địa chỉ"
              required
              labelBold
              defaultValue="Tầng 3, Tòa 17T4 Hapulico, số 1 Nguyễn Huy Tưởng, Thanh Xuân, Hà Nội"
            ></Textarea>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full">
                <TextInput
                  label="Email liên hệ"
                  labelBold
                  type="email"
                  name={InputConstants.EMAIL}
                  defaultValue="dtb1742002@gmail.com"
                ></TextInput>
              </div>
              <div className="w-full">
                <TextInput
                  label="Hotline"
                  labelBold
                  type="phone"
                  name={InputConstants.PHONE_NUMBER}
                  defaultValue="0123433738"
                ></TextInput>
              </div>
              <div className="w-full">
                <TextInput
                  label="Quy mô công ty"
                  labelBold
                  type="text"
                  defaultValue="0123433738"
                ></TextInput>
              </div>
            </div>
            <TextInput
              label="Địa chỉ công ty"
              labelBold
              type="text"
              defaultValue="https://www.topcv.vn/cong-ty/cong-ty-cp-cong-nghe-giao-duc-truong-hoc-truc-tuyen-onschool/126682.html"
            ></TextInput>
            <div className="flex flex-col gap-1">
              <FormControlLabel label="Mô tả chi tiết" bold />
              <Editor
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
        </ScrollContainer>
        <div className="flex gap-4 ml-auto my-8">
          <Button
            variant="outlined"
            color="error"
            sx={{ textTransform: "none" }}
          >
            Huỷ
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ textTransform: "none" }}
          >
            Cập nhật
          </Button>
        </div>
      </ModalContentContainer>
    </ModalBackdrop>,
    document.getElementById("modal") as HTMLElement
  );
}
