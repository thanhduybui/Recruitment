type ModalContentContainerProps = {
  children: React.ReactNode;
};

export default function ModalContentContainer({
  children,
}: ModalContentContainerProps) {
  return (
    <div className="bg-white p-4 rounded-lg  w-4/5 md:w-3/4 lg:w-1/3 shadow-sm flex flex-col gap-4">
      {children}
    </div>
  );
}
