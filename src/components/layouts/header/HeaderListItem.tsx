type HeaderListItemProps = {
  children?: React.ReactNode;
  name: string;
};

export default function HeaderListItem(props: HeaderListItemProps) {
  return (
    <li>
      <a className="text-md font-semibold text-gray-400">{props.name}</a>
    </li>
  );
}
