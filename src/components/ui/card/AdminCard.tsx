type AdminCardProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
  color?: string;
};
export default function AdminCard(props: AdminCardProps) {
  return (
    <div className="rounded-md shadow-md w-full bg-white">
      <div className="flex items-center gap-4 p-4">
        <div className="text-gray-400 p-4 rounded-full bg-primary-200 inline-block">
          {props.icon}
        </div>
        <div className="flex flex-col">
          <div className="text-sm">{props.title}</div>
          <div className="text-2xl font-bold">{props.value}</div>
        </div>
      </div>
    </div>
  );
}
