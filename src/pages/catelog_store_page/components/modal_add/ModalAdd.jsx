import { CloseOutlined, EnvironmentOutlined, SaveOutlined } from '@ant-design/icons'
import { Button, Col, Form, Input, Modal, Row } from 'antd'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { SelectProvince, SelectSalePartner, SelectTypeStore } from '../../../../components'
import MapView from '../../../../components/map_view/MapView'

function ModalAdd(props) {
    const { onCancel, isShow } = props
    const [coordinatesInput, setCoordinatesInput] = useState('')
    const [coordinates, setCoordinates] = useState(null)
    const openMap = () => {
        const latLng = coordinatesInput.split(coordinatesInput.indexOf('°') >= 0 ? ' ' : ',')
        const sanitizedLatitude = latLng[0] || ''
        const sanitizedLongitude = latLng[1] || ''

        let mapUrl = 'https://www.google.com/maps/place/'
        mapUrl += `${sanitizedLatitude},${sanitizedLongitude}`
        window.open(mapUrl)
    }
    const [form] = Form.useForm()

    const [isBusy] = useState(false)

    return (
        <Modal
            title='Thêm mới cửa hàng'
            width={1000}
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
            }}
            maskClosable={false}
        >
            <Form
                form={form}
                layout='vertical'
                onValuesChange={(changedValues, allValues) => {
                    const keyArr = Object.keys(changedValues)
                    const key = keyArr[0]
                    if (key === 'LAT_LNG') {
                        const value = allValues.LAT_LNG
                        const latLng = value && value.split(value.indexOf('°') >= 0 ? ' ' : ',')
                        if (value && latLng.length === 2) {
                            setCoordinates({ lat: latLng[0], lng: latLng[1] })
                        } else {
                            setCoordinates({ lat: null, lng: null })
                        }
                    }
                }}
            >
                <Row gutter={[12, 12]}>
                    <Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={12}>
                        <Form.Item
                            label='Mã cửa hàng'
                            name='STORE_CODE'
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập mã cửa hàng',
                                },
                                {
                                    max: 50,
                                    // eslint-disable-next-line
                                    message: 'Nhập tối đa ${max} ký tự.',
                                },
                            ]}
                            required
                        >
                            <Input placeholder='Mã cửa hàng' />
                        </Form.Item>
                        <Form.Item
                            label='Loại cửa hàng'
                            name='STORE_TYPE_NAME'
                            rules={[
                                {
                                    required: true,
                                    // eslint-disable-next-line
                                    message: 'Vui lòng chọn loại cửa hàng',
                                },
                            ]}
                            required
                        >
                            <SelectTypeStore />
                        </Form.Item>
                        <Form.Item
                            name='STORE_TAX'
                            label='Mã số thuế cửa hàng'
                            rules={[
                                {
                                    max: 200,
                                    // eslint-disable-next-line
                                    message: 'Nhập tối đa ${max} ký tự.',
                                },
                            ]}
                        >
                            <Input placeholder='Mã số thuế cửa hàng' />
                        </Form.Item>
                        <Form.Item
                            name='STORE_PHONE'
                            label='Số điện thoại cửa hàng'
                            rules={[
                                {
                                    max: 100,
                                    // eslint-disable-next-line
                                    message: 'Nhập tối đa ${max} ký tự.',
                                },
                            ]}
                        >
                            <Input placeholder='Số điện thoại cửa hàng' />
                        </Form.Item>
                        <Form.Item
                            name='NOTE_WORKING'
                            label='Thời gian làm việc'
                            rules={[
                                {
                                    max: 2000,
                                    // eslint-disable-next-line
                                    message: 'Nhập tối đa ${max} ký tự.',
                                },
                            ]}
                        >
                            <Input.TextArea placeholder='Thời gian làm việc' rows={4}></Input.TextArea>
                        </Form.Item>
                        <Form.Item
                            name='STORE_DES'
                            label='Ghi chú'
                            rules={[
                                {
                                    max: 300,
                                    // eslint-disable-next-line
                                    message: 'Nhập tối đa ${max} ký tự.',
                                },
                            ]}
                        >
                            <Input.TextArea placeholder='Ghi chú' rows={4}></Input.TextArea>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={12}>
                        <Form.Item
                            label='Tên cửa hàng'
                            name='STORE_NAME'
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập tên cửa hàng',
                                },
                                {
                                    max: 200,
                                    // eslint-disable-next-line
                                    message: 'Nhập tối đa ${max} ký tự.',
                                },
                            ]}
                            required
                        >
                            <Input placeholder='Tên cửa hàng' />
                        </Form.Item>
                        <Form.Item
                            name='PROVINCE_ID'
                            label='Tỉnh thành quản lý'
                            required
                            rules={[
                                {
                                    required: true,
                                    // eslint-disable-next-line
                                    message: 'Vui lòng chọn tỉnh thành quản lý',
                                },
                            ]}
                        >
                            <SelectProvince />
                        </Form.Item>
                        <Form.Item label='Đối tác bán lẻ' name='SALE_PARTNER_ID'>
                            <SelectSalePartner />
                        </Form.Item>
                        <Form.Item
                            name='STORE_EMAIL'
                            label='Email cửa hàng'
                            rules={[
                                {
                                    max: 200,
                                    // eslint-disable-next-line
                                    message: 'Nhập tối đa ${max} ký tự.',
                                },
                            ]}
                        >
                            <Input placeholder='Email cửa hàng' />
                        </Form.Item>
                        <Form.Item
                            name='STORE_ADDRESS'
                            label='Địa chỉ cửa hàng'
                            rules={[
                                {
                                    max: 300,
                                    // eslint-disable-next-line
                                    message: 'Nhập tối đa ${max} ký tự.',
                                },
                            ]}
                        >
                            <Input.TextArea placeholder='Địa chỉ cửa hàng' rows={4}></Input.TextArea>
                        </Form.Item>
                        <Form.Item name='LAT_LNG' label='Tọa độ'>
                            <Input placeholder='Vị trí kinh độ, vĩ độ' onChange={(e) => setCoordinatesInput(e.target.value)} />
                        </Form.Item>
                        <i>Ví dụ: 10°57'36.7"N 106°50'45.5"E hoặc 10.960183, 106.845963</i>
                        <MapView
                            lat={coordinates?.lat} //Truyền Lat: Thoải mái
                            lng={coordinates?.lng} //Truyền Lng: Thoải mái
                            height={230} //Mặc định là 230
                            width={'100%'} // Mặc định là 100%
                            isEdit={true} // Mặc định là false
                            onEdit={(e) => {
                                form.setFieldsValue({ LAT_LNG: e.lat.toFixed(7) + ',' + e.lng.toFixed(7) }) // Cập nhật giá trị vào ô input
                                setCoordinatesInput(e.lat.toFixed(7) + ',' + e.lng.toFixed(7))
                            }}
                        />
                        <Button className='mt-2 ' style={{ width: '100%' }} type='primary' icon={<EnvironmentOutlined />} onClick={openMap}>
                            Xem Google Map để lấy tọa độ
                        </Button>
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
    onSave: () => {},
    onCancel: () => {},
    leaveTypes: [],
    classifies: [],
}

export default ModalAdd
