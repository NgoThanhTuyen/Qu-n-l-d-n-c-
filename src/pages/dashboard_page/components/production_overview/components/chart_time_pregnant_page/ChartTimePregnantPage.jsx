import { Col, Row, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { ChartTimePregnant, FilterChartTimePregnant } from './components'

function ChartTimePregnantPage() {
    const [datacharttimepergnant, setDataChartTimePergnant] = useState([])
    const loadTimePergnant = () => {
        setDataChartTimePergnant([
            {
                name: 'Total Minutes',
                DepartmentName: 'Bottom',
                data: 600,
            },
            {
                name: 'Total Minutes',
                DepartmentName: 'Mkbls bottom',
                data: 558,
            },
            {
                name: 'Total Minutes',
                DepartmentName: 'Recut Bottom',
                data: 600,
            },
            {
                name: 'Total Minutes',
                DepartmentName: 'Recut Mkbls Bottom',
                data: 486,
            },
            {
                name: 'Total Minutes',
                DepartmentName: 'Brutting',
                data: 360,
            },
            {
                name: 'Total Minutes',
                DepartmentName: 'Discron Brutting',
                data: 400,
            },
            {
                name: 'Total Minutes',
                DepartmentName: 'Mkbls Brutting',
                data: 591,
            },
            {
                name: 'Total Minutes',
                DepartmentName: 'Recut Brutting',
                data: 630,
            },
            {
                name: 'Total Minutes',
                DepartmentName: 'Recut Mkbls Brutting',
                data: 480,
            },
            {
                name: 'Total Minutes',
                DepartmentName: 'Culet',
                data: 590,
            },
            {
                name: 'Total Minutes',
                DepartmentName: 'Mkbls Culet',
                data: 640,
            },
            {
                name: 'Total Minutes',
                DepartmentName: 'Mkbls Table',
                data: 590,
            },
            {
                name: 'Total Minutes',
                DepartmentName: 'Recut Mkbls Table',
                data: 555,
            },
            {
                name: 'Total Minutes',
                DepartmentName: 'Recut Table',
                data: 458,
            },
            {
                name: 'Total Minutes',
                DepartmentName: 'Table',
                data: 635,
            },
            // {
            //     name: 'Total Minutes',
            //     	DepartmentName: 'Mkbls Top Star',
            //     data: 408,
            // },
            // {
            //     name: 'Total Minutes',
            //     	DepartmentName: 'Recut Mkbls Top Star',
            //     data: 800,
            // },
            // {
            //     name: 'Total Minutes',
            //     	DepartmentName: 'Recut Top Star',
            //     data: 790,
            // },
            // {
            //     name: 'Total Minutes',
            //     	DepartmentName: 'Top Star',
            //     data: 850,
            // },
            {
                name: 'Total People',
                DepartmentName: 'Bottom',
                data: 70,
            },
            {
                name: 'Total People',
                DepartmentName: 'Mkbls bottom',
                data: 60,
            },
            {
                name: 'Total People',
                DepartmentName: 'Recut Bottom',
                data: 123,
            },
            {
                name: 'Total People',
                DepartmentName: 'Recut Mkbls Bottom',
                data: 124,
            },
            {
                name: 'Total People',
                DepartmentName: 'Brutting',
                data: 50,
            },
            {
                name: 'Total People',
                DepartmentName: 'Discron Brutting',
                data: 60,
            },
            {
                name: 'Total People',
                DepartmentName: 'Mkbls Brutting',
                data: 60,
            },
            {
                name: 'Total People',
                DepartmentName: 'Recut Brutting',
                data: 53,
            },
            {
                name: 'Total People',
                DepartmentName: 'Recut Mkbls Brutting',
                data: 55,
            },
            {
                name: 'Total People',
                DepartmentName: 'Culet',
                data: 60,
            },
            {
                name: 'Total People',
                DepartmentName: 'Mkbls Culet',
                data: 42,
            },
            {
                name: 'Total People',
                DepartmentName: 'Mkbls Table',
                data: 38,
            },
            {
                name: 'Total People',
                DepartmentName: 'Recut Mkbls Table',
                data: 58,
            },
            {
                name: 'Total People',
                DepartmentName: 'Recut Table',
                data: 78,
            },
            {
                name: 'Total People',
                DepartmentName: 'Table',
                data: 60,
            },
            // {
            //     name: 'Total People',
            //     	DepartmentName: 'Mkbls Top Star',
            //     data: 80,
            // },
            // {
            //     name: 'Total People',
            //     	DepartmentName: 'Recut Mkbls Top Star',
            //     data: 98,
            // },
            // {
            //     name: 'Total People',
            //     	DepartmentName: 'Recut Top Star',
            //     data: 83,
            // },
            // {
            //     name: 'Total People',
            //     	DepartmentName: 'Top Star',
            //     data: 100,
            // },
        ])
    }
    useEffect(() => {
        loadTimePergnant()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Space direction='vertical' className='w-100' size='small'>
            <Row>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={24}>
                    <FilterChartTimePregnant />
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={24} className='mt-4'>
                    <ChartTimePregnant data={datacharttimepergnant} />
                </Col>
            </Row>
        </Space>
    )
}

export default ChartTimePregnantPage
