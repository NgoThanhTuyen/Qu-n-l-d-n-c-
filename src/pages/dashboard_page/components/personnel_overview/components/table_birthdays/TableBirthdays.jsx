import React from 'react'
import { Table } from 'antd'

function TableBirthdays(props) {
    const { data } = props

    const columns = [
        { title: 'Employee code', dataIndex: 'employee_code' },
        { title: 'Full name', dataIndex: 'full_name' },
        { title: 'Gender', dataIndex: 'gender' },
        { title: 'Position', dataIndex: 'position' },
        { title: 'Departments', dataIndex: 'departments' },
        { title: 'Birthday', dataIndex: 'birthday' },
        { title: 'Month seniority', dataIndex: '' },
        { title: 'Seniority code', dataIndex: '' },
    ]
    return <Table columns={columns} dataSource={data} pagination={false} rowKey='employee_code' />
}

export default TableBirthdays
