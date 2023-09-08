import { Table } from 'antd'
import PropTypes from 'prop-types'

function TableStore(props) {
    const { data, isLoading, onChange } = props

    const columns = [
        {
            title: '#',
            dataIndex: 'STORE_ID',
            key: 'STORE_ID',
            render: (text, record, index) => {
                return index + 1
            },
            className: 'w-50px',
            align: 'center',
        },
        {
            title: 'Mã tỉnh thành',
            dataIndex: 'PROVINCE_CODE',
            key: 'PROVINCE_CODE',
            sorter: (a, b) => a.PROVINCE_CODE.localeCompare(b.PROVINCE_CODE),
        },
        {
            title: 'Mã cửa hàng',
            dataIndex: 'STORE_CODE',
            key: 'STORE_CODE',
            sorter: (a, b) => a.STORE_CODE.localeCompare(b.STORE_CODE),
        },
        {
            title: 'Tên cửa hàng',
            dataIndex: 'STORE_NAME',
            key: 'STORE_NAME',
        },
        {
            title: 'Loại cửa hàng',
            dataIndex: 'STORE_TYPE_NAME',
            key: 'STORE_TYPE_NAME',
        },
        {
            title: 'Điện thoại cửa hàng',
            dataIndex: 'STORE_PHONE',
            key: 'STORE_PHONE',
        },
        {
            title: 'Email cửa hàng',
            dataIndex: 'STORE_EMAIL',
            key: 'STORE_EMAIL',
        },
        {
            title: 'Cửa hàng trưởng',
            dataIndex: 'MANAGER_FULL_NAME',
            key: 'MANAGER_FULL_NAME',
            render: (text, record, index) => {
                if (text === null) {
                    return ''
                } else {
                    return `${text} ${record.MANAGER_PHONE === null ? '' : `(${record.MANAGER_PHONE})`}`
                }
            },
        },
    ]

    return <Table size='middle' rowKey='Org_Code' loading={isLoading} dataSource={data} columns={columns} pagination={false} onChange={onChange} />
}

TableStore.propTypes = {
    data: PropTypes.array,
    isLoading: PropTypes.bool,
    onChange: PropTypes.func,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
}

TableStore.defaultProps = {
    data: null,
    isLoading: false,
    onChange: () => {},
    onEdit: () => {},
    onDelete: () => {},
}

export default TableStore
