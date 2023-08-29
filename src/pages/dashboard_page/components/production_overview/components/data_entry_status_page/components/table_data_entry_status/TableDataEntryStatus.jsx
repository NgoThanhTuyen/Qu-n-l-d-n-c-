import { Alert, Row, Table } from 'antd'
function TableDataEntryStatus(props) {
    const { data } = props
    const columns = [
        {
            title: 'ID',
            dataIndex: 'ID',
            render: (value, _, index) => index + 1,
        },
        {
            title: 'Series',
            dataIndex: 'Series',
        },
        {
            title: 'Status',
            dataIndex: 'Status',
            render: (text) => (
                <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minWidth: '240px' }}>
                    <Row gutter={[12, 12]}>
                        <span
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                width: '80px',
                                marginRight: '8px',
                            }}
                        >
                            Sawable :
                        </span>
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
                        <span
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                width: '80px',
                                marginRight: '8px',
                            }}
                        >
                            Makables :
                        </span>
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

    return <Table size='middle' rowKey='Series' columns={columns} dataSource={data} pagination={false} />
}

export default TableDataEntryStatus
