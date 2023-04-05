import React, { useState } from 'react'
import { FitleTemporaryregistration, ModalAdd, TableTemporaryregistration } from './components'
import { Card, Space } from 'antd'

function TemporaryRegistrationPage(props) {

    const [isShowModalAdd, setIsShowModalAdd] = useState(false)

    const [filters, setFilters] = useState({
        Key_Search: '',
    })

    const [organizeTable, setorganizeTable] = useState([])

    const [isLoadingTemporaryRegistrationPage] = useState(true)

    return (
        <Space direction='vertical' className='w-100' size='small'>
            <Card size='small'>
                <FitleTemporaryregistration
                    filters={filters}
                    onAdd={() => setIsShowModalAdd(true)}
                    onChange={(values) => {
                        setFilters(values)
                    }}
                />
            </Card>
            <Card bodyStyle={{ padding: 0 }}>
                <TableTemporaryregistration
                    data={organizeTable}
                    // isLoading={isLoadingTemporaryRegistrationPage}
                    onChange={(pagInfo) => {
                        const newFilters = { ...filters, PageIndex: pagInfo.current }
                        setFilters(newFilters)
                    }}
                />
            </Card>
            <ModalAdd
                isLoading={isLoadingTemporaryRegistrationPage}
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

export default TemporaryRegistrationPage
