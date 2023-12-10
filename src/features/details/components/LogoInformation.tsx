type LogoInformationProps = {
  icon?: React.ReactNode;
  label?: string;
  content?: string;
};

export default function LogoInformation(props: LogoInformationProps) {
  return (
    <div className="flex items-center gap-3 ">
      <div className="flex items-center justify-center rounded-full bg-primary-500 p-2 text-white">
        {props.icon}
      </div>
      <div className="flex flex-col">
        <span className="text-sm text-gray-400">{props.label}</span>
        <span className="text-sm text-gray-400 font-semibold">
          {props.content}
        </span>
      </div>
    </div>
  );
}
