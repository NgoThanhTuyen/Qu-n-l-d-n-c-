import React from 'react'
import { Column } from '@ant-design/plots'

const ChartColumn = (props) => {
    const { data } = props

    const config = {
        data,
        xField: 'Check_Time',
        yField: 'Total_Value',
        // seriesField: 'Check_Type',
        // isGroup: true,
        label: {
            position: 'middle',

            // style: {
            //   fill: '#FFFFFF',
            //   opacity: 0.6,
            // },
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
