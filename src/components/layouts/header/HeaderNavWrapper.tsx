type HeaderNavWrapperProps = {
  showNav: boolean;
  children: React.ReactNode;
};

export default function HeaderNavWrapper(props: HeaderNavWrapperProps) {
  const { showNav, children } = props;
  return (
    <nav
      className={`absolute ${
        showNav ? "" : "hidden lg:flex"
      } top-0 z-10 lg:z-0 bg-primary-100 lg:bg-white 
     left-0 lg:relative gap-4 flex flex-col pt-20 lg:pt-0 lg:flex-row  
   lg:justify-between w-full h-screen lg:h-16`}
    >
      {children}
    </nav>
  );
}
