import { Pie } from '@ant-design/charts'
import React from 'react'

function ChartDonut(props) {
    const { data } = props

    const config = {
        data,
        appendPadding: 10,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.6,
        interactions: [
            {
                type: 'element-selected',
            },
            {
                type: 'element-active',
            },
        ],
        legend: {
            position: 'bottom',
        },
    }
    return <Pie {...config} />
}

export default ChartDonut
