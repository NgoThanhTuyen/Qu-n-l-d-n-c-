import { SearchOutlined } from '@ant-design/icons'
import { Button, Col, Form, Input, Popover, Row } from 'antd'
import React, { useState } from 'react'
import SelectProvinceCode from '../select_province_code/SelectProvinceCode'
import SelectTypeStore from '../select_type_store/SelectTypeStore'

export default function SearchStore(props) {
    const { data, setFilterData, pageTopRef } = props
    const [open, setOpen] = useState(false)
    const [form] = Form.useForm()
    const content = (
        <Form
            form={form}
            onFinish={(values) => {
                const searchTerm = values.STORE_NAME === undefined ? '' : values.STORE_NAME.toLowerCase()
                const provinceCodeSearch = values.PROVINCE_CODE === undefined ? '' : values.PROVINCE_CODE.toLowerCase()
                const storeTypeNameSearch = values.STORE_TYPE_NAME === undefined ? '' : values.STORE_TYPE_NAME.toLowerCase()
                const filteredResults = data.filter((item) => {
                    const PROVINCE_CODE = item.PROVINCE_CODE.toLowerCase()
                    const STORE_NAME = item.STORE_NAME.toLowerCase()
                    const STORE_TYPE_NAME = item.STORE_TYPE_NAME.toLowerCase() ?? ''
                    const searchTermMatches = searchTerm === '' || PROVINCE_CODE.includes(searchTerm) || STORE_NAME.includes(searchTerm) || STORE_TYPE_NAME.includes(searchTerm)
                    const provinceCodeSearchMatches = provinceCodeSearch === '' || PROVINCE_CODE.includes(provinceCodeSearch) || STORE_NAME.includes(provinceCodeSearch) || STORE_TYPE_NAME.includes(provinceCodeSearch)
                    const storeTypeNameSearchMatches = storeTypeNameSearch === '' || PROVINCE_CODE.includes(storeTypeNameSearch) || STORE_NAME.includes(storeTypeNameSearch) || STORE_TYPE_NAME.includes(storeTypeNameSearch)
                    return searchTermMatches & provinceCodeSearchMatches & storeTypeNameSearchMatches
                })
                setFilterData(filteredResults)
                pageTopRef.current.scrollIntoView({ behavior: 'smooth' })
            }}
        >
            <Row gutter={[12, 12]} className='mb-2'>
                <Col flex='auto'>
                    <Form.Item name='STORE_NAME'>
                        <Input placeholder='Tìm kiếm theo tên cửa hàng...' allowClear />
                    </Form.Item>
                </Col>
                <Col>
                    <Button
                        type='primary'
                        ghost
                        onClick={() => {
                            form.setFieldsValue({ STORE_NAME: undefined })
                        }}
                    >
                        Xóa
                    </Button>
                </Col>
            </Row>
            <Row gutter={[12, 12]} className='mb-2'>
                <Col flex='auto'>
                    <Form.Item name='STORE_TYPE_NAME'>
                        <SelectTypeStore />
                    </Form.Item>
                </Col>
                <Col>
                    <Button
                        type='primary'
                        ghost
                        onClick={() => {
                            form.setFieldsValue({ STORE_TYPE_NAME: undefined })
                        }}
                    >
                        Xóa
                    </Button>
                </Col>
            </Row>
            <Row gutter={[12, 12]} className='mb-2'>
                <Col flex='auto'>
                    <Form.Item name='PROVINCE_CODE'>
                        <SelectProvinceCode />
                    </Form.Item>
                </Col>
                <Col>
                    <Button
                        type='primary'
                        ghost
                        onClick={() => {
                            form.setFieldsValue({ PROVINCE_CODE: undefined })
                        }}
                    >
                        Xóa
                    </Button>
                </Col>
            </Row>
            <Button
                type='primary'
                block
                icon={<SearchOutlined />}
                onClick={() => {
                    form.submit()
                    setOpen(!open)
                }}
            >
                Tìm kiếm
            </Button>
        </Form>
    )

    return (
        <Popover placement='topLeft' title={<span style={{ fontSize: 20 }}>Tìm kiếm cửa hàng</span>} content={content} trigger='click' visible={open}>
            <Button type='primary' onClick={() => setOpen(!open)} icon={<SearchOutlined style={{ fontSize: 25 }} />} style={{ height: 65, width: 65, borderRadius: '50%', boxShadow: '1px 2px 9px #808080' }}></Button>
        </Popover>
    )
}
