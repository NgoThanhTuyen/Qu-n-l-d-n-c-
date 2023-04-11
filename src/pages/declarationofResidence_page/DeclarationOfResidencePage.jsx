import React, { useState } from 'react'
import { ChartLine, Table1, Table2, Birthday, TablefiltedeclarationofResidence } from './components'
import { Card, Space, Col, Tabs, Row } from 'antd'
const monthNow = new Date().getMonth() + 1
const yearNow = new Date().getFullYear()
function DeclarationOfResidencePage(props) {

    // const [isShowModalAdd, setIsShowModalAdd] = useState(false)

    const [filters, setFilters] = useState({
        Key_Search: '',
    })

    const [dataColumn] = useState([])

    const [organizeTable] = useState([])

    const [dataLine] = useState([])

    const [dataPie] = useState([])

    const [filtersChart] = useState({ Month: monthNow, Year: yearNow })

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
                    <Card
                        size='small'
                        title="Tổng quan sản xuất"
                    >
                        <Tabs centered defaultActiveKey='tab-chart-columns' items={itemTabChart} />
                    </Card>
                    <Card
                        size='small'
                        title="Tình trạng nhập liệu các công đoạn">
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
                    <Card
                        size='small'
                        title="Tổng quan hệ thống"
                    >
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
                    <Card
                        size='small'
                        title="Danh sách Login/Logout mới nhất: TOP 20">
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
