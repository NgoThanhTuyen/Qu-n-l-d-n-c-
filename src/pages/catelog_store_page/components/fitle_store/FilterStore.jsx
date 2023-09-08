import { PlusOutlined, SearchOutlined, FileExcelOutlined, ImportOutlined } from '@ant-design/icons'
import { InputGroup, SelectProvinceCode, SelectTypeStore } from './../../../../components'
import { Button, Col, Input, Row, Space } from 'antd'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

function FilterStore(props) {
    const { filters: fils, onChange, onAdd, onOpenImport } = props
    const [filters, setFilters] = useState({ ...fils })
    const onSearch = () => {
        const newFilters = { ...filters, PAGE_INDEX: 1 }
        onChange(newFilters)
    }

    return (
        <Row gutter={[12, 12]}>
            <Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={5}>
                <Input
                    addonBefore='Tìm kiếm'
                    placeholder='Mã, tên cửa hàng...'
                    onChange={(e) => {
                        setFilters({ ...filters, KEY_WORD: e.target.value })
                    }}
                    onPressEnter={onSearch}
                />
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={5}>
                <InputGroup textBefore='Loại cửa hàng'>
                    <SelectTypeStore
                        onChange={(value) => {
                            setFilters((prev) => ({ ...prev, STORE_TYPE_NAME: value }))
                        }}
                    />
                </InputGroup>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={5}>
                <InputGroup textBefore='Tỉnh thành'>
                    <SelectProvinceCode
                        onChange={(value) => {
                            setFilters((prev) => ({ ...prev, PROVINCE_CODE: value }))
                        }}
                    />
                </InputGroup>
            </Col>
            <Col xs={24} sm={24} md={12} lg={16} xl={19} xxl={9}>
                <Space size='small'>
                    <Button type='primary' icon={<SearchOutlined />} onClick={onSearch}>
                        Tìm kiếm
                    </Button>
                    <Button type='primary' icon={<PlusOutlined />} onClick={onAdd}>
                        Thêm mới
                    </Button>
                    <Button type='primary' icon={<FileExcelOutlined />} className='min-w-100-px'>
                        Xuất Excel
                    </Button>
                    <Button type='primary' icon={<ImportOutlined />} className='min-w-100-px' onClick={() => onOpenImport()}>
                        Import Excel
                    </Button>
                </Space>
            </Col>
        </Row>
    )
}
FilterStore.propTypes = {
    onAdd: PropTypes.func,
}

FilterStore.defaultProps = {
    onAdd: () => {},
}

export default FilterStore
