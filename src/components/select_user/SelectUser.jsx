import { Select, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import apiUtil from '../../utils/apiUtil'
import PropTypes from 'prop-types'

const { Option } = Select

let timeout
let currentValue

const fetch = (value, callback, setIsBusy, showAll) => {
    if (timeout) {
        clearTimeout(timeout)
        timeout = null
    }

    currentValue = value

    const fake = () => {
        setIsBusy(true)
        apiUtil.auth
            .query({
                name: 'USER_SELECT_PAGINATION_DATA',
                param: {
                    PAGE_SIZE: 10,
                    PAGE_INDEX: 1,
                    KEY_WORD: value,
                    STORE_ID: 0,
                    ROLE_ID: 0,
                },
            })
            .then((data) => {
                if (data.IsSuccess) {
                    if (currentValue === value) {
                        var result = data.Result.map((item) => ({
                            value: item.USER_ID,
                            text: item.USER_NAME + (!item.FULL_NAME ? '' : ' - ' + item.FULL_NAME),
                        }))
                        if (showAll) {
                            result.unshift({
                                value: 0,
                                text: 'Tất cả',
                            })
                        }
                        callback(result)
                    }
                }
            })
            .finally(() => setIsBusy(false))
    }

    timeout = setTimeout(fake, 300)
}

function SelectUser(props) {
    const { value, onChange, serieList, showAll = false, allowClear = true } = props

    const [data, setData] = useState([])
    const [selectedValue, setSelectedValue] = useState()

    const [isBusy, setIsBusy] = useState(false)

    const triggerChange = (changedValue) => {
        onChange?.(changedValue)
    }

    const handleSearch = (newValue) => {
        fetch(newValue, setData, setIsBusy, showAll)
    }

    const handleChange = (newValue) => {
        setSelectedValue(newValue)
        triggerChange(newValue)
    }

    useEffect(() => {
        if (serieList !== undefined && serieList !== null) {
            setData(serieList)
        }
    }, [serieList])

    useEffect(() => {
        if (value !== undefined && value !== null) {
            setSelectedValue(value)
        } else {
            setSelectedValue(undefined) // Gán giá trị mặc định là undefined
        }
    }, [value])

    const options = data
        .filter((d) => d.value !== null)
        .map((d, index) => (
            <Option value={d.value} key={index}>
                {d.text}
            </Option>
        ))

    return (
        <Select
            allowClear={allowClear}
            showSearch
            value={selectedValue}
            placeholder='Nhập họ tên, tài khoản...'
            defaultActiveFirstOption={false}
            showArrow={true}
            filterOption={false}
            onSearch={handleSearch}
            onChange={handleChange}
            className='w-100'
            onDropdownVisibleChange={(open) => {
                if (open) {
                    if (data.length === 0 || data[0].value === 0) {
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

SelectUser.propTypes = {
    value: PropTypes.any,
    onChange: PropTypes.func,
    serieList: PropTypes.array,
}

SelectUser.defaultProps = {
    value: {},
    onChange: () => {},
    serieList: [],
}

export default SelectUser
