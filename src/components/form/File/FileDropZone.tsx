import { FileWithPath, useDropzone } from "react-dropzone";
import { useMemo, CSSProperties } from "react";
import FormControlLabel from "../FormUI/FormControlLabel";
import { Avatar } from "@mui/material";

const baseStyle: CSSProperties = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
  height: "100%",
};

const focusedStyle: CSSProperties = {
  borderColor: "#2196f3",
};

const acceptStyle: CSSProperties = {
  borderColor: "#00e676",
};

const rejectStyle: CSSProperties = {
  borderColor: "#ff1744",
};

type FileDropZoneProps = {
  label?: string;
  content?: string;
  description?: string;
  onSelectFile: (file: FileWithPath) => void;
};

export default function FileDropZone(props: FileDropZoneProps) {
  const { label, content, description, onSelectFile } = props;
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: {
      "image/*": [".jpeg", ".png", ".jpg"],
    },
    onDrop: (file) => onSelectFile(file[0]),
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  const files = acceptedFiles.map((file: FileWithPath) => (
    <li key={file.path} className="text-sm text-primary-600 font-thin">
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="w-full">
      {label && <FormControlLabel></FormControlLabel>}
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        {files.length !== 0 && (
          <div className="m-auto flex flex-col items-center gap-2">
            <Avatar
              src={URL.createObjectURL(acceptedFiles[0])}
              sx={{ width: "200px", height: "200px" }}
            />
            <p className="text-sm text-gray-200 m-auto px-8 font-semibold hover:cursor-pointer">
              Click để loại bỏ file đã chọn
            </p>
          </div>
        )}
        {files.length === 0 && (
          <p className="text-sm text-gray-200 m-auto px-8 font-semibold hover:cursor-pointer">
            {content}
          </p>
        )}
      </div>{" "}
      <p className="text-xs text-gray-200 my-2">{description}</p>
    </section>
  );
}
