import { SearchOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Card, Col, DatePicker, Row, Space, Statistic } from 'antd'
import React, { useEffect, useState } from 'react'
import TableExpiringContracts from './components/table_expiring_contracts/TableExpiringContracts'
import TableBirthdays from './components/table_birthdays/TableBirthdays'
import { ChartBar, ChartColumn, ChartDonut, ChartLine } from './components'
import { InputGroup } from './../../../../components'
import moment from 'moment'

// const dateFormat = 'MM/YYYY'

const onChange = (date, dateString) => {
    console.log(date, dateString)
}
function PersonnelOverview() {
    const [currentMonth, setCurrentMonth] = useState(moment())
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
        setDataPersonnel({ EMPLOYEE: 875, TRAINEE: 5, TRANSFER: 0, WORKING: 700 })
    }

    const loadChart = () => {
        // api dữ liệu chart
        setDataChartLine([
            { Check_Time: 2018, Total_Value: 45 },
            { Check_Time: 2019, Total_Value: 50 },
            { Check_Time: 2020, Total_Value: 70 },
            { Check_Time: 2021, Total_Value: 76 },
            { Check_Time: 2022, Total_Value: 85 },
        ])
        setDataChartColumn([
            { Type: 'AB', Total_Value: 300, Check_Type: 'Minute' },
            { Type: 'AL', Total_Value: 592, Check_Type: 'Minute' },
            { Type: 'ALC', Total_Value: 630, Check_Type: 'Minute' },
            { Type: 'ALS', Total_Value: 600, Check_Type: 'Minute' },
            { Type: 'ML', Total_Value: 750, Check_Type: 'Minute' },
            { Type: 'PL', Total_Value: 571, Check_Type: 'Minute' },
            { Type: 'PLC', Total_Value: 792, Check_Type: 'Minute' },
            { Type: 'PLS', Total_Value: 720, Check_Type: 'Minute' },
            { Type: 'SL', Total_Value: 675, Check_Type: 'Minute' },
            { Type: 'UP', Total_Value: 582, Check_Type: 'Minute' },
            { Type: 'AB', Total_Value: 80, Check_Type: 'Employee' },
            { Type: 'AL', Total_Value: 70, Check_Type: 'Employee' },
            { Type: 'ALC', Total_Value: 60, Check_Type: 'Employee' },
            { Type: 'ALS', Total_Value: 90, Check_Type: 'Employee' },
            { Type: 'ML', Total_Value: 55, Check_Type: 'Employee' },
            { Type: 'PL', Total_Value: 60, Check_Type: 'Employee' },
            { Type: 'PLC', Total_Value: 85, Check_Type: 'Employee' },
            { Type: 'PLS', Total_Value: 75, Check_Type: 'Employee' },
            { Type: 'SL', Total_Value: 60, Check_Type: 'Employee' },
            { Type: 'UP', Total_Value: 90, Check_Type: 'Employee' },
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
            {
                employee_code: '3585',
                full_name: 'Ngô Đình Luân',
                gender: 'Male',
                departments: 'Aministrator',
                birthday: '21/08/2001',
            },
            {
                employee_code: '4394',
                full_name: 'Ngô Đình Luân',
                gender: 'Male',
                departments: 'IDT',
                birthday: '21/08/2001',
            },
            {
                employee_code: '5248',
                full_name: 'Ngô Đình Luân',
                gender: 'Male',
                departments: 'Bottom',
                birthday: '21/08/2001',
            },
            {
                employee_code: '6786',
                full_name: 'Ngô Đình Luân',
                gender: 'Male',
                departments: 'Mkbls Bottom',
                birthday: '21/08/2001',
            },
            {
                employee_code: '7055',
                full_name: 'Ngô Đình Luân',
                gender: 'Male',
                departments: 'Brutting',
                birthday: '21/08/2001',
            },
            {
                employee_code: '9472',
                full_name: 'Ngô Đình Luân',
                gender: 'Male',
                departments: 'Mkbls Brutting',
                birthday: '21/08/2001',
            },
            {
                employee_code: '9683',
                full_name: 'Ngô Đình Luân',
                gender: 'Male',
                departments: 'Culet',
                birthday: '21/08/2001',
            },
            {
                employee_code: '3241',
                full_name: 'Ngô Đình Luân',
                gender: 'Male',
                departments: 'Sawing',
                birthday: '21/08/2001',
            },
            {
                employee_code: '2256',
                full_name: 'Ngô Đình Luân',
                gender: 'Male',
                departments: 'Sort Polished',
                birthday: '21/08/2001',
            },
            {
                employee_code: '4893',
                full_name: 'Ngô Đình Luân',
                gender: 'Male',
                departments: 'Mkbls Top Star',
                birthday: '21/08/2001',
            },
            {
                employee_code: '1124',
                full_name: 'Ngô Đình Luân',
                gender: 'Male',
                departments: 'Maintenance',
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
                <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
                    <Card >
                        <Statistic
                            // EMPLOYEE
                            title={
                                <Row>
                                    <Col xs={24} sm={24} md={16} lg={16} xl={16} xxl={16}>
                                        <h3>Employees</h3>
                                    </Col>
                                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                                        <DatePicker value={currentMonth} onChange={(date) => setCurrentMonth(date)} picker='month' />
                                    </Col>
                                </Row>
                            }
                            suffix={<UserOutlined />}
                            value={dataPersonnel.EMPLOYEE}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
                    <Card >
                        <Statistic
                            title={
                                <Row>
                                    <Col xs={24} sm={24} md={16} lg={16} xl={16} xxl={16}>
                                        <h3>Trainee</h3>
                                    </Col>
                                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                                        <DatePicker
                                            // onChange={onChange}
                                            picker='month'
                                            value={currentMonth}
                                            onChange={(date) => setCurrentMonth(date)}
                                        />
                                    </Col>
                                </Row>
                            }
                            suffix={<UserOutlined />}
                            value={dataPersonnel.TRAINEE}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
                    <Card >
                        <Statistic
                            title={
                                <Row>
                                    <Col xs={24} sm={24} md={16} lg={16} xl={16} xxl={16}>
                                        <h3>Transfer</h3>
                                    </Col>
                                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                                        <DatePicker
                                            // defaultValue={moment('08/2023', dateFormat)}
                                            value={currentMonth}
                                            onChange={(date) => setCurrentMonth(date)}
                                            picker='month'
                                        />
                                    </Col>
                                </Row>
                            }
                            suffix={<UserOutlined />}
                            value={dataPersonnel.TRANSFER}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} >
                    <Card>
                        <Statistic title={<h3>Today working</h3>} suffix={<UserOutlined />} value={dataPersonnel.WORKING} />
                    </Card>
                </Col>
            </Row>
            <Row gutter={[12, 12]}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                    <Card title='Number of employee'>
                        {/* xử lý lại filter */}
                        <Space size='small' className='mb-4'>
                            <Row gutter={[12, 12]}>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={10}>
                                    <InputGroup before='From month'>
                                        <DatePicker className='w-100' picker='month' placeholder='MM/YYYY' onChange={onChange} />
                                    </InputGroup>
                                </Col>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={10}>
                                    <InputGroup before='To month'>
                                        <DatePicker className='w-100' picker='month' placeholder='MM/YYYY' onChange={onChange} />
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
                    <Card title='Absence'>
                        {/* xử lý lại filter */}
                        <Space size='small' className='mb-4'>
                            <Row gutter={[12, 12]}>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={10}>
                                    <InputGroup before='From month'>
                                        <DatePicker className='w-100' picker='month' placeholder='MM/YYYY' onChange={onChange} />
                                    </InputGroup>
                                </Col>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={10}>
                                    <InputGroup before='To month'>
                                        <DatePicker className='w-100' picker='month' placeholder='MM/YYYY' onChange={onChange} />
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
                    <Card title='Statistics by contract type'>
                        {/* xử lý lại filter */}
                        <Space size='small' className='mb-4'>
                            <Row gutter={[12, 12]}>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={10}>
                                    <InputGroup before='From month'>
                                        <DatePicker className='w-100' picker='month' placeholder='MM/YYYY' onChange={onChange} />
                                    </InputGroup>
                                </Col>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={10}>
                                    <InputGroup before='To month'>
                                        <DatePicker className='w-100' picker='month' placeholder='MM/YYYY' onChange={onChange} />
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
                    <Card title='HR structure by department'>
                        {/* xử lý lại filter */}
                        <Space size='small' className='mb-4'>
                            <Row gutter={[12, 12]}>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={10}>
                                    <InputGroup before='From month'>
                                        <DatePicker className='w-100' picker='month' placeholder='MM/YYYY' onChange={onChange} />
                                    </InputGroup>
                                </Col>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={10}>
                                    <InputGroup before='To month'>
                                        <DatePicker className='w-100' picker='month' placeholder='MM/YYYY' onChange={onChange} />
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
                    <Card title='Birthdays of the week'>
                        <TableBirthdays data={dataBirthdays} />
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Card title='Statistics of expiring contracts'>
                        <TableExpiringContracts data={dataContract} />
                    </Card>
                </Col>
            </Row>
        </Space>
    )
}

export default PersonnelOverview
