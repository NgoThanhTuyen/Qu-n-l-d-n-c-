import React, { useState } from 'react'
import { FitleDeclaretemporaryAbsence, ModalAdd, TableDeclaretemporaryAbsence } from './components'
import { Card, Space } from 'antd'

function DeclareTemporaryAbsencePage(props) {

    const [isShowModalAdd, setIsShowModalAdd] = useState(false)

    const [filters, setFilters] = useState({
        Key_Search: '',
    })

    const [organizeTable, setorganizeTable] = useState([])

    const [isLoadingDeclareTemporaryAbsencePage] = useState(true)

    return (
        <Space direction='vertical' className='w-100' size='small'>
            <Card size='small'>
                <FitleDeclaretemporaryAbsence
                    filters={filters}
                    onAdd={() => setIsShowModalAdd(true)}
                    onChange={(values) => {
                        setFilters(values)
                    }}
                />
            </Card>
            <Card bodyStyle={{ padding: 0 }}>
                <TableDeclaretemporaryAbsence
                    data={organizeTable}
                    // isLoading={isLoadingDeclareTemporaryAbsencePage}
                    onChange={(pagInfo) => {
                        const newFilters = { ...filters, PageIndex: pagInfo.current }
                        setFilters(newFilters)
                    }}
                />
            </Card>
            <ModalAdd
                isLoading={isLoadingDeclareTemporaryAbsencePage}
                isShow={isShowModalAdd}
                onSave={() => {
                    setIsShowModalAdd(false)
                    // Reload table
                    const newFilters = { ...filters, current: 1 }
                    setFilters(newFilters)
                }}
                onCancel={() => setIsShowModalAdd(false)}
            />
        </Space>
    )
}

export default DeclareTemporaryAbsencePage
