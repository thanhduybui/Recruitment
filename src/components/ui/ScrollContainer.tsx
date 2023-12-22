type ScrollContainerProps = {
  children: React.ReactNode;
};

export default function ScrollContainer({ children }: ScrollContainerProps) {
  return (
    // <div className="h-screen overflow-y-scroll border-2 border-gray-100 rounded-md">
    //   {children}
    // </div>
    <div>{children}</div>
  );
}
