import {
  TextInput,
  Textarea,
  NormalSelect,
  SearchSelect,
} from "@components/form";
import { MainSectionContainer } from "@components/ui";
import { Editor } from "@tinymce/tinymce-react";
import { useRef, useState } from "react";
import { majors } from "@data/api";
import { Editor as TinyMCEEditor } from "tinymce";
import { TextHeading } from "@components/heading";
import Button from "@mui/material/Button";
import { useRouteLoaderData } from "react-router-dom";
import { CompanyInfo, Option } from "@data/interface";
import api from "@utils/axios";
import { getAccessToken } from "@utils/authUtils";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { AxiosError } from "axios";

export default function AddJobMain() {
  const descriptionRef = useRef<TinyMCEEditor | null>(null);
  const benefitRef = useRef<TinyMCEEditor | null>(null);
  const requirementRef = useRef<TinyMCEEditor | null>(null);
  const jobNameRef = useRef<HTMLTextAreaElement>(null);
  const workLocationRef = useRef<HTMLTextAreaElement>(null);
  const workTimeRef = useRef<HTMLTextAreaElement>(null);
  const [salary, setSalary] = useState("0");
  const [experience, setExperience] = useState("0");
  const [position, setPosition] = useState("0");
  const [field, setField] = useState("0");
  const [major, setMajor] = useState("0");
  const [wordMode, setWorkMode] = useState("0");
  const [slot, setSlot] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");

  const data = useRouteLoaderData("recruiterInfo");

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

  const onAddJobHandler = async () => {
    const jobData = {
      title: jobNameRef.current?.value,
      description: descriptionRef.current?.getContent(),
      requirement: requirementRef.current?.getContent(),
      benefit: benefitRef.current?.getContent(),
      salary_id: salary,
      experience_id: experience,
      position_id: position,
      field_id: field,
      major_id: major,
      work_mode_id: wordMode,
      slots: +slot,
      company_id: companyInfo.id,
      work_time: workTimeRef.current?.value,
      work_location: workLocationRef.current?.value,
      deadline: deadline,
    };

    console.log(jobData);

    try {
      const res = await api.post("/jobs", jobData, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      });
      toast.success(res.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      const typedError = error as AxiosError;
      const data = typedError.response?.data as {
        message: string;
        status: number;
      };
      toast.error(data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <MainSectionContainer heading="Tạo bài tuyển dụng mới">
        <form className="p-4">
          <TextHeading title="Thông tin chung" borderStart small />
          <div className="flex gap-4 mt-3">
            <div className="flex-1 w-3/5 flex flex-col gap-4">
              <Textarea label="Tên công việc" ref={jobNameRef} required />
              <Textarea
                label="Địa điểm làm việc"
                ref={workLocationRef}
                required
              />
              <Textarea label="Thời gian làm việc" ref={workTimeRef} required />
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
              defaultValue={slot}
              inputChange={(e) => setSlot(e.target.value)}
            />
            <TextInput
              label="Hạn ứng tuyển"
              type="datetime-local"
              inputChange={(e) => setDeadline(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-3 mt-5 gap-4">
            <NormalSelect
              label="Mức lương"
              options={salaryRanges}
              initValue={{ id: "0", name: "Chọn mức lương" }}
              onSelect={(option) => setSalary(option.id)}
            />
            <NormalSelect
              label="Mức kinh nghiệm"
              options={experienceRanges}
              initValue={{ id: "0", name: "Chọn kinh nghiệm" }}
              onSelect={(option) => setExperience(option.id)}
            />
            <SearchSelect
              label="Lĩnh vực"
              options={fields}
              initValue={{ id: "0", name: "Chọn lĩnh vực" }}
              onSelect={(option) => setField(option.id)}
            />
            <SearchSelect
              label="Ngành nghề"
              options={majors}
              initValue={{ id: "0", name: "Chọn chuyên môn" }}
              onSelect={(option) => setMajor(option.id)}
            />
            <NormalSelect
              label="Chức vụ"
              options={positions}
              initValue={{ id: "0", name: "Chọn vị trí" }}
              onSelect={(option) => setPosition(option.id)}
            />
            <NormalSelect
              label="Hình thức làm việc"
              options={workModes}
              initValue={{ id: "0", name: "Chọn hình thức" }}
              onSelect={(option) => setWorkMode(option.id)}
            />
          </div>
          <div className="mt-10">
            <TextHeading title="Mô tả công việc" borderStart small />
            <div className="mt-2">
              <Editor
                apiKey="rx76hjl3edecutx7ny0rxd59u482ut6k660pxq6uomzeowpg"
                onInit={(evt, editor) => (descriptionRef.current = editor)}
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
                onInit={(evt, editor) => (requirementRef.current = editor)}
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
                onInit={(evt, editor) => (benefitRef.current = editor)}
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
        <div className="flex justify-end my-10 gap-4">
          <Button variant="outlined" color="primary" size="large">
            Huỷ thay đổi
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={onAddJobHandler}
          >
            Thêm
          </Button>
        </div>
      </MainSectionContainer>
    </>
  );
}
