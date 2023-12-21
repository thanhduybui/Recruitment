type LeftSidebarLayoutProps = {
  sidebar: React.ReactNode;
  main: React.ReactNode;
};

export default function LeftSidebarLayout({
  sidebar,
  main,
}: LeftSidebarLayoutProps) {
  return (
    <div className="flex bg-gray-50">
      <div className="flex-none lg:w-1/4 pb-8 border-r-2 border-gray-100 h-fit bg-white rounded-l-md">
        {sidebar}
      </div>
      <div className="flex-1 w-3/4 bg-white rounded-r-md rounded-bl-md">
        {main}
      </div>
    </div>
  );
}
