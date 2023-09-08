import { Table, Tooltip } from 'antd'
import React from 'react'
import { DeleteOutlined } from '@ant-design/icons'
import { RowAction } from './../../../../../components'

const TableExcelStore = (props) => {
    const { data, isLoading, setData } = props
    const columns = [
        {
            title: '#',
            dataIndex: 'STT',
            render: (value, _, index) => index + 1,
            className: 'w-50px',
            align: 'center',
        },
        {
            title: 'Mã tỉnh thành',
            dataIndex: 'PROVINCE_CODE',
        },
        {
            title: 'Mã cửa hàng',
            dataIndex: 'STORE_CODE',
        },
        {
            title: 'Tên cửa hàng',
            dataIndex: 'STORE_NAME',
        },
        {
            title: 'Loại cửa hàng',
            dataIndex: 'STORE_TYPE_NAME',
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'STORE_PHONE',
        },
        {
            title: 'Email',
            dataIndex: 'STORE_EMAIL',
        },
        {
            title: 'Địa chỉ cửa hàng',
            dataIndex: 'STORE_ADDRESS',
        },
        {
            title: 'Đối tác bán lẻ',
            dataIndex: 'SALE_PARTNER_NAME',
        },
        {
            title: 'Ghi chú',
            dataIndex: 'STORE_DES',
        },
        {
            title: 'Dữ liệu',
            dataIndex: 'IS_VALID',
            render: (value, record) => {
                if (value) {
                    return 'Hợp lệ'
                } else {
                    return <Tooltip title={record.ERROR_MSG}>Không hợp lệ</Tooltip>
                }
            },
        },
        {
            title: 'Thao tác',
            dataIndex: 'action',
            render: (_, record, index) => {
                return !record.IS_VALID ? <RowAction icon={<DeleteOutlined />} title='Xóa' onClick={() => handleDelete(record, index)} /> : null
            },
        },
    ]

    const handleDelete = (record, index) => {
        const newData = data.filter((item, indexNumber) => indexNumber !== index)
        setData(newData)
    }

    return (
        <Table
            rowClassName={(record) => (!record.IS_VALID ? 'bg-warning' : '')}
            columns={columns}
            // dataSource={data.map((record, index) => ({ ...record, key: index }))}
            loading={isLoading}
            size='middle'
            pagination={false}
        />
    )
}

export default TableExcelStore
