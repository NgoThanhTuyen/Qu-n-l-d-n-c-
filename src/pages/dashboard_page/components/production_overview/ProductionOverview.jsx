import { Card, Col, Tabs } from 'antd'
import React from 'react'
import { ChartAbsencePage, ChartOverTimePage, ChartSeriesPage, ChartTimePregnantPage, ChartTimeProductionPage, ChartTimeSalaryPage, ChartWorkerDepartmentPage, DataEntryStatusPage } from './components'

function ProductionOverview() {
    return (
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={24}>
            <Card
                title='Series'
                style={{
                    width: '100%',
                }}
            >
                <ChartSeriesPage />
            </Card>
            <Card
                title='Status of Series'
                className='mt-2'
                style={{
                    width: '100%',
                }}
            >
                <DataEntryStatusPage />
            </Card>
            <Card
                title='Worker Department'
                className='mt-2'
                style={{
                    width: '100%',
                }}
            >
                <ChartWorkerDepartmentPage />
            </Card>
            <Card
                title='Absence'
                className='mt-2'
                style={{
                    width: '100%',
                }}
            >
                <ChartAbsencePage />
            </Card>
            <Card
                title='Over Time'
                className='mt-2'
                style={{
                    width: '100%',
                }}
            >
                <ChartOverTimePage />
            </Card>
            <Card
                className='mt-2'
                style={{
                    width: '100%',
                }}
            >
                <Tabs
                    defaultActiveKey='1'
                    items={[
                        {
                            label: `Time production`,
                            key: '1',
                            children: <ChartTimeProductionPage />,
                        },
                        {
                            label: `Time pregnant`,
                            key: '2',
                            children: <ChartTimePregnantPage />,
                        },
                        {
                            label: `Time salary`,
                            key: '3',
                            children: <ChartTimeSalaryPage />,
                        },
                    ]}
                />
            </Card>
        </Col>
    )
}

export default ProductionOverview
