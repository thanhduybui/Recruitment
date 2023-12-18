import { FormControlLabel } from "..";

type TextInputProps = {
  styles?: string;
  placeholder?: string;
  defaultValue?: string;
  id?: string;
  disabled?: boolean;
  label?: string;
  type?: string;
  labelBold?: boolean;
  strict?: boolean;
};

export default function TextInput(props: TextInputProps) {
  return (
    <div>
      {props.label && (
        <FormControlLabel
          label={props.label}
          htmlFor={props.id}
          bold={props.labelBold}
          strict={props.strict}
        />
      )}
      <input
        type={props.type}
        id={props.id}
        disabled={props.disabled}
        defaultValue={props.defaultValue}
        className={`transition duration-75 w-full ${
          props.defaultValue ? "text-gray-200" : "text-gray-300"
        } text-sm border-2 border-gray-150 
    rounded-md outline-none focus:border-primary-600 px-3 py-2 placeholder:text-gray-200 placeholder:text-sm 
    focus:outline-none focus:box-shadow focus:inset ${props.styles}`}
        placeholder={props.placeholder}
      />
    </div>
  );
}
