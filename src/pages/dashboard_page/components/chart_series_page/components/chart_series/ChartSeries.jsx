import { Column } from '@ant-design/plots'
const ChartSeries = () => {
    const data = [
        {
            name: 'Quantity',
            Serie: '2719 A',
            data: 50,
        },
        {
            name: 'Quantity',
            Serie: 'MAL9',
            data: 80,
        },
        {
            name: 'Quantity',
            Serie: '2720 A',
            data: 60,
        },
        {
            name: 'Quantity',
            Serie: 'MAL8',
            data: 30,
        },
        {
            name: 'Quantity',
            Serie: '2720 B',
            data: 30,
        },
        {
            name: 'Weight',
            Serie: '2719 A',
            data: 10,
        },
        {
            name: 'Weight',
            Serie: 'MAL9',
            data: 50,
        },
        {
            name: 'Weight',
            Serie: '2720 A',
            data: 30,
        },
        {
            name: 'Weight',
            Serie: 'MAL8',
            data: 80,
        },
        {
            name: 'Weight',
            Serie: '2720 B',
            data: 80,
        },
        {
            name: 'Unit price',
            Serie: '2719 A',
            data: 30,
        },
        {
            name: 'Unit price',
            Serie: 'MAL9',
            data: 60,
        },
        {
            name: 'Unit price',
            Serie: '2720 A',
            data: 20,
        },
        {
            name: 'Unit price',
            Serie: 'MAL8',
            data: 50,
        },
        {
            name: 'Unit price',
            Serie: '2720 B',
            data: 50,
        },
        {
            name: 'Toltal Value',
            Serie: '2719 A',
            data: 70,
        },
        {
            name: 'Toltal Value',
            Serie: 'MAL9',
            data: 30,
        },
        {
            name: 'Toltal Value',
            Serie: '2720 A',
            data: 50,
        },
        {
            name: 'Toltal Value',
            Serie: 'MAL8',
            data: 70,
        },
        {
            name: 'Toltal Value',
            Serie: '2720 B',
            data: 70,
        },
    ]
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
    }
    return <Column {...config} />
}
export default ChartSeries
