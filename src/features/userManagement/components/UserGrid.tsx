type UserGridProps = {
  children: React.ReactNode;
};
export default function UserGrid({ children }: UserGridProps) {
  return <div className="flex gap-2">{children}</div>;
}
