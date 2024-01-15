import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState, useRef, useEffect } from "react";
import { CustomFormControlLabel } from "..";
import { Option } from "@data/interface";
import Options from "./Options";
import SelectedValue from "./SelectedValue";

type SearchSelectProps = {
  startIcon?: React.ReactNode;
  options: Option[];
  initValue?: Option;
  small?: boolean;
  label?: string;
  required?: boolean;
  bold?: boolean;
  id?: string;
  onSelect?: (option: Option) => void;
};

export default function SearchSelect(props: SearchSelectProps) {
  const [open, setOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  let choseOption: Option | undefined;

  if (props.initValue) {
    choseOption = props.options.find(
      (option) => option.id === props.initValue?.id
    );
  }

  const [selected, setSelected] = useState({
    id: choseOption?.id,
    name: choseOption?.name,
  });

  const handleClickOutside = (e: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  const selectValueHandler = (option: Option) => {
    setSelected(option);
    props.onSelect && props.onSelect(option);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={selectRef} className={`relative font-medium`}>
      {props.label && (
        <CustomFormControlLabel
          htmlFor={props.id}
          label={props.label}
          strict={props.required}
        />
      )}
      <div
        className={`bg-white w-full ${
          props.small ? "p-1 text-xs" : "text-sm p-2"
        }  flex items-center box-shadow border-2
       border-gray-150 rounded-md  overflow-hidden ${
         open ? "border-primary-600 box-shadow inset" : ""
       }`}
        onClick={() => setOpen(!open)}
      >
        {props.startIcon && (
          <div className="text-primary-500">{props.startIcon}</div>
        )}

        <SelectedValue value={selected as Option} bold={props.bold} />

        <ArrowDropDownIcon color="primary" sx={{ marginLeft: "auto" }} />
      </div>

      <Options
        options={props.options}
        open={open}
        onSelect={selectValueHandler}
        search
      />
    </div>
  );
}
