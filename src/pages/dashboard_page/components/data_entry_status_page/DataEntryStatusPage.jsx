import { Table, Alert, Row } from 'antd'
function DataEntryStatusPage(props) {
    const columns = [
        {
            key: '1',
            title: 'ID',
            dataIndex: 'ID',
        },
        {
            key: '2',
            title: 'Series',
            dataIndex: 'Series',
        },
        {
            key: '3',
            title: 'Status',
            dataIndex: 'Status',
            render: (text) => (
                <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minWidth: '240px' }}>
                    <Row gutter={[12, 12]}>
                        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '80px', marginRight: '8px' }}>Sawable :</span>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Alert message={`Sawing`} type={text === 'Sawable :' ? 'success' : 'error'} showIcon style={{ marginRight: '8px' }} />
                            <Alert message={`Sorting`} type={text === 'Sawable :' ? 'success' : 'error'} showIcon style={{ marginRight: '8px' }} />
                            <Alert message={`Brutting`} type={text === 'Sawable :' ? 'success' : 'error'} showIcon style={{ marginRight: '8px' }} />
                            <Alert message={`Polishing Table`} type={text === 'Sawable :' ? 'success' : 'error'} showIcon style={{ marginRight: '8px' }} />
                            <Alert message={`Check Table`} type={text === 'Sawable :' ? 'success' : 'error'} showIcon style={{ marginRight: '8px' }} />
                            <Alert message={`Polishing Bottom`} type={text === 'Sawable :' ? 'success' : 'error'} showIcon style={{ marginRight: '8px' }} />
                            <Alert message={`Polishing Top Star`} type={text === 'Sawable :' ? 'success' : 'error'} showIcon />
                        </div>
                    </Row>
                    <Row gutter={[12, 12]} className='mt-2'>
                        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '80px', marginRight: '8px' }}>Makables :</span>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Alert message={`Sawing`} type={text === 'Sawable :' ? 'success' : 'error'} showIcon style={{ marginRight: '8px' }} />
                            <Alert message={`Sorting`} type={text === 'Sawable :' ? 'success' : 'error'} showIcon style={{ marginRight: '8px' }} />
                            <Alert message={`Table culet`} type={text === 'Sawable :' ? 'success' : 'error'} showIcon style={{ marginRight: '8px' }} />
                            <Alert message={`Cutting brutting`} type={text === 'Sawable :' ? 'success' : 'error'} showIcon style={{ marginRight: '8px' }} />
                            <Alert message={`Check Table`} type={text === 'Sawable :' ? 'success' : 'error'} showIcon style={{ marginRight: '8px' }} />
                            <Alert message={`Polishing Bottom`} type={text === 'Sawable :' ? 'success' : 'error'} showIcon style={{ marginRight: '8px' }} />
                            <Alert message={`Polishing Top Star`} type={text === 'Sawable :' ? 'success' : 'error'} showIcon />
                        </div>
                    </Row>
                </span>
            ),
        },
    ]

    const data = [
        {
            ID: 1,
            Series: '2719 A',
            Status: 'Sawable :',
        },
        {
            ID: 2,
            Series: 'MAL9',
            Status: 'Makables :',
        },
        {
            ID: 3,
            Series: '2720 A',
            Status: 'Sawable :',
        },
        {
            ID: 4,
            Series: 'MAL8',
            Status: 'Makables :',
        },
    ]
    return <Table size='middle' rowKey='ID' columns={columns} dataSource={data} pagination={false} />
}

export default DataEntryStatusPage
