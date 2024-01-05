import { CustomFormControlLabel } from ".";

type TextareaProps = {
  label?: string;
  disabled?: boolean;
  defaultValue?: string;
  required?: boolean;
  labelBold?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function Textarea(props: TextareaProps) {
  return (
    <div className="flex flex-col">
      <CustomFormControlLabel
        label={props.label}
        bold={props.labelBold}
        strict={props.required}
      />
      <textarea
        className={`transition duration-75 w-full text-sm border-2 border-gray-150 rounded-md px-2 py-1 ${
          props.disabled ? "text-gray-200" : "text-gray-300"
        }`}
        disabled={props.disabled}
        value={props.defaultValue}
      />
    </div>
  );
}
