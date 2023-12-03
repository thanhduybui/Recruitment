import { DropDownMenu } from "@components/layouts";
import { useState } from "react";
type HeaderListItemProps = {
  children?: React.ReactNode;
  name: string;
};

export default function HeaderListItem(props: HeaderListItemProps) {
  const [showItem, setShowItem] = useState(false);

  const dropDownItems = (
    <div className="absolute w-48 top-full left-0 right-0 rounded-sm bg-gray-100">
      <DropDownMenu />
    </div>
  );
  return (
    <li
      className="relative"
      onMouseOver={() => setShowItem(true)}
      onMouseLeave={() => setShowItem(false)}
    >
      <a
        className={`transition-all duration-100 text-md font-semibold text-gray-400 px-5 py-2
    ${showItem ? "bg-gray-100  text-primary-500" : ""} cursor-pointer`}
      >
        {props.name}
      </a>

      {showItem && dropDownItems}
    </li>
  );
}
