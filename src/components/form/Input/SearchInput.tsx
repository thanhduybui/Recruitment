import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

type SearchInputProps = {
  styles?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function SearchInput(props: SearchInputProps) {
  return (
    <div className={`relative ${props.styles}`}>
      <input
        onChange={props.onChange}
        className={`transition duration-75 h-11 w-full text-gray-300 text-sm border-2 border-gray-150 
    rounded-md outline-none focus:border-primary-600 pl-7 pr-2 py-2 placeholder:text-gray-200 placeholder:text-sm 
    focus:outline-none focus:box-shadow focus:inset`}
        placeholder={props.placeholder}
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
        <SearchOutlinedIcon color="primary" />
      </div>
    </div>
  );
}
