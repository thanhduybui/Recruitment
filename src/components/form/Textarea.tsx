import { FormControlLabel } from ".";

type TextareaProps = {
  label?: string;
  disabled?: boolean;
  defaultValue?: string;
};

export default function Textarea(props: TextareaProps) {
  return (
    <div className="flex flex-col">
      <FormControlLabel label={props.label} bold />
      <textarea
        className={`transition duration-75 w-full text-sm border-2 border-gray-150 rounded-md px-2 py-1 ${
          props.disabled ? "text-gray-200" : "text-gray-300"
        }`}
        disabled={props.disabled}
        defaultValue={props.defaultValue}
      />
    </div>
  );
}
