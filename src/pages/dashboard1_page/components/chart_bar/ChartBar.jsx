import { Bar } from '@ant-design/charts'
import React from 'react'

function ChartBar(props) {
    const { data } = props

    const config = {
        data,
        xField: 'value',
        yField: 'type',
        barWidthRatio: 0.8,
        label: {},
        meta: {
            value: {
                alias: 'Personnel',
            },
        },
    }
    return <Bar {...config} />
}

export default ChartBar
