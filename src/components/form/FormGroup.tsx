type FormGroupProps = {
  children: React.ReactNode;
};

export default function FormGroup(props: FormGroupProps) {
  return (
    <div className="px-6 flex flex-col pt-8 items-center gap-6">
      {props.children}
    </div>
  );
}
