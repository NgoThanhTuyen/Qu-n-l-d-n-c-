import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Popconfirm, Space, Table, Tag } from 'antd'
import PropTypes from 'prop-types'
import { RowAction } from './../../../../components'

function TableOrgnize(props) {

    const { data, isLoading, onChange, onEdit, onDelete } = props

    const columns = [
        {
            key: '1',
            title: 'Id',
            dataIndex: 'id'
        },
        {
            key: '2',
            title: 'Họ và tên',
            dataIndex: 'name'
        },
        {
            key: '3',
            title: 'email',
            dataIndex: 'email'
        },
        {
            key: '4',
            title: 'Địa chỉ',
            dataIndex: 'address'
        },
        {
            key: '5',

            title: 'Thao tác',
            align: 'right',
            // render: (record) => {
            //     return (
            //         <Space>
            //             <RowAction icon={<EditOutlined />} title='Sửa' onClick={() => onEditOutlined(record)} />
            //             <RowAction icon={<DeleteOutlined style={{ color: 'red' }} />} title='Xóa' onClick={() => onDeleteOutlined(record)} />
            //         </Space>
            //     )
            // }
        },
    ]

    return <Table size='middle' rowKey='Org_Code' loading={isLoading} dataSource={data} columns={columns} pagination={false} onChange={onChange} />
}

TableOrgnize.propTypes = {
    data: PropTypes.array,
    isLoading: PropTypes.bool,
    onChange: PropTypes.func,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
}

TableOrgnize.defaultProps = {
    data: null,
    isLoading: false,
    onChange: () => { },
    onEdit: () => { },
    onDelete: () => { },
}

export default TableOrgnize
