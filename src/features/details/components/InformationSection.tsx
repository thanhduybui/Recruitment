import { DetailHeader } from "..";

type InformationSectionProps = {
  header?: string;
  Htmlcontent?: React.ReactNode;
  html?: boolean;
  textContent?: string;
};

export default function InformationSection(props: InformationSectionProps) {
  return (
    <div className="py-4">
      <DetailHeader small={true} title={props.header}></DetailHeader>
      <div className={`${!props.html ? "text-xs px-4 mt-2" : ""}`}>
        {props.html ? props.Htmlcontent : props.textContent}
      </div>
    </div>
  );
}
