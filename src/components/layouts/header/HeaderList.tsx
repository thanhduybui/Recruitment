import React from "react";

type HeaderListProps = {
  children: React.ReactNode;
};

export default function HeaderList(props: HeaderListProps) {
  return (
    <ul className="flex flex-col lg:flex-row items-center gap-4 lg:ml-8">
      {props.children}
    </ul>
  );
}
