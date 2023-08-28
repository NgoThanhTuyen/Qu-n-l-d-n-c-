import React from 'react'
import { ChartOverTime, FilterchartOverTime } from './components'
import { Space, Row, Col } from 'antd'

function DashboardPage() {
    return (
        <Space direction='vertical' className='w-100' size='small'>
            <Row>
                <Col xs={24} sm={24} md={24} lg={13} xl={12} xxl={24}>
                    <FilterchartOverTime />
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={24} className='mt-4'>
                    <ChartOverTime />
                </Col>
            </Row>
        </Space>
    )
}

export default DashboardPage
