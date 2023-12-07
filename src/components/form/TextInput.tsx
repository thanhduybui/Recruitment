type TextInputProps = {
  styles?: string;
};

export default function TextInput(props: TextInputProps) {
  return (
    <input
      className={`transition duration-75 text-gray-300 text-sm border-2 border-gray-150 
    rounded-md outline-none focus:border-primary-600 px-3 py-2 placeholder:text-gray-200 placeholder:text-sm 
    focus:outline-none focus:box-shadow focus:inset ${props.styles}`}
      placeholder="Tìm công việc, vị trí..."
    />
  );
}
