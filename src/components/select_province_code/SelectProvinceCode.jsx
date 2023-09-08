/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Select } from 'antd'
import apiUtil from '../../utils/apiUtil'

const { Option } = Select

function SelectProvinceCode(props) {
    const [data, setData] = useState([])
    const [isBusy, setIsBusy] = useState(true)

    useEffect(() => {
        apiUtil.auth
            .query({ name: 'PROVINCE_SELECT_ALL' })
            .then((data) => {
                setData(data.Result)
            })
            .finally(() => {
                setIsBusy(false)
            })
    }, [])

    const options = data.map((d) => (
        <Option value={d.PROVINCE_CODE} key={d.PROVINCE_CODE} label={`${d.PROVINCE_CODE} - ${d.PROVINCE_NAME}`}>
            {d.PROVINCE_CODE} - {d.PROVINCE_NAME}
        </Option>
    ))

    return (
        <Select
            placeholder='Chọn tỉnh thành...'
            optionLabelProp='label'
            allowClear
            showSearch
            showArrow
            filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
            className='w-100'
            loading={isBusy}
            {...props}
        >
            {options}
        </Select>
    )
}

export default SelectProvinceCode

// import { Select, Spin } from 'antd'
// import React, { useEffect, useState } from 'react'
// import apiUtil from '../../utils/apiUtil'
// import PropTypes from 'prop-types'

// const { Option } = Select

// let timeout
// let currentValue

// const fetch = (value, callback, setIsBusy, showAll) => {
//     if (timeout) {
//         clearTimeout(timeout)
//         timeout = null
//     }

//     currentValue = value

//     const fake = () => {
//         setIsBusy(true)
//         apiUtil.auth
//             .query({
//                 name: 'PROVINCE_SELECT_ALL',
//                 param: {
//                     KEY_WORD: value
//                 },
//             })
//             .then((data) => {
//                 if (currentValue === value) {
//                     var result = data.Result.map((item) => ({
//                         value: item.PROVINCE_CODE,
//                         text: item.PROVINCE_CODE + " - " + item.PROVINCE_NAME,
//                     }))
//                     if (showAll) {
//                         result.unshift({
//                             value: '',
//                             text: 'Tất cả',
//                         })
//                     }
//                     callback(result)
//                 }
//             })
//             .finally(() => setIsBusy(false))
//     }

//     timeout = setTimeout(fake, 300)
// }

// function SelectProvinceCode(props) {
//     const { value, onChange, serieList, className, showAll = false, allowClear = true } = props

//     const [data, setData] = useState([])
//     const [selectedValue, setSelectedValue] = useState()

//     const [isBusy, setIsBusy] = useState(false)

//     const triggerChange = (changedValue) => {
//         onChange?.(changedValue)
//     }

//     const handleSearch = (newValue) => {
//         fetch(newValue, setData, setIsBusy, showAll)
//     }

//     const handleChange = (newValue) => {
//         setSelectedValue(newValue)
//         triggerChange(newValue)
//     }

//     const options = data.map((d,index) => (
//         <Option value={d.value} key={index}>
//             {d.text}
//         </Option>
//     ))

//     useEffect(() => {
//         if (serieList !== undefined && serieList !== null) {
//             setData(serieList)
//         }
//     }, [serieList])

//     useEffect(() => {
//         if (value !== undefined && value !== null) {
//             setSelectedValue(value)
//         }
//     }, [value])

//     return (
//         <Select
//             allowClear={allowClear}
//             showSearch
//             value={selectedValue}
//             placeholder='Tên tỉnh thành'
//             defaultActiveFirstOption={false}
//             showArrow={true}
//             filterOption={false}
//             onSearch={handleSearch}
//             onChange={handleChange}
//             className={className}

//             onDropdownVisibleChange={(open) => {
//                 if (open) {
//                     if (data.length === 0 || serieList.length === 1) {
//                         setData([])
//                         handleSearch('')
//                     }
//                 }
//             }}
//             notFoundContent={
//                 isBusy ? (
//                     <div className='text-center'>
//                         <Spin size='small' />
//                     </div>
//                 ) : null
//             }
//             loading={isBusy}
//             onFocus={() => {

//             }}
//         >
//             {options}
//         </Select>
//     )
// }

// SelectProvinceCode.propTypes = {
//     value: PropTypes.any,
//     onChange: PropTypes.func,
//     serieList: PropTypes.array,
//     className: PropTypes.string,
//     onClear: PropTypes.func,
// }

// SelectProvinceCode.defaultProps = {
//     value: {},
//     onChange: () => { },
//     serieList: [],
//     className: 'w-100',
//     onClear: () => { },
// }
// export default SelectProvinceCode
