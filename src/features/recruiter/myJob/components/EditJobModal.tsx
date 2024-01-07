import {
  ModalBackdrop,
  ModalContentContainer,
  ModalHeader,
  ScrollModalContainer,
} from "@components/ui/modal";
import { modalName } from "@data/constants";
import {
  Textarea,
  NormalSelect,
  SearchSelect,
  CustomFormControlLabel,
  TextInput,
} from "@components/form";
import dayjs, { Dayjs } from "dayjs";
import { Editor } from "@tinymce/tinymce-react";
import { Editor as TinyMCEEditor } from "tinymce";
import { majors } from "@data/api";
import { useRef, useState } from "react";
import { TextHeading } from "@components/heading";
import { Button, FormControlLabel, Switch } from "@mui/material";
import { Option } from "@data/interface";
import { useRouteLoaderData } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store";
import { DesktopDateTimePicker } from "@mui/x-date-pickers/DesktopDateTimePicker";
import { getAccessToken } from "@utils/authUtils";
import api from "@utils/axios";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { closeModal } from "@store/modal";

export default function EditJobModal() {
  const data = useRouteLoaderData("recruiterInfo");
  const jobs = useSelector((state: RootState) => state.jobDetail.jobDetail);
  const dispatch = useDispatch();
  // update data
  const jobTitleRef = useRef<HTMLTextAreaElement>(null);
  const workLocationRef = useRef<HTMLTextAreaElement>(null);
  const workTimeRef = useRef<HTMLTextAreaElement>(null);
  const [field, setField] = useState<Option | undefined>(jobs?.field);
  const [major, setMajor] = useState<Option | undefined>(jobs?.major);
  const [position, setPosition] = useState<Option | undefined>(jobs?.position);
  const [salaryRange, setSalaryRange] = useState<Option | undefined>(
    jobs?.salaryRange
  );
  const [experienceRange, setExperienceRange] = useState<Option | undefined>(
    jobs?.experienceRange
  );
  const [workMode, setWorkMode] = useState<Option | undefined>(jobs?.workMode);
  const descriptionRef = useRef<TinyMCEEditor | null>(null);
  const benefitRef = useRef<TinyMCEEditor | null>(null);
  const requirementRef = useRef<TinyMCEEditor | null>(null);
  const [isHot, setIsHot] = useState(jobs?.isHot);
  const [deadline, setDeadline] = useState<Dayjs | null>(null);

  const { positions, salaryRanges, experienceRanges, fields, workModes } =
    data as {
      positions: Option[];
      salaryRanges: Option[];
      experienceRanges: Option[];
      fields: Option[];
      workModes: Option[];
    };

  const onUpdateHandler = async () => {
    const updateJob = {
      id: jobs?.id,
      title: jobTitleRef.current?.value,
      workLocation: workLocationRef.current?.value,
      workTime: workTimeRef.current?.value,
      field_id: field?.id,
      major_id: major?.id,
      position_id: position?.id,
      salary_id: salaryRange?.id,
      experience_id: experienceRange?.id,
      work_mode_id: workMode?.id,
      description: descriptionRef.current?.getContent(),
      requirement: requirementRef.current?.getContent(),
      benefit: benefitRef.current?.getContent(),
      isHot: isHot,
      deadline: deadline?.format("YYYY-MM-DDTHH:mm:ss"),
    };
    try {
      const res = await api.put(`jobs/${jobs?.id}`, updateJob, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
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
      dispatch(closeModal({ modalName: modalName.EDIT_JOB_MODAL }));
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

  const onCloseModalHanlder = () => {
    dispatch(closeModal({ modalName: modalName.EDIT_JOB_MODAL }));
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
                  ref={jobTitleRef}
                  required
                />
                <Textarea
                  label="Địa điểm làm việc"
                  defaultValue={jobs?.workLocation}
                  ref={workLocationRef}
                  required
                />
                <Textarea
                  label="Thời gian làm việc"
                  defaultValue={jobs?.workTime}
                  ref={workTimeRef}
                  required
                />
              </div>
              <div className="w-2/5">
                <Textarea
                  label="Công ty"
                  defaultValue={jobs?.company.name}
                  disabled
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-3 mt-5 gap-4">
              <div>
                <CustomFormControlLabel label="Hạn ứng tuyển" />
                <DesktopDateTimePicker
                  defaultValue={
                    jobs?.deadline !== null ? dayjs(jobs?.deadline) : null
                  }
                  onChange={(value) => {
                    setDeadline(value);
                  }}
                />
              </div>
              <TextInput
                type="number"
                label="Số lượng"
                defaultValue={jobs?.slots + ""}
              />
              <FormControlLabel
                control={
                  <Switch
                    defaultChecked={jobs?.isHot}
                    onChange={() => setIsHot(!isHot)}
                  />
                }
                label="Việc gấp"
                sx={{ margin: "auto" }}
              />
            </div>
            <div className="grid grid-cols-3 mt-5 gap-4">
              <NormalSelect
                label="Chức vụ"
                options={positions}
                onSelect={(value) => setPosition(value)}
                initValue={jobs?.position}
              />
              <NormalSelect
                label="Mức lương"
                options={salaryRanges}
                onSelect={(value) => setSalaryRange(value)}
                initValue={jobs?.salaryRange}
              />
              <NormalSelect
                label="Mức kinh nghiệm"
                options={experienceRanges}
                onSelect={(value) => setExperienceRange(value)}
                initValue={jobs?.experienceRange}
              />
              <SearchSelect
                label="Lĩnh vực"
                options={fields}
                onSelect={(value) => setField(value)}
                initValue={jobs?.field}
              />
              <SearchSelect
                label="Ngành nghề"
                onSelect={(value) => setMajor(value)}
                options={majors}
                initValue={jobs?.major}
              />
              <NormalSelect
                label="Chế độ làm việc"
                onSelect={(value) => setWorkMode(value)}
                options={workModes}
                initValue={jobs?.workMode}
              />
            </div>
            <div className="mt-10">
              <TextHeading title="Mô tả công việc" borderStart small />
              <div className="mt-2">
                <Editor
                  apiKey="rx76hjl3edecutx7ny0rxd59u482ut6k660pxq6uomzeowpg"
                  onInit={(evt, editor) => (descriptionRef.current = editor)}
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
                  initialValue={jobs?.benefit}
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
        </ScrollModalContainer>
        <div className="flex gap-4 my-10 justify-end px-4">
          <Button
            variant="outlined"
            color="primary"
            onClick={onCloseModalHanlder}
          >
            Đóng
          </Button>
          <Button variant="contained" color="primary" onClick={onUpdateHandler}>
            Lưu thay đổi
          </Button>
        </div>
      </ModalContentContainer>
    </ModalBackdrop>
  );
}
