import React from "react";

type JobCardContainerProps = {
  children: React.ReactNode;
};
export default function JobCardContainer(props: JobCardContainerProps) {
  return (
    <div className="transiton duration-75 max-h-[calc(100vh-200px)] overflow-y-auto flex flex-col gap-3 scrollbar-hidden bg-white">
      {props.children}
    </div>
  );
}
