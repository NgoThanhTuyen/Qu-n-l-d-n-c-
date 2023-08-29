import { Column } from '@ant-design/plots'

const ChartSeries = (props) => {
    const { data } = props
    const config = {
        data,
        isGroup: true,
        xField: 'Serie',
        yField: 'data',
        seriesField: 'name',
        legend: {
            position: 'bottom',
        },
        label: {
            position: 'middle',
        },
        columnWidthRatio: 0.4,
    }
    return <Column {...config} />
}
export default ChartSeries
