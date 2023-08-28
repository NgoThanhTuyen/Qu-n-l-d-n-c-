import { Column } from '@ant-design/plots'
const ChartWorkerDepartment = () => {
    const data = [
        {
            name: 'Total People',
            DepartmentName: 'Bottom',
            data: 123,
        },
        {
            name: 'Total People',
            DepartmentName: 'Mkbls bottom',
            data: 6,
        },
        {
            name: 'Total People',
            DepartmentName: 'Recut Bottom',
            data: 10,
        },
        {
            name: 'Total People',
            DepartmentName: 'Recut Mkbls Bottom',
            data: 25,
        },
        {
            name: 'Total People',
            DepartmentName: 'Brutting',
            data: 30,
        },
        {
            name: 'Total People',
            DepartmentName: 'Discron Brutting',
            data: 60,
        },
        {
            name: 'Total People',
            DepartmentName: 'Mkbls Brutting',
            data: 40,
        },
        {
            name: 'Total People',
            DepartmentName: 'Recut Brutting',
            data: 28,
        },
        {
            name: 'Total People',
            DepartmentName: 'Recut Mkbls Brutting',
            data: 70,
        },
        {
            name: 'Total People',
            DepartmentName: 'Culet',
            data: 20,
        },
        {
            name: 'Total People',
            DepartmentName: 'Mkbls Culet',
            data: 90,
        },
        {
            name: 'Total People',
            DepartmentName: 'Mkbls Table',
            data: 50,
        },
        {
            name: 'Total People',
            DepartmentName: 'Recut Mkbls Table',
            data: 100,
        },
        {
            name: 'Total People',
            DepartmentName: 'Recut Table',
            data: 36,
        },
        {
            name: 'Total People',
            DepartmentName: 'Table',
            data: 57,
        },
        {
            name: 'Total People',
            	DepartmentName: 'Mkbls Top Star',
            data: 26,
        },
        // {
        //     name: 'Total People',
        //     	DepartmentName: 'Recut Mkbls Top Star',
        //     data: 21,
        // },
        // {
        //     name: 'Total People',
        //     	DepartmentName: 'Recut Top Star',
        //     data: 23,
        // },
        // {
        //     name: 'Total People',
        //     	DepartmentName: 'Top Star',
        //     data: 80,
        // },
    ]
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
