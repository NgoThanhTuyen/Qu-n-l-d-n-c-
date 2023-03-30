import React from "react";
import { Row, Col, Card } from "antd";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const ChartPage = () => {
  const data = [
    { month: "Jan", value: 10 },
    { month: "Feb", value: 20 },
    { month: "Mar", value: 30 },
    { month: "Apr", value: 25 },
    { month: "May", value: 35 },
    { month: "Jun", value: 40 },
    { month: "Jul", value: 45 },
    { month: "Aug", value: 50 },
    { month: "Sep", value: 55 },
    { month: "Oct", value: 60 },
    { month: "Nov", value: 65 },
    { month: "Dec", value: 70 },
  ];

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Card>
          <LineChart width={700} height={400} data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </Card>
      </Col>
    </Row>
  );
};

export default ChartPage;
