import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState, useRef, useEffect } from "react";
import { FormControlLabel } from "..";
import SearchIcon from "@mui/icons-material/Search";

type Option = {
  value: string;
  name: string;
};
type SelectProps = {
  startIcon?: React.ReactNode;
  options?: Option[];
  initValue?: { value: string; name: string };
  styles?: string;
  size?: string;
  label?: string;
  id?: string;
};

export default function Select(props: SelectProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({
    value: props.initValue?.value,
    name: props.initValue?.name,
  });
  const [searchValue, setSearchValue] = useState<string>("");
  const [filteredOptions, setFilteredOptions] = useState<Option[] | undefined>(
    props.options
  );

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    const filtered = props.options?.filter((option) =>
      option.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredOptions(filtered || []);
  };

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
      {props.label && (
        <FormControlLabel htmlFor={props.id} label={props.label} />
      )}
      <div
        className={`bg-white w-full ${
          props.size === "sm" ? "p-1 text-xs" : "text-sm p-2"
        }  flex items-center box-shadow border-2
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
        className={`bg-gray-100 overflow-y-auto z-20 ${
          open ? "absolute left-0 right-0 max-h-60 mt-2" : "max-h-0"
        }`}
      >
        <li className="relative p-1 items-center border-2 border-gray-150 bg-white">
          <input
            type="text"
            className="pl-8 text-sm text-gray-300 border-none bg-transparent focus:outline-none"
            placeholder="Tìm kiếm..."
            onChange={changeHandler}
            value={searchValue}
          />
          <div className="absolute inset-y-0 flex items-center">
            <SearchIcon className="text-gray-300" />
          </div>
        </li>
        {filteredOptions &&
          filteredOptions.length !== 0 &&
          filteredOptions.map((option) => (
            <li
              className="p-2 text-sm hover:bg-primary-500 hover:text-white transition duration-100"
              key={option.value}
              value={option.value}
              onClick={onClickHandler}
            >
              {option.name}
            </li>
          ))}
        {filteredOptions?.length === 0 && (
          <li
            className="p-2 text-sm hover:bg-primary-500 hover:text-white transition duration-100"
            key="-1"
            value="-1"
            onClick={onClickHandler}
          >
            Không tìm thấy kết quả
          </li>
        )}
      </ul>
    </div>
  );
}
