import { Card, Space } from 'antd'
import React, { useState } from 'react'
import { FilterStore, ModalAdd, TableStore, ModalExcelStore } from './components'

function StorePage(props) {
    const [isShowModalAdd, setIsShowModalAdd] = useState(false)
    const [isOpenModalStoreExcel, setIsOpenModalStoreExcel] = useState(false)
    const [filters, setFilters] = useState({
        Key_Search: '',
    })

    const [isLoadingStorePage] = useState(true)

    return (
        <>
            <Space direction='vertical' className='w-100' size='small'>
                <Card size='small'>
                    <FilterStore
                        filters={filters}
                        onAdd={() => setIsShowModalAdd(true)}
                        onChange={(values) => {
                            setFilters(values)
                        }}
                        onOpenImport={() => setIsOpenModalStoreExcel(true)}
                    />
                </Card>
                <Card bodyStyle={{ padding: 0 }}>
                    <TableStore
                        // isLoading={isLoadingStorePage}
                        onChange={(pagInfo) => {
                            const newFilters = { ...filters, PageIndex: pagInfo.current }
                            setFilters(newFilters)
                        }}
                    />
                </Card>
                <ModalAdd
                    isLoading={isLoadingStorePage}
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
            <ModalExcelStore isShow={isOpenModalStoreExcel} onCancel={() => setIsOpenModalStoreExcel(false)} />
        </>
    )
}

export default StorePage
