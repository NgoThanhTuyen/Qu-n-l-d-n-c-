import { SearchOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Card, Col, DatePicker, Row, Space, Statistic } from 'antd'
import React, { useEffect, useState } from 'react'
import TableExpiringContracts from './components/table_expiring_contracts/TableExpiringContracts'
import TableBirthdays from './components/table_birthdays/TableBirthdays'
import { ChartBar, ChartColumn, ChartDonut, ChartLine } from './components'
import { InputGroup } from '../../components'

const onChange = (date, dateString) => {
    console.log(date, dateString)
}

function Dashboard1Page() {
    // khai báo biến dữ statistic
    const [dataPersonnel, setDataPersonnel] = useState([])
    // khai báo biến dữ liêu chart
    const [dataChartLine, setDataChartLine] = useState([])
    const [dataChartColumn, setDataChartColumn] = useState([])
    const [dataChartBar, setDataChartBar] = useState([])
    const [dataChartDonut, setDataChartDonut] = useState([])
    // khai báo biến dữ liệu table
    const [dataBirthdays, setDataBirthdays] = useState([])
    const [dataContract, setDataContract] = useState([])

    const loadPersonnel = () => {
        // api thông kê nhân sự
        setDataPersonnel({ PERSONNEL: 875, TRAINEE: 5, TRANSFER: 0 })
    }

    const loadChart = () => {
        // api dữ liệu chart
        setDataChartLine([
            { Check_Type: 'Recruit', Check_Time: 2018, Total_Value: 45 },
            { Check_Type: 'Recruit', Check_Time: 2019, Total_Value: 50 },
            { Check_Type: 'Recruit', Check_Time: 2020, Total_Value: 70 },
            { Check_Type: 'Recruit', Check_Time: 2021, Total_Value: 76 },
            { Check_Type: 'Recruit', Check_Time: 2022, Total_Value: 85 },
            { Check_Type: 'Quit', Check_Time: 2018, Total_Value: 25 },
            { Check_Type: 'Quit', Check_Time: 2019, Total_Value: 27 },
            { Check_Type: 'Quit', Check_Time: 2020, Total_Value: 35 },
            { Check_Type: 'Quit', Check_Time: 2021, Total_Value: 30 },
            { Check_Type: 'Quit', Check_Time: 2022, Total_Value: 33 },
        ])
        setDataChartColumn([
            { Check_Time: 2018, Total_Value: 250 },
            { Check_Time: 2019, Total_Value: 375 },
            { Check_Time: 2020, Total_Value: 500 },
            { Check_Time: 2021, Total_Value: 750 },
            { Check_Time: 2022, Total_Value: 875 },
        ])
        setDataChartBar([
            { value: 12, type: 'Security' },
            { value: 5, type: 'Account' },
            { value: 17, type: 'Aministrator' },
            { value: 13, type: 'IDT' },
            { value: 113, type: 'Bottom' },
            { value: 3, type: 'Mkbls Bottom' },
            { value: 53, type: 'Brutting' },
            { value: 2, type: 'Mkbls Brutting' },
            { value: 12, type: 'Culet' },
            { value: 30, type: 'Sawing' },
            { value: 12, type: 'Sort Polished' },
            { value: 8, type: 'Table' },
            { value: 8, type: 'Mkbls Top Star' },
            { value: 122, type: 'Top Star' },
            { value: 10, type: 'Maintenance' },
            { value: 8, type: 'Human Resources' },
        ])
        setDataChartDonut([
            { type: 'Labour contract', value: 277 },
            { type: 'Seasonal labor contract', value: 11 },
            { type: 'LC Other(NO)', value: 30 },
            { type: 'Apprenticeship Agreement', value: 2 },
        ])
    }

    const loadTable = () => {
        // api dữ liệu 2 table
        setDataBirthdays([
            {
                employee_code: '8932',
                full_name: 'Võ Gia Huy',
                gender: 'Male',
                departments: 'Administrative divisions',
                birthday: '22/08/1997',
            },
            {
                employee_code: '3992',
                full_name: 'Nguyễn Đức Duy',
                gender: 'Male',
                departments: 'Security room',
                birthday: '26/08/2001',
            },
            {
                employee_code: '9350',
                full_name: 'Ngô Đình Luân',
                gender: 'Male',
                departments: 'Human resources department',
                birthday: '21/08/2001',
            },
        ])
        setDataContract([
            {
                contract_code: 'SLSR_3505',
                employee_code: '3505',
                full_name: 'Trần Thị Mai Liên',
                position: 'Shift Leader',
                departments: 'Security room',
                contract_start_time: '15/09/2020',
                contract_end_time: '15/09/2023',
                contract_expiration_time: '21 days',
            },
            {
                contract_code: 'SLSR_3850',
                employee_code: '3850',
                full_name: 'Mai Văn Liêm',
                position: 'Shift Leader',
                departments: 'Security room',
                contract_start_time: '15/09/2020',
                contract_end_time: '15/09/2023',
                contract_expiration_time: '21 days',
            },
            {
                contract_code: 'WSR_7306',
                employee_code: '7306',
                full_name: 'Lê Tiến Toàn',
                position: 'Watchman',
                departments: 'Security room',
                contract_start_time: '15/09/2022',
                contract_end_time: '15/09/2023',
                contract_expiration_time: '21 days',
            },
        ])
    }

    useEffect(() => {
        loadPersonnel()
        loadChart()
        loadTable()
    }, [])

    return (
        <Space direction='vertical' className='w-100' size='small'>
            <Row gutter={[12, 0]}>
                <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
                    <Card
                        style={{
                            backgroundColor: '#7EB0FC',
                            borderRadius: '20px',
                            margin: '14px',
                        }}
                    >
                        <Statistic
                            title={<h3 className='text-white'>Number of personnel</h3>}
                            suffix={<UserOutlined />}
                            value={dataPersonnel.PERSONNEL}
                            valueStyle={{ color: '#FFFFFF' }}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
                    <Card
                        style={{
                            backgroundColor: '#48B7B0',
                            borderRadius: '20px',
                            margin: '10px',
                        }}
                    >
                        <Statistic
                            title={
                                <Row>
                                    <Col xs={24} sm={24} md={16} lg={16} xl={16} xxl={16}>
                                        <h3 className='text-white'>Number of Trainee personnel</h3>
                                    </Col>
                                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                                        <DatePicker onChange={onChange} picker='month' />
                                    </Col>
                                </Row>
                            }
                            suffix={<UserOutlined />}
                            valueStyle={{ color: '#FFFFFF' }}
                            value={dataPersonnel.TRAINEE}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
                    <Card
                        style={{
                            backgroundColor: '#DAA16C',
                            borderRadius: '20px',
                            margin: '10px',
                        }}
                    >
                        <Statistic
                            title={
                                <Row>
                                    <Col xs={24} sm={24} md={16} lg={16} xl={16} xxl={16}>
                                        <h3 className='text-white'>Number of Transfer personnel</h3>
                                    </Col>
                                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                                        <DatePicker onChange={onChange} picker='month' />
                                    </Col>
                                </Row>
                            }
                            suffix={<UserOutlined />}
                            valueStyle={{ color: '#FFFFFF' }}
                            value={dataPersonnel.TRANSFER}
                        />
                    </Card>
                </Col>
            </Row>
            <Row gutter={[12, 12]}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                    <Card
                        title='Personnel fluctuation chart'
                        style={{
                            borderRadius: '20px',
                            margin: '10px',
                        }}
                    >
                        {/* xử lý lại filter */}
                        <Space size='small' className='mb-4'>
                            <Row gutter={[12, 12]}>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={10}>
                                    <InputGroup before='From month'>
                                        <DatePicker
                                            className='w-100'
                                            picker='From month'
                                            placeholder='MM/YYYY'
                                            onChange={onChange}
                                        />
                                    </InputGroup>
                                </Col>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={10}>
                                    <InputGroup before='To month'>
                                        <DatePicker
                                            className='w-100'
                                            picker='To month'
                                            placeholder='MM/YYYY'
                                            onChange={onChange}
                                        />
                                    </InputGroup>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={4}>
                                    <Space size='small'>
                                        <Button type='primary' icon={<SearchOutlined />} className='min-w-100-px'>
                                            Search
                                        </Button>
                                    </Space>
                                </Col>
                            </Row>
                        </Space>
                        <ChartLine data={dataChartLine} />
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                    <Card
                        title='Number of pesonnel chart'
                        style={{
                            borderRadius: '20px',
                            margin: '10px',
                        }}
                    >
                        {/* xử lý lại filter */}
                        <Space size='small' className='mb-4'>
                            <Row gutter={[12, 12]}>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={10}>
                                    <InputGroup before='From month'>
                                        <DatePicker
                                            className='w-100'
                                            picker='From month'
                                            placeholder='MM/YYYY'
                                            onChange={onChange}
                                        />
                                    </InputGroup>
                                </Col>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={10}>
                                    <InputGroup before='To month'>
                                        <DatePicker
                                            className='w-100'
                                            picker='To month'
                                            placeholder='MM/YYYY'
                                            onChange={onChange}
                                        />
                                    </InputGroup>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={4}>
                                    <Space size='small'>
                                        <Button type='primary' icon={<SearchOutlined />} className='min-w-100-px'>
                                            Search
                                        </Button>
                                    </Space>
                                </Col>
                            </Row>
                        </Space>
                        <ChartColumn data={dataChartColumn} />
                    </Card>
                </Col>
            </Row>
            <Row gutter={[12, 12]}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                    <Card
                        title='Statistics by contract type'
                        style={{
                            borderRadius: '20px',
                            margin: '10px',
                        }}
                    >
                        {/* xử lý lại filter */}
                        <Space size='small' className='mb-4'>
                            <Row gutter={[12, 12]}>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={10}>
                                    <InputGroup before='From month'>
                                        <DatePicker
                                            className='w-100'
                                            picker='From month'
                                            placeholder='MM/YYYY'
                                            onChange={onChange}
                                        />
                                    </InputGroup>
                                </Col>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={10}>
                                    <InputGroup before='To month'>
                                        <DatePicker
                                            className='w-100'
                                            picker='To month'
                                            placeholder='MM/YYYY'
                                            onChange={onChange}
                                        />
                                    </InputGroup>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={4}>
                                    <Space size='small'>
                                        <Button type='primary' icon={<SearchOutlined />} className='min-w-100-px'>
                                            Search
                                        </Button>
                                    </Space>
                                </Col>
                            </Row>
                        </Space>
                        <ChartDonut data={dataChartDonut} />
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                    <Card
                        title='HR structure by department'
                        style={{
                            borderRadius: '20px',
                            margin: '10px',
                        }}
                    >
                        {/* xử lý lại filter */}
                        <Space size='small' className='mb-4'>
                            <Row gutter={[12, 12]}>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={10}>
                                    <InputGroup before='From month'>
                                        <DatePicker
                                            className='w-100'
                                            picker='From month'
                                            placeholder='MM/YYYY'
                                            onChange={onChange}
                                        />
                                    </InputGroup>
                                </Col>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={10}>
                                    <InputGroup before='To month'>
                                        <DatePicker
                                            className='w-100'
                                            picker='To month'
                                            placeholder='MM/YYYY'
                                            onChange={onChange}
                                        />
                                    </InputGroup>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={4}>
                                    <Space size='small'>
                                        <Button type='primary' icon={<SearchOutlined />} className='min-w-100-px'>
                                            Search
                                        </Button>
                                    </Space>
                                </Col>
                            </Row>
                        </Space>
                        <ChartBar data={dataChartBar} />
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Card
                        title='Birthdays of the week'
                        style={{
                            borderRadius: '20px',
                            margin: '10px',
                        }}
                    >
                        <TableBirthdays data={dataBirthdays} />
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Card
                        title='Statistics of expiring contracts'
                        style={{
                            borderRadius: '20px',
                            margin: '10px',
                        }}
                    >
                        <TableExpiringContracts data={dataContract} />
                    </Card>
                </Col>
            </Row>
        </Space>
    )
}

export default Dashboard1Page
