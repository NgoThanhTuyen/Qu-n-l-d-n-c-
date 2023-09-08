import React, { useEffect, useState } from 'react'
import { Select } from 'antd'
import apiUtil from '../../utils/apiUtil'

const { Option } = Select

function SelectTypeReno(props) {
    const [data, setData] = useState([])
    const [isBusy, setIsBusy] = useState(true)

    useEffect(() => {
        apiUtil.auth
            .query({ name: 'RENO_TYPES_SELECT_ALL', param: { STATUS: 0 } })
            .then((data) => {
                let options = data.Result
                setData(options)
            })
            .finally(() => {
                setIsBusy(false)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const options = data.map((d) => (
        <Option value={d.RENO_TYPE_ID} key={d.RENO_TYPE_ID} label={d.RENO_TYPE_NAME + d.RENO_TYPE_NAME}>
            {d.RENO_TYPE_NAME}
        </Option>
    ))

    return (
        <Select placeholder='Loại hạng mục ' showSearch allowClear showArrow className='w-100' filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())} loading={isBusy} {...props}>
            {options}
        </Select>
    )
}

export default SelectTypeReno
