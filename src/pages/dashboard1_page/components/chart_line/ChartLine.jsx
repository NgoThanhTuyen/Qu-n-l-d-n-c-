import React from 'react'
import { Line } from '@ant-design/plots'

const ChartLine = (props) => {
    const { data } = props

    const config = {
        data,
        xField: 'Check_Time',
        yField: 'Total_Value',
        seriesField: 'Check_Type',
        label: {},
        legend: {
            position: 'bottom',
        },
    }

    return <Line {...config} />
}

export default ChartLine
