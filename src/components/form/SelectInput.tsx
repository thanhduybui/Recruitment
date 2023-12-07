import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

type SelectInputProps = {
  defaultValue: string;
  options: string[];
  startIcon?: React.ReactNode;
  styles: string;
};

const SelectInput = (props: SelectInputProps) => {
  return (
    <div className={`relative ${props.styles}`}>
      <select
        className={`transition duration-75 w-full text-gray-300 text-sm border-2 border-gray-150 
        rounded-md outline-none focus:border-primary-600 pl-7 pr-8 py-2 placeholder:text-gray-200 
        placeholder:text-sm focus:outline-none focus:box-shadow focus:inset appearance-none`}
      >
        <option value="default">{props.defaultValue}</option>
        {props.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
        {props.startIcon}
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <ArrowDropDownIcon color="primary" />
      </div>
    </div>
  );
};

export default SelectInput;
