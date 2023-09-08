import React, { useState } from 'react'
import { FitleDeclaretemporaryAbsence, TableDeclaretemporaryAbsence } from './components'
import { Form, Tabs } from 'antd'

function DeclareTemporaryAbsencePage(props) {
    const [form] = Form.useForm()

    const [filters, setFilters] = useState({
        Key_Search: '',
    })

    const [tabActive, setTabActive] = useState('1')

    const tabItems = [
        {
            label: 'SUMMARY (F1)',
            key: '1',
            children: (
                <TableDeclaretemporaryAbsence
                    filters={filters}
                    setFilters={setFilters}
                    onChange={(pagInfo) => {
                        const newFilters = { ...filters, PageIndex: pagInfo.current }
                        setFilters(newFilters)
                    }}
                />
            ),
        },
        {
            label: 'INPUT (F2)',
            key: '2',
            children: (
                <FitleDeclaretemporaryAbsence
                    onFillData={(record) => {
                        form.setFieldsValue(record.Obj_Value)
                    }}
                />
            ),
        },
    ]
    return (
        <>
            <Tabs
                tabBarStyle={{ marginBottom: 0, fontWeight: 600 }}
                type='card'
                items={tabItems}
                activeKey={tabActive}
                onChange={(tab) => setTabActive(tab)}
                onTabClick={(tab) => {
                    if (tab === '2') {
                        form.resetFields()
                    }
                }}
            />
        </>
    )
}

export default DeclareTemporaryAbsencePage
