import React, { useContext, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { DashboardOutlined, MenuFoldOutlined, MenuUnfoldOutlined, TagsOutlined, ToolOutlined, UserOutlined, UnlockOutlined } from '@ant-design/icons'
import { Layout, Menu, Space } from 'antd'
import AppContext from '../../contexts/AppContext'
const { Header, Content, Sider } = Layout

const menuItems = [
    getItem('dashboard-chart-view,dashboard-report-export,dashboard-report-view', <Link to='/dashboard'>Tổng quan</Link>, 'dashboard', <DashboardOutlined />, 'Tổng quan'),
    getItem('area-house-view,area-quiet-view,area-poweroutageschedule-view,area-environment-view', 'Khu vực trảng bom', 'area', <TagsOutlined />, '', [
        getItem('area-house-view', <Link to='/area/house'>Quản lý nhà ở</Link>, 'area-house', '', 'Khu vực trảng bom / Quản lý nhà ở'),
        getItem('area-quiet-view', <Link to='/area/quiet'>Quản lý trật tự</Link>, 'area-quiet', '', 'Khu vực trảng bom / Quản lý trật tự'),
        getItem('area-environment-view', <Link to='/area/environment'>Quản lý môi trường</Link>, 'area-environment', '', 'Khu vực trảng bom / Quản lý môi trường'),
        getItem('area-poweroutageschedule-view', <Link to='/area/poweroutageschedule'>Quản lý lịch cúp điện</Link>, 'area-poweroutageschedule', '', 'Khu vực trảng bom / Quản lý lịch cúp điện'),
    ]),
    getItem('information-declaretemporaryAbsence-view,information-declarationofResidence-view,information-temporaryregistration-view', 'Thông tin công dân', 'information', <UnlockOutlined />, '', [
        getItem('information-declaretemporaryAbsence-view', <Link to='/information/declaretemporaryAbsence'>Khai báo tạm vắng</Link>, 'usinformationer-declaretemporaryAbsence', '', 'Thông tin công dân / Khai báo tạm vắng'),
        getItem('information-declarationofResidence-view', <Link to='/information/declarationofResidence'>Khai báo lưu trú</Link>, 'information-declarationofResidence', '', 'Thông tin công dân / Khai báo lưu trú'),
        getItem('information-temporaryregistration-view', <Link to='/information/temporaryregistration'>Đăng ký tạm trú</Link>, 'information-temporaryregistration', '', 'Thông tin công dân / Đăng ký tạm trú'),
    ]),
    // getItem('no-auth', 'Nhân sự', 'staff', <UserOutlined />, '', [
    //     getItem('no-auth', <Link to='/staff/employee'>Nhân viên</Link>, 'staff-employee', '', 'Nhân sự / Nhân viên'),
    //     getItem('no-auth', <Link to='/staff/calendar'>Lịch làm việc</Link>, 'staff-calendar', '', 'Nhân sự / Lịch làm việc'),
    //     getItem('no-auth', <Link to='/staff/shift'>Ca làm việc</Link>, 'staff-shift', '', 'Nhân sự / Ca làm việc'),
    //     getItem('no-auth', <Link to='/staff/report'>Báo cáo</Link>, 'staff-report', '', 'Nhân sự / Báo cáo'),
    // ]),
    // getItem('no-auth', 'Hệ thống', 'system', <ToolOutlined />, '', [
    //     getItem('system-role-view', <Link to='/system/role'>Quyền</Link>, 'system-role', '', 'Hệ thống / Quyền'),
    //     getItem('system-config-view', <Link to='/system/config'>Cấu hình</Link>, 'system-config', '', 'Hệ thống / Cấu hình'),
    //     getItem('system-log-view', <Link to='/system/log'>Log</Link>, 'system-log', '', 'Hệ thống / Log'),
    //     getItem('no-auth', <Link to='/system/version'>Phiên bản</Link>, 'system-version', '', 'Hệ thống / Phiên bản'),
    // ]),
]

function getItem(right, label, key, icon, title, children, type) {
    return { key, icon, title, children, label, type }
}

function LayoutPage(props) {
    const appSettings = useContext(AppContext)
    const location = useLocation()
    const [collapsed, setCollapsed] = useState(false)
    const [ setIsShowModalProfile] = useState(false)

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
