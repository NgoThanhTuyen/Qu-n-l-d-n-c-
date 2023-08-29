import { Column } from '@ant-design/plots'
const ChartTimeSalary = (props) => {
    const { data } = props
    const config = {
        data,
        isStack: true,
        xField: 'DepartmentName',
        yField: 'data',
        seriesField: 'name',
        legend: {
            position: 'bottom',
        },
        label: {
            position: 'middle',
        },
    }
    return <Column {...config} />
}

export default ChartTimeSalary
