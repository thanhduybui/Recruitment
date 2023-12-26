type InfoContainerProps = {
  children: React.ReactNode;
};

export default function InfoContainer({ children }: InfoContainerProps) {
  return (
    <div className="w-4/5 lg:w-3/4 m-auto flex flex-col gap-4 mt-8">
      {children}
    </div>
  );
}
