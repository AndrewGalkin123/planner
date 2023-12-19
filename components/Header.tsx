"use client";

import Link from "next/link";
import { Typography, Row, Col } from "antd";
import { Navigation } from "./Navigation";

const { Title } = Typography;

const Header = () => {
  const items = [
    {
      title: <Link href="/">Home</Link>,
    },
    {
      title: <Link href="/about-us">About us</Link>,
    },
    {
      title: <Link href="/more-info">More info</Link>,
    },
  ];
  return (
    <header>
      <Row style={{ display: "flex", alignItems: "center" }}>
        <Col xs={21}>
          <Title
            style={{ color: "white", fontWeight: "bold", margin: 0 }}
            level={2}
          >
            Planner
          </Title>
        </Col>
        <Col xs={3}>
          <Navigation items={items} />
        </Col>
      </Row>
    </header>
  );
};

export { Header };
