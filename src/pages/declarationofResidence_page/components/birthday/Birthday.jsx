import { Button, Col, Row, Space, Card, Form, Input, } from 'antd'
import React from 'react'
import { UserAddOutlined, UserDeleteOutlined } from '@ant-design/icons'

function ActionButton(props) {

    return (
        <Row gutter={[12, 12]}>
            <Form.Item
                label='Birthday'
                name=''
            >
            </Form.Item>
            <Col>
                <Form.Item
                    label={
                        <span>
                            <UserAddOutlined />
                        </span>
                    }
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={
                        <span>
                            <UserAddOutlined />
                        </span>
                    }
                    name=''
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={
                        <span>
                            <UserDeleteOutlined />
                        </span>
                    }
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={
                        <span>
                            <UserDeleteOutlined />
                        </span>
                    }
                >
                    <Input />
                </Form.Item>
            </Col>
        </Row >
    )
}

export default ActionButton
