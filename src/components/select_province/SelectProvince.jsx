// import React, { useEffect, useState } from 'react'
import { Select } from 'antd'
// import apiUtil from '../../utils/apiUtil'

// const { Option } = Select

function SelectProvince(props) {
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
    //     <Option value={d.PROVINCE_ID} key={d.PROVINCE_ID} label={d.PROVINCE_CODE + d.PROVINCE_NAME}>
    //         {d.PROVINCE_CODE} - {d.PROVINCE_NAME}
    //     </Option>
    // ))

    return (
        <Select
            placeholder='Chọn tỉnh thành...'
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

export default SelectProvince

// import { Select, Spin } from 'antd'
// import React, { useEffect, useState } from 'react'
// import apiUtil from '../../utils/apiUtil'
// import PropTypes from 'prop-types'

// const { Option } = Select

// let timeout
// let currentValue

// const fetch = (value, callback, setIsBusy) => {
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
//                     const result = data.Result.map((item) => ({
//                         value: item.PROVINCE_ID,
//                         text: item.PROVINCE_CODE + " - " + item.PROVINCE_NAME,
//                     }))
//                     callback(result)
//                 }
//             })
//             .finally(() => setIsBusy(false))
//     }

//     timeout = setTimeout(fake, 300)
// }

// function SelectProvince(props) {
//     const { value, onChange, serieList } = props

//     const [data, setData] = useState([])
//     const [selectedValue, setSelectedValue] = useState()

//     const [isBusy, setIsBusy] = useState(false)

//     const triggerChange = (changedValue) => {
//         onChange?.(changedValue)
//     }

//     const handleSearch = (newValue) => {
//         fetch(newValue, setData, setIsBusy)
//     }

//     const handleChange = (newValue) => {
//         setSelectedValue(newValue)
//         triggerChange(newValue)
//     }

//     const options = data.map((d) => (
//         <Option value={d.value} key={d.value}>
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
//             showSearch
//             value={selectedValue}
//             placeholder='Tên tỉnh thành'
//             defaultActiveFirstOption={false}
//             showArrow={true}
//             filterOption={false}
//             onClear={() => {
//                 if (data.length !== 0) {
//                     handleSearch('')
//                 }
//             }}
//             onSearch={handleSearch}
//             onChange={handleChange}
//             className='w-100'
//             onDropdownVisibleChange={(open) => {
//                 if (open) {
//                     if (data.length === 0) {
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
//         >
//             {options}
//         </Select>
//     )
// }

// SelectProvince.propTypes = {
//     value: PropTypes.any,
//     onChange: PropTypes.func,
//     serieList: PropTypes.array,
// }

// SelectProvince.defaultProps = {
//     value: {},
//     onChange: () => { },
//     serieList: [],
// }
// export default SelectProvince
