type BackgroundContainerProps = {
  children?: React.ReactNode;
};

export default function BackgroundContainer(props: BackgroundContainerProps) {
  return <div className="bg-gray-50 min-h-screen">{props.children}</div>;
}
