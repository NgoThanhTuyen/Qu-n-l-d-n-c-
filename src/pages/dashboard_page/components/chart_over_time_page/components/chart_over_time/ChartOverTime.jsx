import { Column } from '@ant-design/plots'
const ChartOverTime = () => {
    const data = [
        {
            name: 'Normal Night',
            DepartmentName: 'Bottom',
            data: 150,
        },
        {
            name: 'Normal Night',
            DepartmentName: 'Mkbls bottom',
            data: 160,
        },
        {
            name: 'Normal Night',
            DepartmentName: 'Recut Bottom',
            data: 240,
        },
        {
            name: 'Normal Night',
            DepartmentName: 'Recut Mkbls Bottom',
            data: 150,
        },
        {
            name: 'Normal Night',
            DepartmentName: 'Brutting',
            data: 140,
        },
        {
            name: 'Normal Night',
            DepartmentName: 'Discron Brutting',
            data: 130,
        },
        {
            name: 'Normal Night',
            DepartmentName: 'Mkbls Brutting',
            data: 100,
        },
        {
            name: 'Normal Night',
            DepartmentName: 'Recut Brutting',
            data: 50,
        },
        {
            name: 'Normal Night',
            DepartmentName: 'Recut Mkbls Brutting',
            data: 80,
        },
        {
            name: 'Normal Night',
            DepartmentName: 'Culet',
            data: 150,
        },
        {
            name: 'Normal Night',
            DepartmentName: 'Mkbls Culet',
            data: 155,
        },
        {
            name: 'Normal Night',
            DepartmentName: 'Mkbls Table',
            data: 186,
        },
        {
            name: 'Normal Night',
            DepartmentName: 'Recut Mkbls Table',
            data: 195,
        },
        {
            name: 'Normal Night',
            DepartmentName: 'Recut Table',
            data: 140,
        },
        {
            name: 'Normal Night',
            	DepartmentName: 'Table',
            data: 188,
        },
        // {
        //     name: 'Normal Night',
        //     	DepartmentName: 'Mkbls Top Star',
        //     data: 136,
        // },
        // {
        //     name: 'Normal Night',
        //     	DepartmentName: 'Recut Mkbls Top Star',
        //     data: 117,
        // },
        // {
        //     name: 'Normal Night',
        //     	DepartmentName: 'Recut Top Star',
        //     data: 96,
        // },
        // {
        //     name: 'Normal Night',
        //     	DepartmentName: 'Top Star',
        //     data: 160,
        // },

        {
            name: 'Day Off Night',
            DepartmentName: 'Bottom',
            data: 40,
        },
        {
            name: 'Day Off Night',
            DepartmentName: 'Mkbls bottom',
            data: 30,
        },
        {
            name: 'Day Off Night',
            DepartmentName: 'Recut Bottom',
            data: 20,
        },
        {
            name: 'Day Off Night',
            DepartmentName: 'Recut Mkbls Bottom',
            data: 40,
        },
        {
            name: 'Day Off Night',
            DepartmentName: 'Brutting',
            data: 20,
        },
        {
            name: 'Day Off Night',
            DepartmentName: 'Discron Brutting',
            data: 70,
        },
        {
            name: 'Day Off Night',
            DepartmentName: 'Mkbls Brutting',
            data: 10,
        },
        {
            name: 'Day Off Night',
            DepartmentName: 'Recut Brutting',
            data: 50,
        },
        {
            name: 'Day Off Night',
            DepartmentName: 'Recut Mkbls Brutting',
            data: 70,
        },
        {
            name: 'Day Off Night',
            DepartmentName: 'Culet',
            data: 80,
        },
        {
            name: 'Day Off Night',
            DepartmentName: 'Mkbls Culet',
            data: 40,
        },
        {
            name: 'Day Off Night',
            DepartmentName: 'Mkbls Table',
            data: 20,
        },
        {
            name: 'Day Off Night',
            DepartmentName: 'Recut Mkbls Table',
            data: 70,
        },
        {
            name: 'Day Off Night',
            DepartmentName: 'Recut Table',
            data: 10,
        },
        {
            name: 'Day Off Night',
            	DepartmentName: 'Table',
            data: 50,
        },
        // {
        //     name: 'Day Off Night',
        //     	DepartmentName: 'Mkbls Top Star',
        //     data: 70,
        // },
        // {
        //     name: 'Day Off Night',
        //     	DepartmentName: 'Recut Mkbls Top Star',
        //     data: 66,
        // },
        // {
        //     name: 'Day Off Night',
        //     	DepartmentName: 'Recut Top Star',
        //     data: 40,
        // },
        // {
        //     name: 'Day Off Night',
        //     	DepartmentName: 'Top Star',
        //     data: 20,
        // },
        {
            name: 'OT Holidays',
            DepartmentName: 'Bottom',
            data: 60,
        },
        {
            name: 'OT Holidays',
            DepartmentName: 'Mkbls bottom',
            data: 40,
        },
        {
            name: 'OT Holidays',
            DepartmentName: 'Recut Bottom',
            data: 20,
        },
        {
            name: 'OT Holidays',
            DepartmentName: 'Recut Mkbls Bottom',
            data: 55,
        },
        {
            name: 'OT Holidays',
            DepartmentName: 'Brutting',
            data: 40,
        },
        {
            name: 'OT Holidays',
            DepartmentName: 'Discron Brutting',
            data: 20,
        },
        {
            name: 'OT Holidays',
            DepartmentName: 'Mkbls Brutting',
            data: 50,
        },
        {
            name: 'OT Holidays',
            DepartmentName: 'Recut Brutting',
            data: 30,
        },
        {
            name: 'OT Holidays',
            DepartmentName: 'Recut Mkbls Brutting',
            data: 30,
        },
        {
            name: 'OT Holidays',
            DepartmentName: 'Culet',
            data: 30,
        },
        {
            name: 'OT Holidays',
            DepartmentName: 'Mkbls Culet',
            data: 60,
        },
        {
            name: 'OT Holidays',
            DepartmentName: 'Mkbls Table',
            data: 40,
        },
        {
            name: 'OT Holidays',
            DepartmentName: 'Recut Mkbls Table',
            data: 20,
        },
        {
            name: 'OT Holidays',
            DepartmentName: 'Recut Table',
            data: 50,
        },
        {
            name: 'OT Holidays',
            	DepartmentName: 'Table',
            data: 30,
        },
        // {
        //     name: 'OT Holidays',
        //     	DepartmentName: 'Mkbls Top Star',
        //     data: 30,
        // },
        // {
        //     name: 'OT Holidays',
        //     	DepartmentName: 'Recut Mkbls Top Star',
        //     data: 30,
        // },
        // {
        //     name: 'OT Holidays',
        //     	DepartmentName: 'Recut Top Star',
        //     data: 60,
        // },
        // {
        //     name: 'OT Holidays',
        //     	DepartmentName: 'Top Star',
        //     data: 40,
        // },
        {
            name: 'Holiday Night',
            DepartmentName: 'Bottom',
            data: 50,
        },
        {
            name: 'Holiday Night',
            DepartmentName: 'Mkbls bottom',
            data: 30,
        },
        {
            name: 'Holiday Night',
            DepartmentName: 'Recut Bottom',
            data: 32,
        },
        {
            name: 'Holiday Night',
            DepartmentName: 'Recut Mkbls Bottom',
            data: 55,
        },
        {
            name: 'Holiday Night',
            DepartmentName: 'Brutting',
            data: 20,
        },
        {
            name: 'Holiday Night',
            DepartmentName: 'Discron Brutting',
            data: 60,
        },
        {
            name: 'Holiday Night',
            DepartmentName: 'Mkbls Brutting',
            data: 21,
        },
        {
            name: 'Holiday Night',
            DepartmentName: 'Recut Brutting',
            data: 30,
        },
        {
            name: 'Holiday Night',
            DepartmentName: 'Recut Mkbls Brutting',
            data: 20,
        },
        {
            name: 'Holiday Night',
            DepartmentName: 'Culet',
            data: 20,
        },
        {
            name: 'Holiday Night',
            DepartmentName: 'Mkbls Culet',
            data: 50,
        },
        {
            name: 'Holiday Night',
            DepartmentName: 'Mkbls Table',
            data: 80,
        },
        {
            name: 'Holiday Night',
            DepartmentName: 'Recut Mkbls Table',
            data: 60,
        },
        {
            name: 'Holiday Night',
            DepartmentName: 'Recut Table',
            data: 86,
        },
        // {
        //     name: 'Holiday Night',
        //     	DepartmentName: 'Table',
        //     data: 30,
        // },
        // {
        //     name: 'Holiday Night',
        //     	DepartmentName: 'Mkbls Top Star',
        //     data: 20,
        // },
        // {
        //     name: 'Holiday Night',
        //     	DepartmentName: 'Recut Mkbls Top Star',
        //     data: 20,
        // },
        // {
        //     name: 'Holiday Night',
        //     	DepartmentName: 'Recut Top Star',
        //     data: 50,
        // },
        // {
        //     name: 'Holiday Night',
        //     	DepartmentName: 'Top Star',
        //     data: 80,
        // },
        {
            name: 'OT normal',
            DepartmentName: 'Bottom',
            data: 30,
        },
        {
            name: 'OT normal',
            DepartmentName: 'Mkbls bottom',
            data: 20,
        },
        {
            name: 'OT normal',
            DepartmentName: 'Recut Bottom',
            data: 50,
        },
        {
            name: 'OT normal',
            DepartmentName: 'Recut Mkbls Bottom',
            data: 30,
        },
        {
            name: 'OT normal',
            DepartmentName: 'Brutting',
            data: 20,
        },
        {
            name: 'OT normal',
            DepartmentName: 'Discron Brutting',
            data: 40,
        },
        {
            name: 'OT normal',
            DepartmentName: 'Mkbls Brutting',
            data: 50,
        },
        {
            name: 'OT normal',
            DepartmentName: 'Recut Brutting',
            data: 10,
        },
        {
            name: 'OT normal',
            DepartmentName: 'Recut Mkbls Brutting',
            data: 30,
        },
        {
            name: 'OT normal',
            DepartmentName: 'Culet',
            data: 50,
        },
        {
            name: 'OT normal',
            DepartmentName: 'Mkbls Culet',
            data: 30,
        },
        {
            name: 'OT normal',
            DepartmentName: 'Mkbls Table',
            data: 20,
        },
        {
            name: 'OT normal',
            DepartmentName: 'Recut Mkbls Table',
            data: 40,
        },
        {
            name: 'OT normal',
            DepartmentName: 'Recut Table',
            data: 50,
        },
        // {
        //     name: 'OT normal',
        //     	DepartmentName: 'Table',
        //     data: 10,
        // },
        // {
        //     name: 'OT normal',
        //     	DepartmentName: 'Mkbls Top Star',
        //     data: 30,
        // },
        // {
        //     name: 'OT normal',
        //     	DepartmentName: 'Recut Mkbls Top Star',
        //     data: 50,
        // },
        // {
        //     name: 'OT normal',
        //     	DepartmentName: 'Recut Top Star',
        //     data: 30,
        // },
        // {
        //     name: 'OT normal',
        //     	DepartmentName: 'Top Star',
        //     data: 20,
        // },
        {
            name: 'OT Off',
            DepartmentName: 'Bottom',
            data: 36,
        },
        {
            name: 'OT Off',
            DepartmentName: 'Mkbls bottom',
            data: 20,
        },
        {
            name: 'OT Off',
            DepartmentName: 'Recut Bottom',
            data: 60,
        },
        {
            name: 'OT Off',
            DepartmentName: 'Recut Mkbls Bottom',
            data: 30,
        },
        {
            name: 'OT Off',
            DepartmentName: 'Brutting',
            data: 40,
        },
        {
            name: 'OT Off',
            DepartmentName: 'Discron Brutting',
            data: 55,
        },
        {
            name: 'OT Off',
            DepartmentName: 'Mkbls Brutting',
            data: 68,
        },
        {
            name: 'OT Off',
            DepartmentName: 'Recut Brutting',
            data: 40,
        },
        {
            name: 'OT Off',
            DepartmentName: 'Recut Mkbls Brutting',
            data: 36,
        },
        {
            name: 'OT Off',
            DepartmentName: 'Culet',
            data: 28,
        },
        {
            name: 'OT Off',
            DepartmentName: 'Mkbls Culet',
            data: 36,
        },
        {
            name: 'OT Off',
            DepartmentName: 'Mkbls Table',
            data: 48,
        },
        {
            name: 'OT Off',
            DepartmentName: 'Recut Mkbls Table',
            data: 20,
        },
        {
            name: 'OT Off',
            DepartmentName: 'Recut Table',
            data: 30,
        },
        {
            name: 'OT Off',
            	DepartmentName: 'Table',
            data: 40,
        },
        // {
        //     name: 'OT Off',
        //     	DepartmentName: 'Mkbls Top Star',
        //     data: 22,
        // },
        // {
        //     name: 'OT Off',
        //     	DepartmentName: 'Recut Mkbls Top Star',
        //     data: 17,
        // },
        // {
        //     name: 'OT Off',
        //     	DepartmentName: 'Recut Top Star',
        //     data: 36,
        // },
        // {
        //     name: 'OT Off',
        //     	DepartmentName: 'Top Star',
        //     data: 14,
        // },
    ]
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
