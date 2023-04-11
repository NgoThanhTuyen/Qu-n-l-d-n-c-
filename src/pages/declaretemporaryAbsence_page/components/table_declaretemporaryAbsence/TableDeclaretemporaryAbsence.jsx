// import { Button, Form, Space, Input, Col, Row, Card, Spin, Table } from 'antd'
// import PropTypes from 'prop-types'
// import React, { useState } from 'react'
// import { SaveOutlined, CloseOutlined } from '@ant-design/icons'
// import Config from '../../../../Config.json'
// import { InputGroup } from '../../../../components'
// import { FitleDeclaretemporaryAbsence } from '../../../../components'

// const { maxMsg } = Config

// function TableDeclaretemporaryAbsence(props) {

//     const { filters: fils, form, onFinish, setTabActive, logTable } = props

//     const [filters, setFilters] = useState({
//         ...fils,
//     })

//     const columns = [
//         {
//             title: '',
//             dataIndex: ''
//         },
//         {
//             title: 'Product ID',
//             dataIndex: 'Product',
//             align: 'center'
//         },
//         {
//             title: 'Code',
//             dataIndex: 'Code'
//         },
//         {
//             title: 'Product Name',
//             dataIndex: 'Product_Name'
//         },
//         {
//             title: 'Size',
//             dataIndex: 'Size'
//         },
//         {
//             title: 'Wall',
//             dataIndex: 'Wall'
//         },
//         {
//             title: 'Depth %',
//             dataIndex: 'Depth_%'
//         },
//         {
//             title: 'Depth',
//             dataIndex: 'Depth'
//         },
//         {
//             title: 'Length',
//             dataIndex: 'Length'
//         },
//         {
//             title: 'Thickmes',
//             dataIndex: 'Thickmes'
//         },
//         {
//             title: 'Line',
//             dataIndex: 'Line'
//         },
//         {
//             title: 'Name S',
//             dataIndex: 'Name_S'
//         },
//         {
//             title: 'Quantity',
//             dataIndex: 'Quantity'
//         },
//         {
//             title: 'Unit Pric',
//             dataIndex: 'Unit_Pric'
//         },
//         {
//             title: 'Group',
//             dataIndex: 'Group'
//         },
//     ]
//     const column = [
//         {
//             title: 'Product Name',
//             dataIndex: 'Product_Name'
//         },
//         {
//             title: 'Total Quantity',
//             dataIndex: 'Total_Quantity'
//         },
//         {
//             title: 'Final price',
//             dataIndex: 'Final_price'
//         },
//         {
//             title: 'Commision Price',
//             dataIndex: 'Commision_Price'
//         },
//     ]
//     return (
//         <Card size='small'>
//             <FitleDeclaretemporaryAbsence
//                 filters={filters}
//                 defaultValue
//                 setIsShowReportModal={setIsShowReportModal}
//                 onChange={(values) => {
//                     setFilters(values)
//                 }}
//             />
//             {/* <Card size='small'> */}
//             <Row gutter={[24, 24]}>
//                 <Col xs={24} sm={24} md={24} lg={13} xl={12} xxl={5}>
//                     <Form
//                         className='form-input'
//                         form={form}
//                         labelCol={{ span: 10 }}
//                         autoComplete='off'
//                         onFinish={(values) => {
//                             onFinish(values)
//                         }}
//                     >
//                         <Row>
//                             <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
//                                 <Form.Item
//                                     label='Bill To'
//                                     name='Id_Card'
//                                     rules={[
//                                         {
//                                             max: 20,
//                                             message: maxMsg,
//                                         },
//                                     ]}
//                                 >
//                                     <Input />
//                                 </Form.Item>
//                             </Col>
//                         </Row>

//                         <Row>
//                             <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} >
//                                 <Form.Item
//                                     label='Ship To'
//                                     name='Id_Card'
//                                     rules={[
//                                         {
//                                             max: 20,
//                                             message: maxMsg,
//                                         },
//                                     ]}
//                                 >
//                                     <Input />
//                                 </Form.Item>
//                             </Col>
//                         </Row>

//                         <Col className='border-top mb-2'></Col>

//                         <Row>
//                             <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
//                                 <Form.Item
//                                     label='Order ID'
//                                     name='Id_Card'
//                                     rules={[
//                                         {
//                                             max: 20,
//                                             message: maxMsg,
//                                         },
//                                     ]}
//                                 >
//                                     <Input />
//                                 </Form.Item>
//                             </Col>
//                         </Row>

//                         <Row>
//                             <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
//                                 <Form.Item
//                                     label='Number of Boxes'
//                                     name='Id_Card'
//                                     rules={[
//                                         {
//                                             max: 20,
//                                             message: maxMsg,
//                                         },
//                                     ]}
//                                 >
//                                     <Input />
//                                 </Form.Item>
//                             </Col>
//                         </Row>

//                         <Row>
//                             <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
//                                 <Form.Item
//                                     label='Netweight'
//                                     name='Id_Card'
//                                     rules={[
//                                         {
//                                             max: 20,
//                                             message: maxMsg,
//                                         },
//                                     ]}
//                                 >
//                                     <Input />
//                                 </Form.Item>
//                             </Col>
//                         </Row>

//                         <Row>
//                             <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
//                                 <Form.Item
//                                     label='Grossweight'
//                                     name='Id_Card'
//                                     rules={[
//                                         {
//                                             max: 20,
//                                             message: maxMsg,
//                                         },
//                                     ]}
//                                 >
//                                     <Input />
//                                 </Form.Item>
//                             </Col>
//                         </Row>

//                         <Row>
//                             <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
//                                 <Form.Item
//                                     label='InvoiceDate'
//                                     name='Id_Card'
//                                     rules={[
//                                         {
//                                             max: 20,
//                                             message: maxMsg,
//                                         },
//                                     ]}
//                                 >
//                                     <Input />
//                                 </Form.Item>
//                             </Col>
//                         </Row>

//                         <Row>
//                             <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
//                                 <Form.Item
//                                     label='Order date'
//                                     name='Id_Card'
//                                     rules={[
//                                         {
//                                             max: 20,
//                                             message: maxMsg,
//                                         },
//                                     ]}
//                                 >
//                                     <Input />
//                                 </Form.Item>
//                             </Col>
//                         </Row>

//                         <Row>
//                             <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
//                                 <Form.Item
//                                     label='Required Date'
//                                     name='Id_Card'
//                                     rules={[
//                                         {
//                                             max: 20,
//                                             message: maxMsg,
//                                         },
//                                     ]}
//                                 >
//                                     <Input />
//                                 </Form.Item>
//                             </Col>
//                         </Row>

//                         <Row>
//                             <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
//                                 <Form.Item
//                                     label='Shipped Date'
//                                     name='Id_Card'
//                                     rules={[
//                                         {
//                                             max: 20,
//                                             message: maxMsg,
//                                         },
//                                     ]}
//                                 >
//                                     <Input />
//                                 </Form.Item>
//                             </Col>
//                         </Row>

//                         <Col className='border-top mb-2'></Col>

//                         <Row>
//                             <Col className='text-right mb-0 ps-5 pe-3 pt-1 pb-0 '>
//                                 Sub total : <span className='text-success fw-bold'>{1}</span>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col className='text-center mb-0 ps-5 pe-3 pt-1 pb-1'>
//                                 Freight : <span className='text-success fw-bold '>{1}</span>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col className='text-center mb-0 ps-5 pe-3 pt-1 pb-1'>
//                                 Insurance : <span className='text-success fw-bold '>{1}</span>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col className='text-center mb-0 ps-5 pe-3 pt-1 pb-1'>
//                                 Packing : <span className='text-success fw-bold '>{1}</span>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col className='text-center mb-0 ps-5 pe-3 pt-1 pb-1'>
//                                 Grand Total : <span className='text-success fw-bold'>{1}</span>
//                             </Col>
//                         </Row>



//                         <Space size='small' className='mt-2 d-flex justify-content-end'>
//                             <Button type='default' onClick={() => setTabActive('1')} icon={<CloseOutlined />} className='min-w-100-px'>
//                                 Close
//                             </Button>
//                             <Button
//                                 type='primary'
//                                 onClick={() => {
//                                     form.submit()
//                                 }}
//                                 icon={<SaveOutlined />}
//                                 className='min-w-100-px'
//                             >
//                                 Save
//                             </Button>
//                         </Space>
//                     </Form>
//                 </Col>

//                 <Col xs={24} sm={24} md={24} lg={11} xl={12} xxl={19}>
//                     <Row>
//                         <Col className=' mb-2' xs={24} sm={24} md={24} lg={11} xl={12} xxl={8}>
//                             <InputGroup before='Product'>
//                                 <Input
//                                     placeholder='Product'
//                                     onChange={(value) => {
//                                         setFilters({ ...filters, Key_Search: value.target.value ?? '' })
//                                     }}
//                                 />
//                             </InputGroup>
//                         </Col>
//                     </Row>
//                     <Table
//                         size='small'
//                         dataSource={logTable}
//                         rowKey='Index'
//                         columns={columns}
//                         className='border'
//                         pagination={{
//                             size: 'default',
//                             pageSize: 20,
//                             showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
//                         }}
//                         scroll={{ x: 700 }}
//                         rowClassName={(record, index) => {
//                             return record.Status === 'Error' ? 'bg-warning' : ''
//                         }}
//                     />
//                     <Col className=' mb-2'></Col>
//                     <Table
//                         size='small'
//                         dataSource={logTable}
//                         rowKey='Index'
//                         columns={column}
//                         className='border'
//                         pagination={{
//                             size: 'default',
//                             pageSize: 20,
//                             showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
//                         }}
//                         scroll={{ x: 700 }}
//                         rowClassName={(record, index) => {
//                             return record.Status === 'Error' ? 'bg-warning' : ''
//                         }}
//                     />
//                 </Col>
//             </Row>
//         </Card>
//     )
// }

// TableDeclaretemporaryAbsence.propTypes = {
//     onSearch: PropTypes.func,
// }

// TableDeclaretemporaryAbsence.defaultProps = {
//     onSearch: () => { },
// }

// export default TableDeclaretemporaryAbsence