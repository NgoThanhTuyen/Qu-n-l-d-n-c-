import { Select } from 'antd'
import React, { useEffect, useState } from 'react'
import apiUtil from '../../utils/apiUtil'

const { Option } = Select

let timeout
let currentValue

const fetch = (value, callback, setIsBusy) => {
    if (timeout) {
        clearTimeout(timeout)
        timeout = null
    }

    currentValue = value
    const fake = () => {
        setIsBusy(true)
        apiUtil.auth
            .query({
                name: 'STORE_SELECT_DROPDOWN',
                param: { KEY_WORD: value },
            })
            .then((data) => {
                if (currentValue === value) {
                    const result = data.Result.map((item) => ({
                        value: item.STORE_ID,
                        text: '[' + item.STORE_CODE + '] ' + item.STORE_NAME,
                    }))
                    callback(result)
                }
            })
            .finally(() => setIsBusy(false))
    }

    timeout = setTimeout(fake, 300)
}

function SelectStoreId(props) {
    const { value, allowClear, onChange, serieList } = props

    const [data, setData] = useState([])
    const [selectedValue, setSelectedValue] = useState()

    const [isBusy, setIsBusy] = useState(false)

    const triggerChange = (changedValue) => {
        onChange?.(changedValue)
    }

    const handleSearch = (newValue) => {
        fetch(newValue, setData, setIsBusy)
    }

    const handleChange = (newValue) => {
        setSelectedValue(newValue)
        triggerChange(newValue)
    }

    const options = data.map((d, index) => (
        <Option value={d.value} key={index}>
            {d.text}
        </Option>
    ))

    useEffect(() => {
        if (serieList !== undefined && serieList !== null) {
            setData(serieList)
        }
    }, [serieList])

    useEffect(() => {
        if (value !== undefined && value !== null) {
            setSelectedValue(value)
        }
    }, [value])

    return (
        <Select
            
            allowClear={allowClear}
            showSearch
            value={selectedValue}
            placeholder='Chọn cửa hàng...'
            defaultActiveFirstOption={false}
            showArrow={true}
            filterOption={false}
            onSearch={handleSearch}
            onChange={handleChange}
            className='w-100'
            onDropdownVisibleChange={(open) => {
                if (open) {
                    if (data.length === 0) {
                        handleSearch('')
                    }
                }
            }}
            loading={isBusy}
            style={{ width: 300 }}
        >
            {options}
        </Select>
    )
}

export default SelectStoreId
