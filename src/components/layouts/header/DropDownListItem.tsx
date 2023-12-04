import { DropDownMenu } from "@components/layouts";
import { useState } from "react";
type HeaderListItemProps = {
  children?: React.ReactNode;
  name: string;
  data?: string[];
};

export default function HeaderListItem(props: HeaderListItemProps) {
  const [showItem, setShowItem] = useState(false);

  const displayItem = (
    <div
      className={`${
        showItem ? "" : "hidden"
      } lg:absolute w-48 top-full lg:left-0 lg:right-0 rounded-sm lg:bg-gray-100 ">`}
    >
      <DropDownMenu items={props.data} />
    </div>
  );

  return (
    <li
      className="lg:relative border-primary-400"
      onMouseOver={() => setShowItem(true)}
      onMouseLeave={() => setShowItem(false)}
    >
      <a
        className={`transition-all text-center block duration-100 text-md font-semibold text-gray-400 px-5 py-2
    ${showItem ? "bg-gray-100  text-primary-500" : ""} cursor-pointer`}
      >
        {props.name}
      </a>
      {props.data && displayItem}
    </li>
  );
}
