import { Breadcrumb } from "antd";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";

interface NavigationProps {
    items: ItemType[]; // Замените "string" на фактический тип элементов в массиве
  }

const Navigation: React.FC<NavigationProps> = ({ items }) => {
  return <Breadcrumb style={{fontWeight: "bold"}} items={items} />;
};

export { Navigation };
