import { DashboardOutlined, MenuFoldOutlined, MenuUnfoldOutlined, TagsOutlined, UserOutlined } from '@ant-design/icons'
import { Layout, Menu, Space } from 'antd'
import React, { useContext, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import AppContext from '../../contexts/AppContext'
const { Header, Content, Sider } = Layout

const menuItems = [
    getItem('dashboard-chart-view,dashboard-report-export,dashboard-report-view', <Link to='/dashboard'>DashboardPage</Link>, 'dashboard', <DashboardOutlined />, 'Tổng quan'),
    getItem('catalog-store-view,catalog-quiet-view,catalog-poweroutageschedule-view,catalog-environment-view', 'Danh mục', 'catalog', <TagsOutlined />, '', [
        getItem('catalog-store-view', <Link to='/catalog/store'>Cửa hàng</Link>, 'catalog-store', '', 'Khu vực trảng bom / Cửa hàng'),
        getItem('catalog-quiet-view', <Link to='/catalog/quiet'>Quản lý trật tự</Link>, 'catalog-quiet', '', 'Khu vực trảng bom / Quản lý trật tự'),
        getItem('catalog-environment-view', <Link to='/catalog/environment'>Quản lý môi trường</Link>, 'catalog-environment', '', 'Khu vực trảng bom / Quản lý môi trường'),
        getItem(
            'catalog-poweroutageschedule-view',
            <Link to='/catalog/poweroutageschedule'>Quản lý lịch cúp điện</Link>,
            'catalog-poweroutageschedule',
            '',
            'Khu vực trảng bom / Quản lý lịch cúp điện'
        ),
    ]),
]

function getItem(right, label, key, icon, title, children, type) {
    return { key, icon, title, children, label, type }
}

function LayoutPage(props) {
    const appSettings = useContext(AppContext)
    const location = useLocation()
    const [collapsed, setCollapsed] = useState(false)
    const [setIsShowModalProfile] = useState(false)

    const defaultOpenKeys = () => {
        const pathName = location.pathname
        const pathArr = pathName.split('/').slice(1)
        if (pathArr.length > 1) {
            pathArr.splice(-1)
        }
        return pathArr
    }

    const defaultSelectedKeys = () => {
        const pathName = location.pathname
        const selectedKey = pathName.slice(1).replaceAll('/', '-')
        return [selectedKey]
    }

    const onCollapse = () => {
        setCollapsed(!collapsed)
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
                collapsed={collapsed}
                onCollapse={onCollapse}
                className='shadow-sm'
                style={{
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    zIndex: 2,
                }}
            >
                <div className='border-bottom pb-2'>
                    <div className='text-center'>
                        <img src='/assets/imgs/logo.png' alt='Logo' style={{ width: 80 }} />
                    </div>
                    <div className='text-center'>
                        <h3 className='mb-0'>{!collapsed ? 'QUẢN LÝ DÂN CƯ' : 'QLDC'}</h3>
                    </div>
                </div>
                <Menu theme='light' defaultOpenKeys={defaultOpenKeys} defaultSelectedKeys={defaultSelectedKeys} mode='inline' style={{ borderRight: 'none' }} items={menuItems} />
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        textAlign: 'center',
                        marginBottom: 10,
                    }}
                    className='w-100'
                ></div>
            </Sider>
            <Layout className='site-layout' style={{ marginLeft: collapsed ? 80 : 200 }}>
                <Header
                    className='site-layout-background'
                    style={{
                        padding: 0,
                        position: 'fixed',
                        zIndex: 1,
                        width: collapsed ? 'calc(100vw - 80px)' : 'calc(100vw - 200px)',
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: onCollapse,
                            })}
                            <span id='page-title'>{appSettings.pageTitle}</span>
                        </div>
                        <div style={{ marginRight: '8px' }}>
                            <Space>
                                <span className='text-primary fw-bold cursor-pointer' onClick={() => setIsShowModalProfile(true)}>
                                    <Space>
                                        <UserOutlined />
                                        {appSettings.loginInfo?.FullName}
                                    </Space>
                                </span>
                            </Space>
                        </div>
                    </div>
                </Header>
                <div style={{ overflowY: 'auto', height: 'calc(100vh - 65px)', marginTop: 65 }}>
                    <Content className='main-content'>
                        <Outlet />
                    </Content>
                </div>
            </Layout>
        </Layout>
    )
}

LayoutPage.propTypes = {}

export default LayoutPage
