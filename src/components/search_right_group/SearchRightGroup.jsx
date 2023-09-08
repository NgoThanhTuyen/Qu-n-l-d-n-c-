import React, { useEffect, useState } from 'react'
import { Select } from 'antd'
import apiUtil from '../../utils/apiUtil'
const { Option } = Select

/**Dùng cho trang phân quyền động (Chưa sử dụng) */
const SearchRightGroup = (props) => {
    // eslint-disable-next-line
    const { value = {}, onChange, serieList } = props

    const [selectedValue, setSelectedValue] = useState()

    const triggerChange = (changedValue) => {
        onChange?.(changedValue)
    }
    const onSearch = (value) => {
        loadData()
    }

    const handleChange = (newValue) => {
        setSelectedValue(newValue)
        triggerChange(newValue)
    }
    const [dataSearch, setDataSearch] = useState([])

    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        apiUtil.auth.query({ name: 'RIGHT_GROUP_SELECT_ALL' }).then((data) => {
            if (data.IsSuccess) {
                setDataSearch(data.Result)
            }
        })
    }

    return (
        <Select
            showSearch
            placeholder='Chọn nhóm quyền...'
            allowClear
            className='w-100'
            value={selectedValue}
            optionFilterProp='children'
            onChange={handleChange}
            onSearch={onSearch}
            filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
        >
            {dataSearch.length !== 0
                ? dataSearch.map((item, index) => {
                      return (
                          <Option key={index} value={item.GROUP_ID}>
                              {item.GROUP_ID}
                          </Option>
                      )
                  })
                : null}
        </Select>
    )
}

export default SearchRightGroup
