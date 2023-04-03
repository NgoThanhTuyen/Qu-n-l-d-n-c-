import React, { useState } from 'react'
import { FitleHouse, ModalAdd, TableHouse } from './components'
import { Card, Space } from 'antd'

function HousePage(props) {

    const [isShowModalAdd, setIsShowModalAdd] = useState(false)

    const [filters, setFilters] = useState({
        Key_Search: '',
    })

    const [organizeTable, setorganizeTable] = useState([])

    const [isLoadingHousePage] = useState(true)

    return (
        <Space direction='vertical' className='w-100' size='small'>
            <Card size='small'>
                <FitleHouse
                    filters={filters}
                    onAdd={() => setIsShowModalAdd(true)}
                    onChange={(values) => {
                        setFilters(values)
                    }}
                />
            </Card>
            <Card bodyStyle={{ padding: 0 }}>
                <TableHouse
                    data={organizeTable}
                    isLoading={isLoadingHousePage}
                    onChange={(pagInfo) => {
                        const newFilters = { ...filters, PageIndex: pagInfo.current }
                        setFilters(newFilters)
                    }}
                />
            </Card>
            <ModalAdd
                isLoading={isLoadingHousePage}
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

export default HousePage
