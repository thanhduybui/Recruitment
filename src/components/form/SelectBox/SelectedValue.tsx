import { Option } from "@data/interface";

type SelectedValueProps = {
  value: Option;
  bold?: boolean;
};

export default function SelectedValue({ value, bold }: SelectedValueProps) {
  return (
    <span
      className={`overflow-hidden whitespace-nowrap text-gray-400 ${
        bold ? "font-semibold" : ""
      }`}
      id={value.id}
    >
      {value.name}
    </span>
  );
}
