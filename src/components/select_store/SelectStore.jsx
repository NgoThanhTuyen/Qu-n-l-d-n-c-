import { Select, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import apiUtil from '../../utils/apiUtil'
import PropTypes from 'prop-types'

const { Option } = Select


function SelectStore(props) {
    const { value, onChange, serieList, showAllProp } = props

    const [data, setData] = useState([])
    const [selectedValue, setSelectedValue] = useState()

    const [isBusy, setIsBusy] = useState(false)


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
                    name: 'STORE_SELECT_PAGINATION_DATA',
                    param: {
                        PAGE_SIZE: 10,
                        PAGE_INDEX: 1,
                        KEY_WORD: value
                    },
                })
                .then((data) => {
                    if (currentValue === value) {
                        const result = data.Result.map((item) => ({
                            value: item.STORE_CODE,
                            text: item.STORE_CODE + " - " + item.STORE_NAME,
                        }))
                        if (showAllProp) {
                            result.unshift({ text: "Tất cả cửa hàng", value: '' })
                        }
                        callback(result)
                    }
                })
                .finally(() => setIsBusy(false))
        }

        timeout = setTimeout(fake, 300)
    }

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

    const options = data.map((d) => (
        <Option value={d.value} key={d.value}>
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
            showSearch
            value={selectedValue}
            placeholder='Tên cửa hàng'
            defaultActiveFirstOption={false}
            showArrow={true}
            onClear={() => {
                if (data.length !== 0) {
                    handleSearch('')
                }
            }}
            filterOption={false}
            onSearch={handleSearch}
            onChange={handleChange}
            className='w-100'
            onDropdownVisibleChange={(open) => {
                if (open) {
                    if (data.length === 0 || serieList.length === 1 || data[0].value === '') {
                        setData([])
                        handleSearch('')
                    }
                }
            }}
            notFoundContent={
                isBusy ? (
                    <div className='text-center'>
                        <Spin size='small' />
                    </div>
                ) : null
            }
            loading={isBusy}
        >
            {options}
        </Select>
    )
}
SelectStore.propTypes = {
    value: PropTypes.any,
    onChange: PropTypes.func,
    serieList: PropTypes.array,
    showAllProp: PropTypes.bool,
}

SelectStore.defaultProps = {
    value: {},
    onChange: () => { },
    serieList: [],
    showAllProp: false,
}

export default SelectStore