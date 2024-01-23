import { FileWithPath, useDropzone } from "react-dropzone";
import { useMemo, CSSProperties } from "react";
import { FormControlLabel } from "@components/form/FormUI";
import { Avatar, Button, Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

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
  exts?: string[];
  isPapers?: boolean;
  onSelectFile: (file: FileWithPath | null) => void;
};

export default function FileDropZone(props: FileDropZoneProps) {
  const { label, description, onSelectFile, isPapers } = props;
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    open,
    isDragReject,
  } = useDropzone({
    noClick: true,
    noKeyboard: true,
    accept: {
      "image/*": props.exts || [".png", ".jpg", ".jpeg"],
    },
    onDrop: (files) => onSelectFile(files[0]),
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

  const renderFiles = () => {
    if (isPapers) {
      return acceptedFiles.map((file: FileWithPath) => (
        <p
          key={file.path}
          className="text-sm text-primary-600 font-thin bg-gray-100 w-full py-2 px-4"
        >
          {file.path} - {file.size} bytes
        </p>
      ));
    } else {
      return (
        <Avatar
          src={URL.createObjectURL(acceptedFiles[0])}
          sx={{ width: "200px", height: "200px" }}
        />
      );
    }
  };

  return (
    <section className="w-full max-w-[700px] mx-auto">
      {label && <FormControlLabel label={label} />}
      <div {...getRootProps({ style })} className="min-h-[150px] m-auto">
        <input {...getInputProps()} />
        {acceptedFiles.length !== 0 && (
          <div className="m-auto w-full flex flex-col items-center gap-2">
            {renderFiles()}
          </div>
        )}
        {acceptedFiles.length === 0 && (
          <Button
            onClick={open}
            color="primary"
            variant="outlined"
            sx={{ textTransform: "none", margin: "auto" }}
            size="small"
          >
            Tải lên
          </Button>
        )}
        {acceptedFiles.length !== 0 && (
          <Tooltip title="Loại bỏ file">
            <IconButton onClick={open}>
              <HighlightOffIcon color="error" />
            </IconButton>
          </Tooltip>
        )}
      </div>
      <p className="text-xs text-gray-200 my-2">{description}</p>
    </section>
  );
}
