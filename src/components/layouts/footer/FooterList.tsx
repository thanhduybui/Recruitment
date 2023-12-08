type FooterListProps = {
  children?: React.ReactNode;
  name: string;
};
export default function FooterList(props: FooterListProps) {
  return (
    <>
      <h3 className="text-md text-gray-300 font-semibold mb-4">{props.name}</h3>
      <ul className="flex flex-col gap-3">{props.children}</ul>
    </>
  );
}
