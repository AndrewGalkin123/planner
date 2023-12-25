import { Typography, Row, Col, Flex } from "antd";

const { Title } = Typography;

interface TasksProps {
  notes: object;
}

const Tasks: React.FC<TasksProps> = ({ notes }) => {
  const sortedNotes = Object.fromEntries(
    Object.entries(notes).sort(([a], [b]) => a.localeCompare(b))
  );

  const uniqueNotes = new Set();
  const firstTenNotes = [];

  for (const values of Object.values(sortedNotes)) {
    for (const note of values) {
      if (uniqueNotes.size < 10 && !uniqueNotes.has(note)) {
        uniqueNotes.add(note);
        firstTenNotes.push(note);
      }
    }
    if (uniqueNotes.size >= 10) {
      break;
    }
  }

  return (
    <Flex style={{ marginBottom: "50px" }}>
      <Title level={2}>Your upcoming tasks: </Title>

      {firstTenNotes.map((note: string, index: number) => (
        <Flex key={index} className="upcoming-note">
          {note}
        </Flex>
      ))}
    </Flex>
  );
};

export { Tasks };
