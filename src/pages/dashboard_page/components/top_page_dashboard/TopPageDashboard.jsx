import React from 'react'
import { Card, Col, Row } from 'antd'
import { HomeTwoTone } from '@ant-design/icons'
import ViewMore from '../view_more/ViewMore'

function MapPageDashboard() {
    return (
        <div>
            <Row gutter={25}>
                <Col span={8}>
                    <Card
                        title={
                            <>
                                <HomeTwoTone style={{ fontSize: '20px', marginRight: '10px' }} /> <span style={{ fontSize: '20px' }}>Khu vực Trảng Bom</span>
                            </>
                        }
                        bordered={false}
                        className="custom-card"
                    >
                        <ViewMore />

                        <div className='font_dasboard'>
                            <h1 style={{color:'#52c41a'}}> khu vực nhà ở  : </h1>
                            <h1  style={{color:'#52c41a'}}> khu vực nhà </h1>
                            <h1  style={{color:'#52c41a'}}> khu vực nhà ở </h1>
                        </div>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        title={
                            <>
                                <HomeTwoTone style={{ fontSize: '20px', marginRight: '10px' }} /> <span style={{ fontSize: '20px' }}>Khu vực Biên Hòa </span>
                            </>
                        }
                        bordered={false}
                        className="custom-card"

                    >
                          <div className='font_dasboard'>
                            <h1 style={{color:'#52c41a'}}> khu vực nhà ở  : </h1>
                            <h1  style={{color:'#52c41a'}}> khu vực nhà </h1>
                            <h1  style={{color:'#52c41a'}}> khu vực nhà ở </h1>
                        </div>
                        <ViewMore />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        title={
                            <>
                                <HomeTwoTone style={{ fontSize: '20px', marginRight: '10px' }} /> <span style={{ fontSize: '20px' }}>Khu vực Sông Mây</span>
                            </>
                        }
                        bordered={false}
                        className="custom-card"

                    >
                        <ViewMore />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default MapPageDashboard
