import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState, useRef, useEffect } from "react";

type SelectProps = {
  startIcon?: React.ReactNode;
  options?: { value: string; name: string }[];
  initValue?: { value: string; name: string };
  styles?: string;
};

export default function Select(props: SelectProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({
    value: props.initValue?.value,
    name: props.initValue?.name,
  });

  const selectRef = useRef<HTMLDivElement>(null);

  const onClickHandler = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setSelected({
      value: e.currentTarget.getAttribute("value") || "",
      name: e.currentTarget.textContent || "",
    });
    setOpen(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={selectRef} className={`relative font-medium ${props.styles}`}>
      <div
        className={`bg-white w-full p-2  flex items-center box-shadow border-2 text-sm
       border-gray-150 rounded-md justify-between overflow-hidden ${
         open ? "border-primary-600 box-shadow inset" : ""
       }`}
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center">
          <div>{props.startIcon}</div>
          <span
            className="text-gray-300 overflow-hidden whitespace-nowrap overflow-ellipsis"
            id={selected.value}
          >
            {selected.name}
          </span>
        </div>

        <div>
          <ArrowDropDownIcon color="primary" />
        </div>
      </div>

      <ul
        className={`bg-gray-100 overflow-y-auto  ${
          open ? "absolute left-0 right-0 max-h-60 mt-2" : "max-h-0"
        }`}
      >
        <li
          className="p-2 text-sm hover:bg-primary-500 hover:text-white transition duration-100"
          key={props.initValue?.value}
          value={props.initValue?.value}
          onClick={onClickHandler}
        >
          {props.initValue?.name}
        </li>
        {props.options &&
          props.options.map((option) => (
            <li
              className="p-2 text-sm hover:bg-primary-500 hover:text-white transition duration-100"
              key={option.value}
              value={option.value}
              onClick={onClickHandler}
            >
              {option.name}
            </li>
          ))}
      </ul>
    </div>
  );
}
