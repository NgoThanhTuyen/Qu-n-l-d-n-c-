import 'antd/dist/antd.min.css'
import { ConfigProvider } from 'antd'
import 'moment/locale/es'
import React, { useState } from 'react'
import { Outlet, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import AppContext from './contexts/AppContext'
import locale from 'antd/lib/date-picker/locale/en_US'
import {
  LayOutPage,
  DashboardPage,
  OrganizePage,
  CompanyPage,
  DepartmentPage,
  LocationPage,
  UserOrganizePage,
  UserCompanyPage,
  UserOperatePage,
  LogInPage,
} from './pages'

function App() {
  const [isLogin, setIsLogin] = useState(() => {
    const loginInfo = localStorage.getItem('login_info')
    return loginInfo !== null
  })
  const [loginInfo, setLoginInfo] = useState(() => {
    const info = localStorage.getItem('login_info')
    if (info !== null) {
      return JSON.parse(info)
    } else return null
  })
  const [pageTitle, setPageTitle] = useState('')
  const appSettings = {
    isLogin,
    setIsLogin,
    loginInfo,
    setLoginInfo,
    pageTitle,
    setPageTitle,
  }

  return (
    <ConfigProvider locale={locale}>
      <AppContext.Provider value={appSettings}>
        <Routes>
          <Route path='/' element={<Outlet />}>
            <Route index element={<LogInPage />} />
            <Route element={!isLogin ? <Navigate to='/' replace /> : <LayOutPage />}>
              {/* <Route element={<LayOutPage />}> */}
              <Route path='dashboard' element={<DashboardPage />} />
              <Route path='category'>
                <Route path='organize' element={<OrganizePage />} />
                <Route path='company' element={<CompanyPage />} />
                <Route path='department' element={<DepartmentPage />} />
                <Route path='location' element={<LocationPage />} />
              </Route>
              <Route path='user'>
                <Route path='organize' element={<UserOrganizePage />} />
                <Route path='company' element={<UserCompanyPage />} />
                <Route path='operate' element={<UserOperatePage />} />
              </Route>
            </Route>
            {/* </Route> */}
          </Route>
        </Routes>
      </AppContext.Provider>
    </ConfigProvider>
  )
}

export default App
