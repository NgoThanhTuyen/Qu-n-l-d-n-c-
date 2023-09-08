/* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect, useState } from 'react'
import { Select } from 'antd'
// import apiUtil from '../../utils/apiUtil'

// const { Option } = Select

function SelectProvinceCode(props) {
    // const [data, setData] = useState([])
    // const [isBusy, setIsBusy] = useState(true)

    // useEffect(() => {
    //     apiUtil.auth
    //         .query({ name: 'PROVINCE_SELECT_ALL' })
    //         .then((data) => {
    //             setData(data.Result)
    //         })
    //         .finally(() => {
    //             setIsBusy(false)
    //         })
    // }, [])

    // const options = data.map((d) => (
    //     <Option value={d.PROVINCE_CODE} key={d.PROVINCE_CODE} label={`${d.PROVINCE_CODE} - ${d.PROVINCE_NAME}`}>
    //         {d.PROVINCE_CODE} - {d.PROVINCE_NAME}
    //     </Option>
    // ))

    return (
        <Select
            placeholder='Chọn tỉnh thành...'
            optionLabelProp='label'
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

export default SelectProvinceCode
