type ModalContentContainerProps = {
  children: React.ReactNode;
  sm?: boolean;
};

export default function ModalContentContainer({
  children,
  sm,
}: ModalContentContainerProps) {
  return (
    <div
      className={`bg-white p-4 rounded-lg md:w-3/5 w-1/3 shadow-sm flex flex-col gap-4 ${
        sm ? "lg:w-2/12" : ""
      }`}
    >
      {children}
    </div>
  );
}
