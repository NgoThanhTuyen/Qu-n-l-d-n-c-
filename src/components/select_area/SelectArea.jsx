import { Select } from 'antd'
import React, { useEffect, useState } from 'react'
import apiUtil from '../../utils/apiUtil'

const { Option } = Select

function SelectArea(props) {
    const [data, setData] = useState([])
    const [isBusy, setIsBusy] = useState(true)

    useEffect(() => {
        apiUtil.auth
            .query({ name: 'AREA_SELECT_ALL' })
            .then((data) => {
                setData(data.Result)
            })
            .finally(() => {
                setIsBusy(false)
            })
    }, [])

    const options = data.map((item) => (
        <Option value={item.AREA_CODE} key={item.AREA_CODE} label={item.AREA_CODE + item.AREA_NAME}>
            {item.AREA_CODE} - {item.AREA_NAME}
        </Option>
    ))

    return (
        <Select placeholder='Chọn khu vực...' allowClear showSearch showArrow filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())} className='w-100' loading={isBusy} {...props}>
            {options}
        </Select>
    )
}

export default SelectArea
