type JobTitleProps = {
  title?: string;
  borderStart?: boolean;
  small?: boolean;
};

export default function JobTitle(props: JobTitleProps) {
  return (
    <h1
      className={`tracking-wider text-lg font-semibold text-gray-400 ${
        props.borderStart ? "border-l-8 border-primary-600 pl-2" : ""
      }  ${props.small ? "text-sm" : ""}`}
    >
      {props.title}
    </h1>
  );
}
