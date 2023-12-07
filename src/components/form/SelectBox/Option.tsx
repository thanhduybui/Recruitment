type OptionProps = {
  value: string;
  name: string;
};
export default function Option(props: OptionProps) {
  return (
    <li
      className="p-2 text-sm hover:bg-primary-500 hover:text-white transition duration-100"
      value={props.value}
    >
      {props.name}
    </li>
  );
}
