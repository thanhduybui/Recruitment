type RightAsideLayoutProps = {
  main?: React.ReactNode;
  aside?: React.ReactNode;
};

export default function RightAsideLayout(props: RightAsideLayoutProps) {
  return (
    <>
      <div className="job-card w-2/3 flex-1 overflow-y-auto bg-white rounded-md p-5">
        {props.main}
      </div>
      <aside className="w-1/3 px-4 flex-none sticky top-0 bg-white rounded-md h-fit py-3">
        {props.aside}
      </aside>
    </>
  );
}
