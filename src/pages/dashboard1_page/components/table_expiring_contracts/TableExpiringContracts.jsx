import { Table } from 'antd'
import React from 'react'

function TableExpiringContracts(props) {
    const { data } = props
    const columns = [
        { title: 'Contract code', dataIndex: 'contract_code' },
        { title: 'Employee code', dataIndex: 'employee_code' },
        { title: 'Full name', dataIndex: 'full_name' },
        { title: 'Position', dataIndex: 'position' },
        { title: 'Departments', dataIndex: 'departments' },
        { title: 'Contract start time', dataIndex: 'contract_start_time' },
        { title: 'Contract end time', dataIndex: 'contract_end_time' },
        { title: 'Contract expiration time', dataIndex: 'contract_expiration_time' },
    ]
    return <Table columns={columns} dataSource={data} pagination={false} rowKey='contract_code' />
}

export default TableExpiringContracts
