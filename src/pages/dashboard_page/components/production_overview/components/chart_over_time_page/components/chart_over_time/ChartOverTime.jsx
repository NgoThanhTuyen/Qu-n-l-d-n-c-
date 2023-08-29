import { Column } from '@ant-design/plots'

const ChartOverTime = (props) => {
    const { data } = props
    const config = {
        data,
        isGroup: true,
        xField: 'DepartmentName',
        yField: 'data',
        seriesField: 'name',
        legend: {
            position: 'bottom',
        },
        label: {
            position: 'top',
        },
    }
    return <Column {...config} />
}
export default ChartOverTime
