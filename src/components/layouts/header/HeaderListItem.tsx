type HeaderListItemProps = {
  children?: React.ReactNode;
  name: string;
};

export default function HeaderListItem(props: HeaderListItemProps) {
  return (
    <li>
      <a className=" transition-all duration-100 text-md font-semibold text-gray-400 hover:text-primary-500 cursor-pointer">
        {props.name}
      </a>
    </li>
  );
}
