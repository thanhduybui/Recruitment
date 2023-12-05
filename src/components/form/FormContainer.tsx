type FormContainerProps = {
  children?: React.ReactNode;
};

export default function FormContainer(props: FormContainerProps) {
  return (
    <form className="m-auto w-full md:w-3/5 p-4 pt-20">{props.children}</form>
  );
}
