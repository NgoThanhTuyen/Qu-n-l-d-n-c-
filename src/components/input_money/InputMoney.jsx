import { InputNumber } from 'antd'
import React from 'react'

const minQty = 0
const maxQty = 1_000_000_000

function InputMoney(props) {
    return (
        <InputNumber
            className='w-100 input_money'
            min={minQty}
            max={maxQty}
            addonAfter='#'
            controls={!1}
            precision={0}
            {...props}
            keyboard={false}
        />
    )
}

export default InputMoney
