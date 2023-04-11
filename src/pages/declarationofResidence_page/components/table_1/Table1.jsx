import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Popconfirm, Space, Table, Tag } from 'antd'
import PropTypes from 'prop-types'
import { RowAction } from '../../../../components'

function Table1(props) {

    const { data, isLoading, onChange, onEdit, onDelete } = props

    const columns = [
        {
            key: '1',
            title: 'Id',
            dataIndex: 'Id'
        },
        {
            key: '2',
            title: 'Series',
            dataIndex: 'Series'
        },
        {
            key: '3',
            title: 'Tình trạng',
            dataIndex: 'tt'
        },
    ]

    return <Table size='middle' rowKey='Org_Code' loading={isLoading} dataSource={data} columns={columns} pagination={false} onChange={onChange} />
}

Table1.propTypes = {
    data: PropTypes.array,
    isLoading: PropTypes.bool,
    onChange: PropTypes.func,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
}

Table1.defaultProps = {
    data: null,
    isLoading: false,
    onChange: () => { },
    onEdit: () => { },
    onDelete: () => { },
}

export default Table1
