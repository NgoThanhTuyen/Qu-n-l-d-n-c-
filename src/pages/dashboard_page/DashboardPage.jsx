import React from 'react'
import {
    TopPageDashboard,
    ChartSeriesPage,
    DataEntryStatusPage,
    ChartWorkerDepartmentPage,
    ChartAbsencePage,
    ChartOverTimePage,
    ChartTimePregnantPage,
    ChartTimeProductionPage,
    ChartTimeSalaryPage,
} from './components'
import { Card, Space, Row, Col, Tabs } from 'antd'

function DashboardPage() {
    return (
        <Space direction='vertical' className='w-100' size='small'>
            <Row>
                <Col xs={24} sm={24} md={24} lg={13} xl={12} xxl={24}>
                    <TopPageDashboard />
                    <Card
                        title='Chart Series'
                        className='mt-2'
                        bordered={false}
                        style={{
                            width: '100%',
                        }}
                    >
                        <ChartSeriesPage />
                    </Card>
                    <Card
                        title='Data entry status of stages'
                        bordered={false}
                        className='mt-2'
                        style={{
                            width: '100%',
                        }}
                    >
                        <DataEntryStatusPage />
                    </Card>
                    <Card
                        title='Chart Worker Department '
                        className='mt-2'
                        bordered={false}
                        style={{
                            width: '100%',
                        }}
                    >
                        <ChartWorkerDepartmentPage />
                    </Card>
                    <Card
                        title='Chart Absence'
                        bordered={false}
                        className='mt-2'
                        style={{
                            width: '100%',
                        }}
                    >
                        <ChartAbsencePage />
                    </Card>
                    <Card
                        title='Chart Over Time'
                        bordered={false}
                        className='mt-2'
                        style={{
                            width: '100%',
                        }}
                    >
                        <ChartOverTimePage />
                    </Card>
                    <Card
                        bordered={false}
                        className='mt-2'
                        style={{
                            width: '100%',
                        }}
                    >
                        <Tabs defaultActiveKey='1'>
                            <Tabs.TabPane tab='Time production' key='1'>
                                <Row gutter={[12, 12]}></Row>
                                <ChartTimeProductionPage />
                            </Tabs.TabPane>
                            <Tabs.TabPane tab='Time pregnant' key='2'>
                                <ChartTimePregnantPage />
                            </Tabs.TabPane>
                            <Tabs.TabPane tab='Time salary' key='3'>
                                <ChartTimeSalaryPage />
                            </Tabs.TabPane>
                        </Tabs>
                    </Card>
                </Col>
            </Row>
        </Space>
    )
}

export default DashboardPage
