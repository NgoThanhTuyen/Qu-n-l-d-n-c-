import { PlusOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Col, Row, Space, Input } from 'antd'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { InputGroup } from '../../../../components'

function FitleOrganize(props) {

    const { filters: fils, onChange, onAdd } = props

    const [filters, setFilters] = useState({
        ...fils,
    })

    const onSearch = () => {
        const newFilters = { ...filters, PageIndex: 1 }
        onChange(newFilters)
    }

    return (
        <Row gutter={[12, 12]}>
            <Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={4}>
                <InputGroup before='Tìm kiếm'>
                    <Input
                        placeholder='Mã tổ chức hoặc tên tổ chức'
                        onChange={(value) => {
                            setFilters({ ...filters, Key_Search: value.target.value ?? '' })
                        }}
                    />
                </InputGroup>
            </Col>

            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={4}>
                <Space size='small'>
                    <Button type='primary' icon={<SearchOutlined />} onClick={onSearch} className='min-w-100-px'>Tìm kiếm</Button>
                    <Button type='primary' icon={<PlusOutlined />} onClick={onAdd} className='min-w-100-px'>Thêm mới</Button>
                </Space>
            </Col>
        </Row>
    )
}
FitleOrganize.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func,
    onAdd: PropTypes.func,
    departments: PropTypes.array,
}

FitleOrganize.defaultProps = {
    filters: {},
    onChange: () => { },
    onAdd: () => { },
    departments: [],
}
export default FitleOrganize