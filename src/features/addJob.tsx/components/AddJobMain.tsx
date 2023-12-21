import {
  TextInput,
  Textarea,
  NormalSelect,
  SearchSelect,
} from "@components/form";
import { MainSectionContainer } from "@components/ui";
import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import {
  salaryRanges,
  expieriences,
  positions,
  fields,
  majors,
} from "@data/api";
import { Editor as TinyMCEEditor } from "tinymce";
import { TextHeading } from "@components/heading";

export default function AddJobMain() {
  const editorRef = useRef<TinyMCEEditor | null>(null);

  return (
    <MainSectionContainer heading="Tạo bài tuyển dụng mới">
      <form className="px-4 mt-5">
        <div className="flex gap-4">
          <div className="flex-1 w-3/5">
            <Textarea label="Tên công việc" required />
          </div>
          <div className="w-2/5">
            <Textarea
              label="Công ty"
              defaultValue="Công ty TNHH Bảo An Ninh Liên Hiệp Quốc Việt Nam Phải Không Đó"
              disabled
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-3 mt-5 gap-4">
          <TextInput label="Số lượng ứng tuyển" type="number" />
          <TextInput label="Hạn ứng tuyển" type="date" />
        </div>
        <div className="grid grid-cols-3 mt-5 gap-4">
          <NormalSelect label="Chức vụ" options={positions} required />
          <NormalSelect label="Mức lương" options={salaryRanges} required />
          <NormalSelect
            label="Mức kinh nghiệm"
            options={expieriences}
            required
          />
          <SearchSelect label="Lĩnh vực" options={fields} required />
          <SearchSelect label="Ngành nghề" options={majors} required />
        </div>

        {/* <div className="mt-5">
          <RadioButtonGroup
            label="Giới tính"
            values={["Nam", "Nữ", "Khác"]}
            sm
          ></RadioButtonGroup>
        </div> */}

        <div className="mt-10">
          <TextHeading title="Mô tả công việc" borderStart small />
          <div className="mt-2">
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

        <div className="mt-10">
          <TextHeading title="Yêu cầu công việc" borderStart small />
          <div className="mt-2">
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

        <div className="mt-10">
          <TextHeading title="Đãi ngộ" borderStart small />
          <div className="mt-2">
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
      </form>
    </MainSectionContainer>
  );
}
