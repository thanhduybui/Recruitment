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
import { useRef, useState } from "react";
import { Editor as TinyMCEEditor } from "tinymce";
import FormControlLabel from "@components/form/FormUI/FormControlLabel";
import { Button } from "@mui/material";
import { CompanyInfo } from "@data/interface";
import { useDispatch } from "react-redux";
import { closeModal } from "@store/modal";
import api from "@utils/axios";
import { getAccessToken } from "@utils/authUtils";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { toastTifyOptions } from "@utils/toastifyUtils";
import { editor_key } from "@config/key";

type UpdateCompanyModalProps = {
  companyInfo: CompanyInfo;
};

export default function UpdateCompanyModal({
  companyInfo,
}: UpdateCompanyModalProps) {
  const editorRef = useRef<TinyMCEEditor | null>(null);
  const dispatch = useDispatch();
  const [companyName, setCompanyName] = useState(companyInfo.name);
  const [companyAddress, setCompanyAddress] = useState(companyInfo.address);
  const [companyEmail, setCompanyEmail] = useState(companyInfo.email);
  const [companyPhone, setCompanyPhone] = useState(companyInfo.phone);
  const [companyScale, setCompanyScale] = useState(companyInfo.scale);
  const [companyWebUrl, setCompanyWebUrl] = useState(companyInfo.webUrl);
  const onCloseHandler = () => {
    dispatch(closeModal({ modalName: modalName.UPDATE_COMPANY_MODAL }));
  };

  const onClickHandler = async () => {
    try {
      const res = await api.put(
        "/companies/profile",
        {
          name: companyName,
          address: companyAddress,
          email: companyEmail,
          phone: companyPhone,
          scale: companyScale,
          webUrl: companyWebUrl,
          description: editorRef.current?.getContent(),
        },
        {
          headers: { Authorization: `Bearer ${getAccessToken()}` },
        }
      );

      dispatch(closeModal({ modalName: modalName.UPDATE_COMPANY_MODAL }));
      toast.success(res.data.message, toastTifyOptions);
    } catch (error) {
      const typedError = error as AxiosError;
      const data = typedError.response?.data as {
        message: string;
        status: number;
      };
      const errorMesage = data.message || "Lỗi cập nhật";
      toast.error(errorMesage, toastTifyOptions);
    }
  };

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
              onChange={(e) => {
                setCompanyName(e.target.value);
              }}
              defaultValue={companyInfo.name}
            ></Textarea>
            <Textarea
              label="Địa chỉ"
              required
              labelBold
              onChange={(e) => {
                setCompanyAddress(e.target.value);
              }}
              defaultValue={companyInfo.address}
            ></Textarea>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full">
                <TextInput
                  label="Email liên hệ"
                  labelBold
                  inputChange={(e) => {
                    setCompanyEmail(e.target.value);
                  }}
                  type="email"
                  name={InputConstants.EMAIL}
                  defaultValue={companyInfo.email}
                ></TextInput>
              </div>
              <div className="w-full">
                <TextInput
                  label="Hotline"
                  labelBold
                  type="phone"
                  inputChange={(e) => {
                    setCompanyPhone(e.target.value);
                  }}
                  name={InputConstants.PHONE_NUMBER}
                  defaultValue={companyInfo.phone}
                ></TextInput>
              </div>
              <div className="w-full">
                <TextInput
                  label="Quy mô công ty"
                  labelBold
                  inputChange={(e) => {
                    setCompanyScale(e.target.value);
                  }}
                  type="text"
                  defaultValue={companyInfo.scale}
                ></TextInput>
              </div>
            </div>
            <TextInput
              label="Địa chỉ web"
              labelBold
              type="text"
              inputChange={(e) => {
                setCompanyWebUrl(e.target.value);
              }}
              defaultValue={companyInfo.webUrl}
            ></TextInput>
            <div className="flex flex-col gap-1">
              <FormControlLabel label="Mô tả chi tiết" bold />
              <Editor
                initialValue={companyInfo.description}
                apiKey={editor_key}
                onInit={(_, editor) => (editorRef.current = editor)}
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
            onClick={onCloseHandler}
          >
            Huỷ
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ textTransform: "none" }}
            onClick={onClickHandler}
          >
            Cập nhật
          </Button>
        </div>
      </ModalContentContainer>
    </ModalBackdrop>,
    document.getElementById("modal") as HTMLElement
  );
}
