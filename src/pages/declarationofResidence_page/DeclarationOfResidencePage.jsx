import { Card, Col, Row, Space, Tabs } from 'antd'
import React, { useState } from 'react'
import { Birthday, ChartLine, Table1, Table2, TablefiltedeclarationofResidence } from './components'
function DeclarationOfResidencePage(props) {
    const [filters, setFilters] = useState({
        Key_Search: '',
    })
    const [dataColumn] = useState([])
    const [organizeTable] = useState([])
    const itemTabChart = [
        {
            label: 'Biểu đồ Series',
            key: 'tab-chart-columns',
            children: <ChartLine data={dataColumn} />,
        },
    ]
    return (
        <Space direction='vertical' className='w-100' size='small'>
            <Row>
                <Col xs={24} sm={24} md={24} lg={13} xl={12} xxl={18}>
                    <Card size='small' title='Tổng quan sản xuất'>
                        <Tabs centered defaultActiveKey='tab-chart-columns' items={itemTabChart} />
                    </Card>
                    <Card size='small' title='Tình trạng nhập liệu các công đoạn'>
                        <Table1
                            data={organizeTable}
                            // isLoading={isLoadingDeclarationOfResidencePage}
                            onChange={(pagInfo) => {
                                const newFilters = { ...filters, PageIndex: pagInfo.current }
                                setFilters(newFilters)
                            }}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={24} lg={13} xl={12} xxl={6}>
                    <Card size='small' title='Tổng quan hệ thống'>
                        <Birthday
                            data={organizeTable}
                            // isLoading={isLoadingDeclarationOfResidencePage}
                            onChange={(pagInfo) => {
                                const newFilters = { ...filters, PageIndex: pagInfo.current }
                                setFilters(newFilters)
                            }}
                        />
                    </Card>
                    <Card size='small'>
                        <TablefiltedeclarationofResidence
                            data={organizeTable}
                            // isLoading={isLoadingDeclarationOfResidencePage}
                            onChange={(pagInfo) => {
                                const newFilters = { ...filters, PageIndex: pagInfo.current }
                                setFilters(newFilters)
                            }}
                        />
                    </Card>
                    <Card size='small' title='Danh sách Login/Logout mới nhất: TOP 20'>
                        <Table2
                            data={organizeTable}
                            // isLoading={isLoadingDeclarationOfResidencePage}
                            onChange={(pagInfo) => {
                                const newFilters = { ...filters, PageIndex: pagInfo.current }
                                setFilters(newFilters)
                            }}
                        />
                    </Card>
                </Col>
            </Row>
        </Space>
    )
}

export default DeclarationOfResidencePage
