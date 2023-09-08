import { Badge, Form, Input, Spin, Tooltip } from 'antd'
import React, { useEffect, useState } from 'react'
import apiUtil from '../../utils/apiUtil'

const ProfileUser = () => {
    const [form] = Form.useForm()
    const [typeManage, setTypeManage] = useState(null)
    const [data, setData] = useState(null)
    const [isBusy, setBusy] = useState(true)

    useEffect(() => {
        apiUtil.auth
            .querySingle({
                name: 'USER_GET_INFO',
                param: {
                    USER_NAME: localStorage.getItem('customer_api_username'),
                },
            })
            .then((data) => {
                if (data.IsSuccess) {
                    data = data.Result
                    setData(data)
                    setTimeout(() => {
                        form.setFieldsValue(data)
                        if (data.AREA_CODE !== null) {
                            setTypeManage('IsArea')
                            form.setFieldValue('TYPE_MANAGER', true)
                        }
                        if (data.PROVINCE_CODE !== null) {
                            setTypeManage('IsProvince')
                            form.setFieldValue('TYPE_MANAGER', true)
                        }
                        if (data.STORE_CODE !== null) {
                            setTypeManage('IsStore')
                            form.setFieldValue('TYPE_MANAGER', true)
                        }
                    }, 0)
                }
            })
            .finally(() => {
                setBusy(!1)
            })
        //eslint-disable-next-line
    }, [])
    return (
        <Spin spinning={isBusy}>
            <Form form={form} layout='horizontal'>
                <Form.Item labelCol={{ span: 8 }} labelAlign='left' label='Tài khoản' name='USER_NAME'>
                    <Input readOnly />
                </Form.Item>
                <Form.Item labelCol={{ span: 8 }} labelAlign='left' label='Họ và tên' name='FULL_NAME' initialValue={''}>
                    <Input readOnly />
                </Form.Item>
                <Form.Item labelCol={{ span: 8 }} labelAlign='left' label='Số điện thoại' name='USER_PHONE'>
                    <Input readOnly />
                </Form.Item>
                <Form.Item labelCol={{ span: 8 }} labelAlign='left' label='Vai trò'>
                    <Badge className='p-0 text-center' count={data?.ROLE_NAME} style={{ backgroundColor: `${data?.COLOR_HEX}` }} />
                </Form.Item>
                <FormItemManage typeManage={typeManage} record={data} />
            </Form>
        </Spin>
    )
}

export const FormItemManage = ({ typeManage = '', record }) => {
    switch (typeManage) {
        case 'IsStore':
            return (
                <Form.Item labelCol={{ span: 8 }} labelAlign='left' name='STORE_CODE' label='Phạm vị quản lý'>
                    <Tooltip placement='left' title={`Quản lý cửa hàng`}>
                        <Badge style={{ backgroundColor: '#448ef7' }} count={`CH: [ ${record.STORE_CODE} ] ${record.STORE_NAME}`} />
                    </Tooltip>
                </Form.Item>
            )
        case 'IsProvince':
            return (
                <Form.Item labelCol={{ span: 8 }} labelAlign='left' name='PROVINCE_CODE' label='Phạm vị quản lý'>
                    <Tooltip placement='left' title={`Quản lý tỉnh thành`}>
                        <Badge style={{ backgroundColor: '#e13c39' }} count={`T: [ ${record.PROVINCE_CODE} ] ${record.PROVINCE_NAME}`} />
                    </Tooltip>
                </Form.Item>
            )
        case 'IsArea':
            return (
                <Form.Item labelCol={{ span: 8 }} labelAlign='left' name='AREA_CODE' label='Phạm vị quản lý'>
                    <Tooltip placement='left' title={`Quản lý khu vực`}>
                        <Badge style={{ backgroundColor: '#d84293' }} count={`KV: [ ${record.AREA_CODE} ] ${record.AREA_NAME}`} />
                    </Tooltip>
                </Form.Item>
            )
        default:
            return null
    }
}

export default ProfileUser
