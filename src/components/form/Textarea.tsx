import { forwardRef } from "react";
import { CustomFormControlLabel } from ".";

type TextareaProps = {
  label?: string;
  disabled?: boolean;
  defaultValue?: string;
  required?: boolean;
  labelBold?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    return (
      <div className="flex flex-col">
        <CustomFormControlLabel
          label={props.label}
          bold={props.labelBold}
          strict={props.required}
        />
        <textarea
          ref={ref}
          className={`transition duration-75 w-full text-sm border-2 border-gray-150 rounded-md px-2 py-1 ${
            props.disabled ? "text-gray-200" : "text-gray-300"
          }`}
          disabled={props.disabled}
          defaultValue={props.defaultValue}
          onChange={props.onChange}
        />
      </div>
    );
  }
);

export default Textarea;
