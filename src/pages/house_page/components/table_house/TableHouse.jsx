import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Popconfirm, Space, Table, Tag } from 'antd'
import PropTypes from 'prop-types'
import { RowAction } from '../../../../components'

function TableHouse(props) {

    const { data, isLoading, onChange, onEdit, onDelete } = props

    const columns = [
        {
            key: '1',
            title: 'Họ và tên người đại diện',
            dataIndex: 'name'
        },
        {
            key: '2',
            title: 'CMND/CCCD',
            dataIndex: 'CMND/CCCD'
        },
        {
            key: '3',
            title: 'Số điện thoại',
            dataIndex: 'Số điện thoại'
        }, 
        {
            key: '4',
            title: 'Địa chỉ nhà',
            dataIndex: 'Địa chỉ nhà'
        },
         {
            key: '5',
            title: 'Thao tác',
            dataIndex: 'Thao tác'
        },
    ]

    return <Table size='middle' rowKey='Org_Code' loading={isLoading} dataSource={data} columns={columns} pagination={false} onChange={onChange} />
}

TableHouse.propTypes = {
    data: PropTypes.array,
    isLoading: PropTypes.bool,
    onChange: PropTypes.func,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
}

TableHouse.defaultProps = {
    data: null,
    isLoading: false,
    onChange: () => { },
    onEdit: () => { },
    onDelete: () => { },
}

export default TableHouse
