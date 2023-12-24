import { Breadcrumb } from "antd";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";

interface NavigationProps {
    items: ItemType[]; 
  }

const Navigation: React.FC<NavigationProps> = ({ items }) => {
  return <Breadcrumb style={{fontWeight: "bold", fontSize: "15px"}} items={items} />;
};

export { Navigation };
