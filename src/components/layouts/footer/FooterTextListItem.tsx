type FooterTextListItemProps = {
  content: string;
  key: string;
};

export default function FooterTextListItem(props: FooterTextListItemProps) {
  return (
    <li key={props.key}>
      <span className="text-sm text-gray-200 font-medium">{props.content}</span>
    </li>
  );
}
