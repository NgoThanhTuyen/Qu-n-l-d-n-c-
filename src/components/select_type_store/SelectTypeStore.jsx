// import React, { useEffect, useState } from 'react'
import { Select } from 'antd'
// import apiUtil from '../../utils/apiUtil'

// const { Option } = Select

function SelectTypeStore(props) {
    // const [data, setData] = useState([])
    // const [isBusy, setIsBusy] = useState(true)

    // useEffect(() => {
    //     apiUtil.auth
    //         .query({ name: 'STORE_TYPE_SELECT' })
    //         .then((data) => {
    //             setData(data.Result)
    //         })
    //         .finally(() => {
    //             setIsBusy(false)
    //         })
    // }, [])

    // const options = data.map((d) => (
    //     <Option value={d.STORE_TYPE_NAME} key={d.STORE_TYPE_ID} label={d.RENO_TYPE_NAME}>
    //         {d.STORE_TYPE_NAME}
    //     </Option>
    // ))

    return (
        <Select
            placeholder='Chọn loại cửa hàng...'
            allowClear
            showSearch
            showArrow
            filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
            className='w-100'
            // loading={isBusy}
            {...props}
        >
            {/* {options} */}
        </Select>
    )
}

export default SelectTypeStore
