import { Table } from 'antd'
import PropTypes from 'prop-types'

function Table2(props) {
    const { data, isLoading, onChange } = props

    const columns = [
        {
            key: '1',
            title: 'Id',
            dataIndex: 'name',
        },
        {
            key: '2',
            title: 'Họ và tên',
            dataIndex: 'CMND/CCCD',
        },
        {
            key: '2',
            title: 'Thời gian login',
            dataIndex: 'CMND/CCCD',
        },
        {
            key: '2',
            title: 'Thời gian logout',
            dataIndex: 'CMND/CCCD',
        },
    ]

    return <Table size='middle' rowKey='Org_Code' loading={isLoading} dataSource={data} columns={columns} pagination={false} onChange={onChange} />
}

Table2.propTypes = {
    data: PropTypes.array,
    isLoading: PropTypes.bool,
    onChange: PropTypes.func,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
}

Table2.defaultProps = {
    data: null,
    isLoading: false,
    onChange: () => {},
    onEdit: () => {},
    onDelete: () => {},
}

export default Table2
