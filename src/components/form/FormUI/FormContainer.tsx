type FormContainerProps = {
  children?: React.ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function FormContainer(props: FormContainerProps) {
  return (
    <form
      className="m-auto w-full md:w-3/5 px-4 py-8 mt-10 bg-white rounded-md"
      onSubmit={props.onSubmit}
    >
      {props.children}
    </form>
  );
}
