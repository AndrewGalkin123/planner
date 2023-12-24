'use client';

import Link from "next/link";
import { Typography } from "antd";

const { Title } = Typography;

const Footer: React.FC = () => {
  return (
    <footer className="container">
      <Title style={{color: "white", fontWeight: "bold", margin: 0}} level={3}>Contacts :</Title>
      <ul>
        <Link target="_blank" href="https://web.telegram.org/k/#@moruuuuuuuuu">
          <i className="fab fa-telegram" />
        </Link>
        <Link target="_blank" href="https://twitter.com/Moru129">
          <i className="fab fa-twitter" />
        </Link>
        <Link target="_blank" href="mailto:127788127788a@gmail.com">
          <i className="fas fa-envelope" />
        </Link>
        <Link target="_blank" href="https://github.com/AndrewGalkin123">
          <i className="fab fa-github" />
        </Link>
      </ul>
    </footer>
  );
};

export { Footer };
