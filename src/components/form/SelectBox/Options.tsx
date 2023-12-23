import { Option } from "@data/interface";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

type OptionProps = {
  options?: Option[];
  open: boolean;
  search?: boolean;
  onSelect: (option: Option) => void;
};

export default function Options({
  options,
  open,
  onSelect,
  search,
}: OptionProps) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [filteredOptions, setFilteredOptions] = useState<Option[] | undefined>(
    options
  );

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchInput = e.target.value.toLowerCase();
    const filtered = options?.filter((option) =>
      option.name.toLowerCase().includes(searchInput)
    );
    setFilteredOptions(filtered);
    setSearchValue(e.target.value);
  };

  const onClickHandler = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const selectedValue = e.currentTarget.getAttribute("value") || "";
    const selectedName = e.currentTarget.textContent || "";
    onSelect({
      value: selectedValue,
      name: selectedName,
    });
  };

  return (
    <ul
      className={`bg-gray-100 overflow-y-auto z-20 ${
        open ? "absolute left-0 right-0 max-h-60 mt-2" : "max-h-0"
      }`}
    >
      {search && (
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
  );
}
