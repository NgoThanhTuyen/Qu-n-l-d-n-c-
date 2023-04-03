import { CloseOutlined, SaveOutlined } from '@ant-design/icons'
import { Button, Checkbox, Col, DatePicker, Form, Input, InputNumber, Modal, Row, Select, message } from 'antd'
import PropTypes from 'prop-types'
import { useState } from 'react'
import Config from '../../../../Config.json'
import apiUtil from '../../../../utils/apiUtil'

const { reqInputMsg, maxMsg, reqSelectMsg, dateFormat } = Config

const { Option } = Select

const handleChange = (value) => { };

function ModalAdd(props) {
    const { onCancel, isShow, leaveTypes, classifies, onSave } = props

    const [form] = Form.useForm()

    const [isBusy, setIsBusy] = useState(false)

    const [filterClassifies, setFilterClassifies] = useState([])

    return (
        <Modal
            title='Khai báo tạm vắng'
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
                onFinish={(values) => {
                    setIsBusy(true)
                    apiUtil.auth
                        .execute({
                            name: 'DeclareTemporaryAbsence_Add',
                            param: values,
                        })
                        .then((data) => {
                            if (data.IsSuccess) {
                                message.success('Adding DeclareTemporaryAbsence successful')
                                onSave()
                            }
                        })
                        .finally(() => setIsBusy(false))
                }}
                onFinishFailed={() => { }}
                autoComplete='off'
            >
                <Row gutter={[24, 24]}>
                    <Col span={12}>
                        <Form.Item
                            name='name'
                            label='Họ và tên người đại diện'
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập họ và tên người đại diện',
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
                            name='NS'
                            initialValue={null}
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng chọn ngày sinh',
                                },
                            ]}
                        >
                            <DatePicker className='w-100' format={dateFormat} placeholder='dd/mm/yyyy' />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item
                            label='Giới tính'
                            name='GT'
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng chọn giới tính',
                                },
                            ]}
                            initialValue={null}
                        >
                            <Select
                                onChange={handleChange}
                                options={[
                                    {
                                        value: 'Nam',
                                        label: 'Nam',
                                    },
                                    {
                                        value: 'Nữ',
                                        label: 'Nữ',
                                    },
                                ]}
                            />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item
                            name='CMND/CCCD'
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
                            name='SDT'
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
                            name='NTT'
                            label='Nơi thường trú'
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập nơi thường trú',
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

                    <Col span={24}>
                        <Form.Item
                            name='NTTR'
                            label='Nơi tạm trú'
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập nơi tạm trú',
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

                    <Col span={24}>
                        <Form.Item
                            name='NOHT'
                            label='Nơi ở hiện tại'
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập nơi ở hiện tại',
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

                    <Col span={24}>
                        <Form.Item
                            name='DCN'
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
