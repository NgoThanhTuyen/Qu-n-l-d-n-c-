import React from 'react'
import { ChartWorkerDepartment, FilterChartWorkerDepartment } from './components'
import { Space, Row, Col } from 'antd'

function DashboardPage() {
    return (
        <Space direction='vertical' className='w-100' size='small'>
            <Row>
                <Col xs={24} sm={24} md={24} lg={13} xl={12} xxl={24}>
                    <FilterChartWorkerDepartment />
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={24} className='mt-4'>
                    <ChartWorkerDepartment />
                </Col>
            </Row>
        </Space>
    )
}

export default DashboardPage
