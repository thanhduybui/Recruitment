type InformationRowProps = {
  label?: string;
  value?: string;
};

export default function InformationRow(props: InformationRowProps) {
  const { label, value } = props;
  return (
    <div className="flex items-center gap-2">
      <span className="font-semibold text-sm">{label + ":"}</span>
      <span className="text-sm">{value}</span>
    </div>
  );
}
