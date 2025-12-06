import { CirclePlus, LucideProps, List, NotebookPen } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
export interface INav {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  link: string;
  subNav?: INav[];
}

export const navItems: INav[] = [
  {
    icon: List,
    link: "/list",
  },
  {
    icon: CirclePlus,
    link: "/add",
  },
  {
    icon: NotebookPen,
    link: "/study",
  },
];
