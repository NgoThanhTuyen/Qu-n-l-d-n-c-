import { Select } from 'antd'
// import React, { useEffect, useState } from 'react'
// import apiUtil from '../../utils/apiUtil'

// const { Option } = Select

function SelectSalePartner(props) {
    // const [data, setData] = useState([])
    // const [isBusy, setIsBusy] = useState(true)

    // useEffect(() => {
    //     apiUtil.auth
    //         .query({ name: 'SALE_PARTNER_SELECT_ALL' })
    //         .then((data) => {
    //             setData(data.Result)
    //         })
    //         .finally(() => {
    //             setIsBusy(false)
    //         })
    // }, [])

    // const options = data.map((d) => (
    //     <Option value={d.SALE_PARTNER_ID} key={d.SALE_PARTNER_ID} label={d.PARTNER_NAME}>
    //         {d.PARTNER_NAME}
    //     </Option>
    // ))

    return (
        <Select
            placeholder='Chọn đối tác bán lẻ...'
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

export default SelectSalePartner
