type HeaderListItemProps = {
  children?: React.ReactNode;
  name: string;
};

export default function HeaderListItem(props: HeaderListItemProps) {
  return (
    <li>
      <a
        className=" transition-all duration-100 text-md lg:text-sm
      font-semibold text-gray-300 hover:text-primary-500 cursor-pointer"
      >
        {props.name}
      </a>
    </li>
  );
}
