import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState, useRef, useEffect } from "react";
import { FormControlLabel } from "..";
import SearchIcon from "@mui/icons-material/Search";
import Chip from "@mui/material/Chip";
import { Category } from "@data/api";

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
  strict?: boolean;
  id?: string;
  search?: boolean;
  chip?: boolean;
  black?: boolean;
};

export default function Select(props: SelectProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({
    value: props.initValue?.value,
    name: props.initValue?.name,
  });
  const [chosenSkills, setChosenSkills] = useState<Category[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [filteredOptions, setFilteredOptions] = useState<Option[] | undefined>(
    props.options
  );
  const selectRef = useRef<HTMLDivElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchInput = e.target.value.toLowerCase();
    const filtered = props.options?.filter((option) =>
      option.name.toLowerCase().includes(searchInput)
    );

    setFilteredOptions(filtered); // Cập nhật bằng filtered hoặc props.options nếu không có filtered

    setSearchValue(e.target.value);
  };

  const onClickHandler = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const selectedValue = e.currentTarget.getAttribute("value") || "";
    const selectedName = e.currentTarget.textContent || "";
    setSelected({
      value: selectedValue,
      name: selectedName,
    });

    if (!props.chip || !props.search) {
      return;
    }

    if (chosenSkills.find((skill) => skill.value === selectedValue)) {
      return;
    }

    const updatedChosenSkills = [
      ...chosenSkills,
      {
        value: selectedValue,
        name: selectedName,
      },
    ];

    setChosenSkills(updatedChosenSkills);
    setOpen(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  const handleDelete = (e: React.MouseEvent, value: string) => {
    e.stopPropagation();
    const selectedValue = e.currentTarget.getAttribute("value") || "";
    const selectedName = e.currentTarget.textContent || "";
    const updatedChosenSkills = chosenSkills.filter(
      (skill) => skill.value !== value
    );

    const updatedOptions = [
      ...filteredOptions!,
      {
        value: selectedValue,
        name: selectedName,
      },
    ];
    setFilteredOptions(updatedOptions);
    setChosenSkills(updatedChosenSkills);
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
        <FormControlLabel
          htmlFor={props.id}
          label={props.label}
          strict={props.strict}
        />
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
        <div
          className={`flex items-center overflow-x-auto ${
            props.chip ? "gap-1" : ""
          }`}
        >
          {props.startIcon && <div>{props.startIcon}</div>}
          {!props.chip && (
            <span
              className={`font-semibold overflow-hidden whitespace-nowrap ${
                props.black ? "text-gray-600" : "text-primary-500"
              }`}
              id={selected.value}
            >
              {selected.name}
            </span>
          )}

          {props.chip &&
            chosenSkills.map((skill) => (
              <Chip
                color="primary"
                variant="filled"
                label={skill.name}
                key={skill.value}
                onDelete={(e) => handleDelete(e, skill.value)}
              />
            ))}
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
        {props.search && (
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
        )}
        {props.search &&
          props.chip &&
          filteredOptions &&
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

        {filteredOptions &&
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
          >
            Không tìm thấy kết quả
          </li>
        )}
      </ul>
    </div>
  );
}
