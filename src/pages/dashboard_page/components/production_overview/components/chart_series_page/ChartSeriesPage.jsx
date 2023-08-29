import { Col, Row, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { ChartSeries, FilterChartSeries } from './components'

function ChartSeriesPage() {
    const [datachartseries, setDataChartSeries] = useState([])
    const loadChartSeries = () => {
        setDataChartSeries([
            {
                name: 'Quantity',
                Serie: '2719 A',
                data: 50,
            },
            {
                name: 'Quantity',
                Serie: 'MAL9',
                data: 80,
            },
            {
                name: 'Quantity',
                Serie: '2720 A',
                data: 60,
            },
            {
                name: 'Quantity',
                Serie: 'MAL8',
                data: 30,
            },
            {
                name: 'Quantity',
                Serie: '2720 B',
                data: 30,
            },
            {
                name: 'Weight',
                Serie: '2719 A',
                data: 10,
            },
            {
                name: 'Weight',
                Serie: 'MAL9',
                data: 50,
            },
            {
                name: 'Weight',
                Serie: '2720 A',
                data: 30,
            },
            {
                name: 'Weight',
                Serie: 'MAL8',
                data: 80,
            },
            {
                name: 'Weight',
                Serie: '2720 B',
                data: 80,
            },
            {
                name: 'Unit price',
                Serie: '2719 A',
                data: 30,
            },
            {
                name: 'Unit price',
                Serie: 'MAL9',
                data: 60,
            },
            {
                name: 'Unit price',
                Serie: '2720 A',
                data: 20,
            },
            {
                name: 'Unit price',
                Serie: 'MAL8',
                data: 50,
            },
            {
                name: 'Unit price',
                Serie: '2720 B',
                data: 50,
            },
            {
                name: 'Toltal Value',
                Serie: '2719 A',
                data: 70,
            },
            {
                name: 'Toltal Value',
                Serie: 'MAL9',
                data: 30,
            },
            {
                name: 'Toltal Value',
                Serie: '2720 A',
                data: 50,
            },
            {
                name: 'Toltal Value',
                Serie: 'MAL8',
                data: 70,
            },
            {
                name: 'Toltal Value',
                Serie: '2720 B',
                data: 70,
            },
        ])
    }
    useEffect(() => {
        loadChartSeries()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Space direction='vertical' className='w-100' size='small'>
            <Row>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={24}>
                    <FilterChartSeries />
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={24} className='mt-4'>
                    <ChartSeries data={datachartseries} />
                </Col>
            </Row>
        </Space>
    )
}

export default ChartSeriesPage
