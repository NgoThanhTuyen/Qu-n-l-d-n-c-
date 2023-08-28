import { Column } from '@ant-design/plots'
const ChartTimeProduction = () => {
    const data = [
        {
            name: 'Total Minutes',
            DepartmentName: 'Bottom',
            data: 500,
        },
        {
            name: 'Total Minutes',
            DepartmentName: 'Mkbls bottom',
            data: 558,
        },
        {
            name: 'Total Minutes',
            DepartmentName: 'Recut Bottom',
            data: 600,
        },
        {
            name: 'Total Minutes',
            DepartmentName: 'Recut Mkbls Bottom',
            data: 486,
        },
        {
            name: 'Total Minutes',
            DepartmentName: 'Brutting',
            data: 360,
        },
        {
            name: 'Total Minutes',
            DepartmentName: 'Discron Brutting',
            data: 400,
        },
        {
            name: 'Total Minutes',
            DepartmentName: 'Mkbls Brutting',
            data: 591,
        },
        {
            name: 'Total Minutes',
            DepartmentName: 'Recut Brutting',
            data: 630,
        },
        {
            name: 'Total Minutes',
            DepartmentName: 'Recut Mkbls Brutting',
            data: 480,
        },
        {
            name: 'Total Minutes',
            DepartmentName: 'Culet',
            data: 590,
        },
        {
            name: 'Total Minutes',
            DepartmentName: 'Mkbls Culet',
            data: 640,
        },
        {
            name: 'Total Minutes',
            DepartmentName: 'Mkbls Table',
            data: 590,
        },
        {
            name: 'Total Minutes',
            DepartmentName: 'Recut Mkbls Table',
            data: 555,
        },
        {
            name: 'Total Minutes',
            DepartmentName: 'Recut Table',
            data: 458,
        },
        {
            name: 'Total Minutes',
            	DepartmentName: 'Table',
            data: 635,
        },
        // {
        //     name: 'Total Minutes',
        //     	DepartmentName: 'Mkbls Top Star',
        //     data: 408,
        // },
        // {
        //     name: 'Total Minutes',
        //     	DepartmentName: 'Recut Mkbls Top Star',
        //     data: 800,
        // },
        // {
        //     name: 'Total Minutes',
        //     	DepartmentName: 'Recut Top Star',
        //     data: 790,
        // },
        // {
        //     name: 'Total Minutes',
        //     	DepartmentName: 'Top Star',
        //     data: 850,
        // },
        {
            name: 'Total People',
            DepartmentName: 'Bottom',
            data: 80,
        },
        {
            name: 'Total People',
            DepartmentName: 'Mkbls bottom',
            data: 60,
        },
        {
            name: 'Total People',
            DepartmentName: 'Recut Bottom',
            data: 123,
        },
        {
            name: 'Total People',
            DepartmentName: 'Recut Mkbls Bottom',
            data: 124,
        },
        {
            name: 'Total People',
            DepartmentName: 'Brutting',
            data: 50,
        },
        {
            name: 'Total People',
            DepartmentName: 'Discron Brutting',
            data: 70,
        },
        {
            name: 'Total People',
            DepartmentName: 'Mkbls Brutting',
            data: 60,
        },
        {
            name: 'Total People',
            DepartmentName: 'Recut Brutting',
            data: 53,
        },
        {
            name: 'Total People',
            DepartmentName: 'Recut Mkbls Brutting',
            data: 55,
        },
        {
            name: 'Total People',
            DepartmentName: 'Culet',
            data: 60,
        },
        {
            name: 'Total People',
            DepartmentName: 'Mkbls Culet',
            data: 42,
        },
        {
            name: 'Total People',
            DepartmentName: 'Mkbls Table',
            data: 38,
        },
        {
            name: 'Total People',
            DepartmentName: 'Recut Mkbls Table',
            data: 60,
        },
        {
            name: 'Total People',
            DepartmentName: 'Recut Table',
            data: 55,
        },
        {
            name: 'Total People',
            	DepartmentName: 'Table',
            data: 60,
        },
        // {
        //     name: 'Total People',
        //     	DepartmentName: 'Mkbls Top Star',
        //     data: 80,
        // },
        // {
        //     name: 'Total People',
        //     	DepartmentName: 'Recut Mkbls Top Star',
        //     data: 98,
        // },
        // {
        //     name: 'Total People',
        //     	DepartmentName: 'Recut Top Star',
        //     data: 83,
        // },
        // {
        //     name: 'Total People',
        //     	DepartmentName: 'Top Star',
        //     data: 100,
        // },
    ]
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

export default ChartTimeProduction
