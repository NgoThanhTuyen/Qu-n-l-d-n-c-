import { Button, Form, Input } from 'antd'
import React from 'react'
import { ArrowRightOutlined } from '@ant-design/icons'
import './Style.css'

function LogInPage() {

  return (
    <div className='login-form'>
      <div className='form pt-0'>
        <div className='logo mb-0'>
          <img alt='logo' style={{ width: 180 }} src='/assets/imgs/logo.png' />
        </div>
        <h2 className='text-center text-primary'>HỆ THỐNG QUẢN LÝ DÂN CƯ</h2>
        <Form>
          <Form.Item
            name='UserName'
            hasFeedback
            rules={[
              { required: true, message: 'Vui lòng nhập tài khoản' },
              { min: 3, message: 'Tối thiểu 3 ký tự' },
              { max: 70, message: 'Tối đa 70 ký tự' },
            ]}
          >
            <Input placeholder='Tài khoản' autoFocus={!0} />
          </Form.Item>
          <Form.Item
            name='UserPass'
            hasFeedback
            rules={[
              { required: true, message: 'Vui lòng nhập mật khẩu' },
              { min: 6, message: 'Tối thiểu 6 ký tự' },
              { max: 70, message: 'Tối đa 70 ký tự' },
            ]}
          >
            <Input type='password' placeholder='Mật khẩu' />
          </Form.Item>
          <Button className='mt-3' type='primary' htmlType='submit' icon={<ArrowRightOutlined />}>
            Đăng nhập
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default LogInPage
