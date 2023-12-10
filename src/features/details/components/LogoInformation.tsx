import { Tooltip } from "@mui/material";

type LogoInformationProps = {
  icon?: React.ReactNode;
  label?: string;
  content?: string;
  small?: boolean;
};

export default function LogoInformation(props: LogoInformationProps) {
  return (
    <div className="flex items-center gap-3 ">
      <div
        className={`flex items-center justify-center  ${
          props.small
            ? "text-sm text-gray-200"
            : "rounded-full bg-primary-500 p-2 text-white"
        }`}
      >
        {props.icon}
      </div>
      <div
        className={`flex  ${
          props.small
            ? "flex-row gap-2 items-center text-xs"
            : "flex-col text-sm"
        }`}
      >
        <span className="text-gray-400 flex-none">{props.label}</span>
        {!props.small && (
          <span className="text-gray-400 font-semibold flex-1 overflow-ellipsis">
            {props.content}
          </span>
        )}
        {props.small && (
          <Tooltip title={props.content} placement="top">
            <span className="text-gray-400 font-semibold flex-1 overflow-ellipsis">
              {props.content}
            </span>
          </Tooltip>
        )}
      </div>
    </div>
  );
}
