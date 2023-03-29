import { Button, Table, Modal, Input, Space, Form,Card } from 'antd'
import React, { useState } from 'react'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import RowAction from '../../components/row_action/RowAction';
import {FitleOrganize, TableOriganize, ModalEdit, ModalAdd} from './components'
function OrganizePage() {

    const [filters, setFilters] = useState({
        Key_Search: '',
    })
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const [isShowModalAdd, setIsShowModalAdd] = useState(false)

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const [isEdit, setEdit] = useState(false)

    const [editStudent, seteditStudent] = useState(null)

    const [dataSource, setdataSource] = useState([
        {
            id: 1,
            name: 'Duy',
            email: 'Duy@gmail.com',
            address: 'Bửu Long'
        },
        {
            id: 2,
            name: 'Huy',
            email: 'Huy@gmail.com',
            address: 'Bửu Long'
        },
        {
            id: 3,
            name: 'Tuyển',
            email: 'Tuyển@gmail.com',
            address: 'Bửu Long'
        },
        {
            id: 4,
            name: 'Liêm',
            email: 'Liêm@gmail.com',
            address: 'Bửu Long'
        },
    ])
    const columns = [
        {
            key: '1',
            title: 'Id',
            dataIndex: 'id'
        },
        {
            key: '2',
            title: 'Họ và tên',
            dataIndex: 'name'
        },
        {
            key: '3',
            title: 'email',
            dataIndex: 'email'
        },
        {
            key: '4',
            title: 'Địa chỉ',
            dataIndex: 'address'
        },
        {
            key: '5',

            title: 'Thao tác',
            align: 'right',
            render: (record) => {
                return (
                    <Space>
                        <RowAction icon={<EditOutlined />} title='Sửa' onClick={() => onEditOutlined(record)} />
                        <RowAction icon={<DeleteOutlined style={{ color: 'red' }} />} title='Xóa' onClick={() => onDeleteOutlined(record)} />
                    </Space>
                )
            }
        },
    ];
    //    xóa
    const onDeleteOutlined = (record) => {
        Modal.confirm({
            title: 'Ban có muốn xóa không?',
            okText: 'Có',
            cancelText: 'không',
            onOk: () => {
                setdataSource((pre) => {
                    return pre.filter((student) => student.id !== record.id);

                })
            }
        })

    }
    // sửa
    const onEditOutlined = (record) => {
        setEdit(true);
        seteditStudent({ ...record })
    }
    const resetEdit = () => {
        setEdit(false)
        seteditStudent(null)
    }
    return (
        <div className='HomePage'>
            <header className='HomePage-header'>
            <Card size='small'>
                <FitleOrganize
                    filters={filters}
                    onAdd={() => setIsShowModalAdd(true)}
                    onChange={(values) => {
                        setFilters(values)
                    }}
                />
            </Card>
                <>
                    <Button type="primary" onClick={showModal}> Thêm mới </Button>
                
                    <Modal title="Thêm mới" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText='Lưu' cancelText='Hủy'>
                        <Form.Item
                            label='Họ và tên'
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label='email'
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label='Địa chỉ'
                        >
                            <Input />
                        </Form.Item>
                    </Modal>
                </>
                <Table columns={columns} dataSource={dataSource}></Table>
                <Modal
                    title='Sửa'
                    open={isEdit}
                    okText='Lưu'
                    cancelText='Hủy'
                    onCancel={() => {
                        resetEdit()
                    }}
                    onOk={() => {
                        setdataSource((pre) => {
                            return pre.map((student) => {
                                if (student.id === editStudent.id) {
                                    return editStudent
                                } else {
                                    return student;
                                }
                            })
                        })
                        resetEdit()
                    }}
                >
                    <Form.Item
                        label='Họ và tên'
                    >
                        <Input
                            value={editStudent?.name}
                            onChange={(e) => {
                                seteditStudent((pre) => {
                                    return { ...pre, name: e.target.value }
                                })
                            }}
                        />
                    </Form.Item>
                    <Form.Item
                        label='email'
                    >
                        <Input
                            value={editStudent?.email}
                            onChange={(e) => {
                                seteditStudent((pre) => {
                                    return { ...pre, email: e.target.value }
                                })
                            }}
                        />
                    </Form.Item>
                    <Form.Item
                        label='Địa chỉ'
                    >
                        <Input
                            value={editStudent?.address}
                            onChange={(e) => {
                                seteditStudent((pre) => {
                                    return { ...pre, address: e.target.value }
                                })
                            }}
                        />
                    </Form.Item>
                </Modal>

            </header>
        </div>
    )
}

export default OrganizePage