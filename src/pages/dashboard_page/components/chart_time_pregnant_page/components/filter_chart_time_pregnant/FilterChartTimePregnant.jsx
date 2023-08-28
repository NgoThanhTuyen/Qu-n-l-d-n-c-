import { Col, Row, DatePicker, Space, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import React from 'react'
import { InputGroup } from '../../../../../../components'

function FilterChartTimePregnant(props) {
    return (
        <Row gutter={[12, 12]}>
            <Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={4}>
                <InputGroup before='Month'>
                    <DatePicker className='w-100' picker='month' placeholder='MM/YYYY' />
                </InputGroup>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={4}>
                <Space size='small'>
                    <Button type='primary' icon={<SearchOutlined />} className='min-w-100-px'>
                        Search
                    </Button>
                </Space>
            </Col>
        </Row>
    )
}

export default FilterChartTimePregnant
