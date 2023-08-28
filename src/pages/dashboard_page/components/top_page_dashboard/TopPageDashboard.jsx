import { Radio } from 'antd'
import React from 'react'
const TopPageDashboard = () => (
    <>
        <Radio.Group defaultValue='a' buttonStyle='solid' style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <Radio.Button value='a'>Production overview</Radio.Button>
            <Radio.Button value='b'>Personnel overview</Radio.Button>
        </Radio.Group>
    </>
)
export default TopPageDashboard
