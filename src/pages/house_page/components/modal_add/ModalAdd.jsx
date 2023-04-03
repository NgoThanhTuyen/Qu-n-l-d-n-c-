import { CloseOutlined, SaveOutlined } from '@ant-design/icons'
import { Button, Checkbox, Col, DatePicker, Form, Input, InputNumber, Modal, Row, Select } from 'antd'
import PropTypes from 'prop-types'
import { useState } from 'react'
import Config from '../../../../Config.json'

const { reqInputMsg, maxMsg, reqSelectMsg, dateFormat } = Config

const { Option } = Select

function ModalAdd(props) {
    const { onCancel, isShow, leaveTypes, classifies } = props

    const [form] = Form.useForm()

    const [isBusy] = useState(false)

    const [filterClassifies, setFilterClassifies] = useState([])

    return (
        <Modal
            title='Thêm khu vực nhà ở'
            open={isShow}
            onCancel={onCancel}
            footer={[
                <Button type='default' key='back' onClick={onCancel} icon={<CloseOutlined />} tabIndex={-1}>
                    Hủy
                </Button>,
                <Button type='primary' key='submit' onClick={() => form.submit()} icon={<SaveOutlined />} loading={isBusy} htmlType='submit'>
                    Lưu
                </Button>,
            ]}
            destroyOnClose={true}
            afterClose={() => {
                form.resetFields()
                setFilterClassifies([])
            }}
            maskClosable={false}
        >
            <Form
                form={form}
                layout='vertical'
            >
                <Row gutter={[24, 24]}>
                    <Col span={12}>
                        <Form.Item
                            name='1'
                            label='Họ và tên người đại diện'
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập họ và tên',
                                },
                                {
                                    min: 2,
                                    // eslint-disable-next-line
                                    message: 'Nhập tối thiểu ${min} ký tự',
                                },
                                {
                                    max: 200,
                                    // eslint-disable-next-line
                                    message: 'Nhập tối đa ${max} ký tự',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>

                    <Col span={12}>

                        <Form.Item
                            label='Ngày sinh'
                            name='2'
                            initialValue={null}
                            rules={[
                                {
                                    required: true,
                                    message: reqSelectMsg,
                                },
                            ]}
                        >
                            <DatePicker className='w-100' format={dateFormat} placeholder='dd/mm/yyyy' />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name='3'
                            label='CMND/CCCD'
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập CMND/CCCD',
                                },
                                {
                                    min: 2,
                                    // eslint-disable-next-line
                                    message: 'Nhập tối thiểu ${min} ký tự',
                                },
                                {
                                    max: 50,
                                    // eslint-disable-next-line
                                    message: 'Nhập tối đa ${max} ký tự',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item
                            name='4'
                            label='Số điện thoại'
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập Số điện thoại',
                                },
                                {
                                    min: 2,
                                    // eslint-disable-next-line
                                    message: 'Nhập tối thiểu ${min} ký tự',
                                },
                                {
                                    max: 50,
                                    // eslint-disable-next-line
                                    message: 'Nhập tối đa ${max} ký tự',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                        <Form.Item
                            name='5'
                            label='Địa chỉ nhà'
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập Địa chỉ nhà',
                                },
                                {
                                    min: 2,
                                    // eslint-disable-next-line
                                    message: 'Nhập tối thiểu ${min} ký tự',
                                },
                                {
                                    max: 200,
                                    // eslint-disable-next-line
                                    message: 'Nhập tối đa ${max} ký tự',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Modal>
    )
}

ModalAdd.propTypes = {
    isShow: PropTypes.bool,
    onSave: PropTypes.func,
    onCancel: PropTypes.func,
    leaveTypes: PropTypes.array,
    classifies: PropTypes.array,
}

ModalAdd.defaultProps = {
    isShow: false,
    onSave: () => { },
    onCancel: () => { },
    leaveTypes: [],
    classifies: [],
}

export default ModalAdd
