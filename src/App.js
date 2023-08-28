import 'antd/dist/antd.min.css'
import { ConfigProvider } from 'antd'
import 'moment/locale/es'
import React, { useState } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import AppContext from './contexts/AppContext'
import locale from 'antd/lib/date-picker/locale/en_US'
import {
    LogInPage,
    LayOutPage,
    DashboardPage,
    Dashboard1Page,
    HousePage,
    QuietPage,
    EnvironmentPage,
    PowerOutageSchedulePage,
    DeclareTemporaryAbsencePage,
    DeclarationOfResidencePage,
    TemporaryRegistrationPage,
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
                        {/* <Route element={!isLogin ? <Navigate to='/' replace /> : <LayOutPage />}> */}
                        <Route element={<LayOutPage />}>
                            <Route path='dashboard' element={<DashboardPage />} />
                            <Route path='dashboard1' element={<Dashboard1Page />} />
                            <Route path='area'>
                                <Route path='house' element={<HousePage />} />
                                <Route path='quiet' element={<QuietPage />} />
                                <Route path='environment' element={<EnvironmentPage />} />
                                <Route path='poweroutageschedule' element={<PowerOutageSchedulePage />} />
                            </Route>
                            <Route path='information'>
                                <Route path='declaretemporaryAbsence' element={<DeclareTemporaryAbsencePage />} />
                                <Route path='declarationofResidence' element={<DeclarationOfResidencePage />} />
                                <Route path='temporaryregistration' element={<TemporaryRegistrationPage />} />
                            </Route>
                        </Route>
                    </Route>
                    {/* </Route> */}
                </Routes>
            </AppContext.Provider>
        </ConfigProvider>
    )
}

export default App
