import { Column } from '@ant-design/plots'
const ChartWorkerDepartment = (props) => {
    const { data } = props
    const config = {
        data,
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

export default ChartWorkerDepartment
