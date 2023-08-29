import { SearchOutlined } from '@ant-design/icons'
import { Button, Col, Input, Row, Space } from 'antd'
import React from 'react'
import { InputGroup } from '../../../../../../../../components'

function FilterDataEntryStatus(props) {
    return (
        <Row gutter={[12, 12]}>
            <Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={4}>
                <InputGroup before='Series'>
                    <Input placeholder='Series' />
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

export default FilterDataEntryStatus
