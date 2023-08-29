import { Col, Row, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { ChartAbsence, FilterChartAbsence } from './components'

function ChartAbsencePage() {
    const [datachartabsence, setDataChartAbsence] = useState([])
    const loadAbsence = () => {
        setDataChartAbsence([
            {
                name: 'Time AB(min)',
                DepartmentName: 'Bottom',
                data: 150,
            },
            {
                name: 'Time AB(min)',
                DepartmentName: 'Mkbls bottom',
                data: 200,
            },
            {
                name: 'Time AB(min)',
                DepartmentName: 'Recut Bottom',
                data: 180,
            },
            {
                name: 'Time AB(min)',
                DepartmentName: 'Recut Mkbls Bottom',
                data: 160,
            },
            {
                name: 'Time AB(min)',
                DepartmentName: 'Brutting',
                data: 190,
            },
            {
                name: 'Time AB(min)',
                DepartmentName: 'Discron Brutting',
                data: 210,
            },
            {
                name: 'Time AB(min)',
                DepartmentName: 'Mkbls Brutting',
                data: 120,
            },
            {
                name: 'Time AB(min)',
                DepartmentName: 'Recut Brutting',
                data: 150,
            },
            {
                name: 'Time AB(min)',
                DepartmentName: 'Recut Mkbls Brutting',
                data: 200,
            },
            {
                name: 'Time AB(min)',
                DepartmentName: 'Culet',
                data: 180,
            },
            {
                name: 'Time AB(min)',
                DepartmentName: 'Mkbls Culet',
                data: 160,
            },
            {
                name: 'Time AB(min)',
                DepartmentName: 'Mkbls Table',
                data: 190,
            },
            {
                name: 'Time AB(min)',
                DepartmentName: 'Recut Mkbls Table',
                data: 210,
            },
            {
                name: 'Time AB(min)',
                DepartmentName: 'Recut Table',
                data: 120,
            },
            {
                name: 'Time AB(min)',
                DepartmentName: 'Table',
                data: 150,
            },
            // {
            //     name: 'Time AB(min)',
            //     	DepartmentName: 'Mkbls Top Star',
            //     data: 200,
            // },
            // {
            //     name: 'Time AB(min)',
            //     	DepartmentName: 'Recut Mkbls Top Star',
            //     data: 180,
            // },
            // {
            //     name: 'Time AB(min)',
            //     	DepartmentName: 'Recut Top Star',
            //     data: 160,
            // },
            // {
            //     name: 'Time AB(min)',
            //     	DepartmentName: 'Top Star',
            //     data: 190,
            // },

            {
                name: 'AL',
                DepartmentName: 'Bottom',
                data: 70,
            },
            {
                name: 'AL',
                DepartmentName: 'Mkbls bottom',
                data: 100,
            },
            {
                name: 'AL',
                DepartmentName: 'Recut Bottom',
                data: 40,
            },
            {
                name: 'AL',
                DepartmentName: 'Recut Mkbls Bottom',
                data: 20,
            },
            {
                name: 'AL',
                DepartmentName: 'Brutting',
                data: 70,
            },
            {
                name: 'AL',
                DepartmentName: 'Discron Brutting',
                data: 10,
            },
            {
                name: 'AL',
                DepartmentName: 'Mkbls Brutting',
                data: 50,
            },
            {
                name: 'AL',
                DepartmentName: 'Recut Brutting',
                data: 70,
            },
            {
                name: 'AL',
                DepartmentName: 'Recut Mkbls Brutting',
                data: 100,
            },
            {
                name: 'AL',
                DepartmentName: 'Culet',
                data: 40,
            },
            {
                name: 'AL',
                DepartmentName: 'Mkbls Culet',
                data: 20,
            },
            {
                name: 'AL',
                DepartmentName: 'Mkbls Table',
                data: 70,
            },
            {
                name: 'AL',
                DepartmentName: 'Recut Mkbls Table',
                data: 10,
            },
            {
                name: 'AL',
                DepartmentName: 'Recut Table',
                data: 50,
            },
            {
                name: 'AL',
                DepartmentName: 'Table',
                data: 70,
            },
            // {
            //     name: 'AL',
            //     	DepartmentName: 'Mkbls Top Star',
            //     data: 100,
            // },
            // {
            //     name: 'AL',
            //     	DepartmentName: 'Recut Mkbls Top Star',
            //     data: 40,
            // },
            // {
            //     name: 'AL',
            //     	DepartmentName: 'Recut Top Star',
            //     data: 20,
            // },
            // {
            //     name: 'AL',
            //     	DepartmentName: 'Top Star',
            //     data: 70,
            // },
            {
                name: 'PL',
                DepartmentName: 'Bottom',
                data: 30,
            },
            {
                name: 'PL',
                DepartmentName: 'Mkbls bottom',
                data: 30,
            },
            {
                name: 'PL',
                DepartmentName: 'Recut Bottom',
                data: 60,
            },
            {
                name: 'PL',
                DepartmentName: 'Recut Mkbls Bottom',
                data: 40,
            },
            {
                name: 'PL',
                DepartmentName: 'Brutting',
                data: 20,
            },
            {
                name: 'PL',
                DepartmentName: 'Discron Brutting',
                data: 50,
            },
            {
                name: 'PL',
                DepartmentName: 'Mkbls Brutting',
                data: 30,
            },
            {
                name: 'PL',
                DepartmentName: 'Recut Brutting',
                data: 30,
            },
            {
                name: 'PL',
                DepartmentName: 'Recut Mkbls Brutting',
                data: 30,
            },
            {
                name: 'PL',
                DepartmentName: 'Culet',
                data: 60,
            },
            {
                name: 'PL',
                DepartmentName: 'Mkbls Culet',
                data: 40,
            },
            {
                name: 'PL',
                DepartmentName: 'Mkbls Table',
                data: 20,
            },
            {
                name: 'PL',
                DepartmentName: 'Recut Mkbls Table',
                data: 50,
            },
            {
                name: 'PL',
                DepartmentName: 'Recut Table',
                data: 30,
            },
            {
                name: 'PL',
                DepartmentName: 'Table',
                data: 30,
            },
            // {
            //     name: 'PL',
            //     	DepartmentName: 'Mkbls Top Star',
            //     data: 30,
            // },
            // {
            //     name: 'PL',
            //     	DepartmentName: 'Recut Mkbls Top Star',
            //     data: 60,
            // },
            // {
            //     name: 'PL',
            //     	DepartmentName: 'Recut Top Star',
            //     data: 40,
            // },
            // {
            //     name: 'PL',
            //     	DepartmentName: 'Top Star',
            //     data: 20,
            // },
            {
                name: 'SL',
                DepartmentName: 'Bottom',
                data: 20,
            },
            {
                name: 'SL',
                DepartmentName: 'Mkbls bottom',
                data: 20,
            },
            {
                name: 'SL',
                DepartmentName: 'Recut Bottom',
                data: 50,
            },
            {
                name: 'SL',
                DepartmentName: 'Recut Mkbls Bottom',
                data: 80,
            },
            {
                name: 'SL',
                DepartmentName: 'Brutting',
                data: 60,
            },
            {
                name: 'SL',
                DepartmentName: 'Discron Brutting',
                data: 100,
            },
            {
                name: 'SL',
                DepartmentName: 'Mkbls Brutting',
                data: 30,
            },
            {
                name: 'SL',
                DepartmentName: 'Recut Brutting',
                data: 20,
            },
            {
                name: 'SL',
                DepartmentName: 'Recut Mkbls Brutting',
                data: 20,
            },
            {
                name: 'SL',
                DepartmentName: 'Culet',
                data: 50,
            },
            {
                name: 'SL',
                DepartmentName: 'Mkbls Culet',
                data: 80,
            },
            {
                name: 'SL',
                DepartmentName: 'Mkbls Table',
                data: 60,
            },
            {
                name: 'SL',
                DepartmentName: 'Recut Mkbls Table',
                data: 100,
            },
            {
                name: 'SL',
                DepartmentName: 'Recut Table',
                data: 30,
            },
            {
                name: 'SL',
                DepartmentName: 'Table',
                data: 20,
            },
            // {
            //     name: 'SL',
            //     	DepartmentName: 'Mkbls Top Star',
            //     data: 20,
            // },
            // {
            //     name: 'SL',
            //     	DepartmentName: 'Recut Mkbls Top Star',
            //     data: 50,
            // },
            // {
            //     name: 'SL',
            //     	DepartmentName: 'Recut Top Star',
            //     data: 80,
            // },
            // {
            //     name: 'SL',
            //     	DepartmentName: 'Top Star',
            //     data: 60,
            // },
            {
                name: 'Late + Leave Soon',
                DepartmentName: 'Bottom',
                data: 30,
            },
            {
                name: 'Late + Leave Soon',
                DepartmentName: 'Mkbls bottom',
                data: 50,
            },
            {
                name: 'Late + Leave Soon',
                DepartmentName: 'Recut Bottom',
                data: 30,
            },
            {
                name: 'Late + Leave Soon',
                DepartmentName: 'Recut Mkbls Bottom',
                data: 20,
            },
            {
                name: 'Late + Leave Soon',
                DepartmentName: 'Brutting',
                data: 40,
            },
            {
                name: 'Late + Leave Soon',
                DepartmentName: 'Discron Brutting',
                data: 50,
            },
            {
                name: 'Late + Leave Soon',
                DepartmentName: 'Mkbls Brutting',
                data: 10,
            },
            {
                name: 'Late + Leave Soon',
                DepartmentName: 'Recut Brutting',
                data: 30,
            },
            {
                name: 'Late + Leave Soon',
                DepartmentName: 'Recut Mkbls Brutting',
                data: 50,
            },
            {
                name: 'Late + Leave Soon',
                DepartmentName: 'Culet',
                data: 30,
            },
            {
                name: 'Late + Leave Soon',
                DepartmentName: 'Mkbls Culet',
                data: 20,
            },
            {
                name: 'Late + Leave Soon',
                DepartmentName: 'Mkbls Table',
                data: 40,
            },
            {
                name: 'Late + Leave Soon',
                DepartmentName: 'Recut Mkbls Table',
                data: 50,
            },
            {
                name: 'Late + Leave Soon',
                DepartmentName: 'Recut Table',
                data: 10,
            },
            {
                name: 'Late + Leave Soon',
                DepartmentName: 'Table',
                data: 30,
            },
            // {
            //     name: 'Late + Leave Soon',
            //     	DepartmentName: 'Mkbls Top Star',
            //     data: 50,
            // },
            // {
            //     name: 'Late + Leave Soon',
            //     	DepartmentName: 'Recut Mkbls Top Star',
            //     data: 30,
            // },
            // {
            //     name: 'Late + Leave Soon',
            //     	DepartmentName: 'Recut Top Star',
            //     data: 20,
            // },
            // {
            //     name: 'Late + Leave Soon',
            //     	DepartmentName: 'Top Star',
            //     data: 40,
            // },
        ])
    }
    useEffect(() => {
        loadAbsence()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Space direction='vertical' className='w-100' size='small'>
            <Row>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={24}>
                    <FilterChartAbsence />
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={24} className='mt-4'>
                    <ChartAbsence data={datachartabsence} />
                </Col>
            </Row>
        </Space>
    )
}

export default ChartAbsencePage
