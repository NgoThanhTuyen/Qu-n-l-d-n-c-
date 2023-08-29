import React from 'react'
import { Column } from '@ant-design/plots'

const ChartColumn = (props) => {
    const { data } = props

    const config = {
        data,
        xField: 'Type',
        yField: 'Total_Value',
        seriesField: 'Check_Type',
        isStack: true,
        label: {
            position: 'middle',
        },
        meta: {
            Total_Value: {
                alias: 'Personnel',
            },
        },
    }
    return <Column {...config} />
}

export default ChartColumn
