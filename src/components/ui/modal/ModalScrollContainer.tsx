type ModalScrollContainerProps = {
  children: React.ReactNode;
  wide?: boolean;
};

export default function ModalScrollContainer({
  children,
  wide = false,
}: ModalScrollContainerProps) {
  return (
    <div
      className={`m-auto max-h-[700px] overflow-y-scroll mt-5 ${
        wide ? "w-full" : "w-3/4"
      }`}
    >
      {children}
    </div>
  );
}
