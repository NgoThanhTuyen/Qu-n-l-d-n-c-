import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Popconfirm, Space, Table, Tag } from 'antd'
import PropTypes from 'prop-types'
import { RowAction } from '../../../../components'

function TableDeclaretemporaryAbsence(props) {

    const { data, isLoading, onChange, onEdit, onDelete } = props

    const columns = [
        {
            title: 'Họ và tên người đại diện',
            dataIndex: 'name'
        },
        {
            title: 'Ngày sinh',
            dataIndex: 'NS'
        },
        {
            title: 'Giới tính',
            dataIndex: 'GT'
        },
        {
            title: 'CMND/CCCD',
            dataIndex: 'CMND/CCCD'
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'SDT'
        },
        {
            title: 'Nơi thường trú',
            dataIndex: 'NTT'
        },
        {
            title: 'Nơi tạm trú',
            dataIndex: 'NTTR'
        },
        {
            title: 'Nơi ở hiện tại',
            dataIndex: 'NOHT'
        },
        {
            title: 'Địa chỉ nhà',
            dataIndex: 'DCN'
        },
        {
            title: 'Thao tác',
            dataIndex: 'TT'
        },
    ]

    return <Table size='middle' rowKey='Org_Code' loading={isLoading} dataSource={data} columns={columns} pagination={false} onChange={onChange} />
}

TableDeclaretemporaryAbsence.propTypes = {
    data: PropTypes.array,
    isLoading: PropTypes.bool,
    onChange: PropTypes.func,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
}

TableDeclaretemporaryAbsence.defaultProps = {
    data: null,
    isLoading: false,
    onChange: () => { },
    onEdit: () => { },
    onDelete: () => { },
}

export default TableDeclaretemporaryAbsence
