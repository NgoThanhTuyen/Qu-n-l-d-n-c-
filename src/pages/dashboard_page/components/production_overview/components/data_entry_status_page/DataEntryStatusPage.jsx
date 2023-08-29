import { Col, Row, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { FilterDataEntryStatus, TableDataEntryStatus } from './components'

function DataEntryStatusPage() {
    const [datachartentrystatus, setDataChartEntryStatus] = useState([])
    const loadEntryStatus = () => {
        setDataChartEntryStatus([
            {
                Series: '2719 A',
                Status: 'Sawable :',
            },
            {
                Series: 'MAL9',
                Status: 'Makables :',
            },
            {
                Series: '2720 A',
                Status: 'Sawable :',
            },
            {
                Series: 'MAL8',
                Status: 'Makables :',
            },
            {
                Series: '2720 B',
                Status: 'Sawable :',
            },
        ])
    }
    useEffect(() => {
        loadEntryStatus()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Space direction='vertical' className='w-100' size='small'>
            <Row>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={24}>
                    <FilterDataEntryStatus />
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={24} className='mt-4'>
                    <TableDataEntryStatus data={datachartentrystatus} />
                </Col>
            </Row>
        </Space>
    )
}

export default DataEntryStatusPage
