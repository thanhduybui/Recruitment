type ModalContentContainerProps = {
  children: React.ReactNode;
  sm?: boolean;
};

export default function ModalContentContainer({
  children,
}: ModalContentContainerProps) {
  return (
    <div
      className={`bg-white p-4 rounded-lg md:w-3/5  shadow-sm flex flex-col gap-4 
      }`}
    >
      {children}
    </div>
  );
}
