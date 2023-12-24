import { Typography, Row, Col } from "antd";

const { Title } = Typography;

interface TasksProps {
  notes: object;
}

const Tasks: React.FC<TasksProps> = ({ notes }) => {
  const firstTenNotes = Object.values(notes).slice(0, 10).flat();
  return (
    <>
      <Title level={2}>Your upcoming tasks: </Title>
      {firstTenNotes.map((note: string, index: number) => (
        <div key={index} style={{ color: "green", fontSize: 10 }}>
          {note}
        </div>
      ))}
    </>
  );
};

export { Tasks };
