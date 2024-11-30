import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

interface SidebarItemProps {
  item: {
    id: number;
    name: string;
    icon?: React.ElementType;
    path: string;
  };
}

const SidebarItem = ({ item }: SidebarItemProps) => {
  return (
    <Link href={item.path}>
      <div
        key={item.id}
        className="flex items-center justify-between p-3 my-3 bg-gray-100 hover:bg-gray-200 relative group transition-all cursor-pointer"
      >
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="flex items-center text-black">
          {item.icon && <item.icon className="text-primary h-5 w-5 mr-2" />}
          <span className="text-sm font-medium">{item.name}</span>
        </div>
        <div className="flex items-center text-pink-500 hover:text-pink-600 transition-colors">
          <ArrowRightIcon className="ml-1 h-5 w-5" />
        </div>
      </div>
    </Link>
  );
};

export default SidebarItem;
