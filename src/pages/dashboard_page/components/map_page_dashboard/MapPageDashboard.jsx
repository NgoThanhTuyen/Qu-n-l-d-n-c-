import React from 'react'
import { Card, Col, Row } from 'antd';
import ChartPage from '../chart_page/ChartPage';
function MapPageDashboard() {
  return (
    <div>
       <Row gutter={25}>
       <Col span={8}>
      <Card title="Tổng khu dân cư đô thị 1 " bordered={false}>
        Card content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Tổng khu dân cư đô thị 2" bordered={false}>
        Card content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Tổng khu dân cư đô thị 3" bordered={false}>
        Card content
      </Card>
    </Col>
  </Row>
    <Row gutter={20}></Row>


     
  

 
    </div>
  )
}

export default MapPageDashboard
