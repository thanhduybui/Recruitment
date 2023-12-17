interface FormWrapperProps {
  children?: React.ReactNode;
  horizontal?: boolean;
}

export default function FormWrapper({
  children,
  horizontal,
}: FormWrapperProps) {
  return (
    <form
      className={`flex flex-col gap-4  m-auto mb-8 ${
        horizontal ? "w-full" : "w-full md:w-3/4 lg:w-2/4"
      }`}
    >
      {children}
    </form>
  );
}
