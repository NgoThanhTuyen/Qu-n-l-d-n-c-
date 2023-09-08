import { Select } from 'antd'
import React, { useEffect, useState } from 'react'
import apiUtil from '../../utils/apiUtil'

const { Option } = Select

function SelectImgCatUpload(props) {
    const { storeId, imgRequestId, parentID, ...restProps } = props

    const [data, setData] = useState([])

    useEffect(() => {
        apiUtil.auth
            .query({
                name: 'IMG_REQUEST_SELECT_IMG_CAT_SUM_BY_PARENT_ID',
                param: {
                    STORE_ID: parseInt(storeId),
                    IMG_REQUEST_ID: imgRequestId,
                    PARENT_ID: parentID === null || parentID === undefined ? 0 : parentID,
                },
            })
            .then((data) => {
                setData(data.Result)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const options = data.map((d, index) => (
        <Option disabled={d.MIN_UPLOAD <= (d.TOTAL_UPLOAD + d.TOTAL_REJECT)} value={d.IMG_REQUEST_CAT_ID} label={d.IMG_CAT_NAME} key={index}>
            {d.IMG_CAT_NAME} ({d.TOTAL_UPLOAD}/{d.MIN_UPLOAD}) {d.MIN_UPLOAD <= d.TOTAL_UPLOAD + d.TOTAL_REJECT ? <span className='text-danger'> - Đã đủ SL ảnh </span> : ''}
        </Option>
    ))

    return (
        <Select
            placeholder='Chọn nhóm hình ảnh...'
            allowClear
            showSearch={false}
            showArrow
            defaultActiveFirstOption={false}
            filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
            className='w-100'
            {...restProps}
        >
            {options}
        </Select>
    )
}

export default SelectImgCatUpload
