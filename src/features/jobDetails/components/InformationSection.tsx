import { TextHeading } from "@components/heading";

type InformationSectionProps = {
  header?: string;
  Htmlcontent?: React.ReactNode;
  html?: boolean;
  textContent?: string;
};

export default function InformationSection(props: InformationSectionProps) {
  return (
    <div className="py-4">
      <TextHeading small={true} title={props.header}></TextHeading>
      <div className={`${!props.html ? "text-sm mt-2" : ""}`}>
        {props.html ? props.Htmlcontent : props.textContent}
      </div>
    </div>
  );
}
