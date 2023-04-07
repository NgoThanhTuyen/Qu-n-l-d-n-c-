import { SearchOutlined } from '@ant-design/icons'
import { Button, Col, Row, Space, Input, DatePicker } from 'antd'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { InputGroup } from '../../../../components'
import Config from '../../../../Config.json'

const { dateFormat } = Config

function FitleDeclaretemporaryAbsence(props) {

    const { filters: fils, onChange, onAdd } = props

    const [filters, setFilters] = useState({
        ...fils,
    })

    const onSearch = () => {
        const newFilters = { ...filters, PageIndex: 1 }
        onChange(newFilters)
    }

    return (
        <Row gutter={[12, 12]}>
            <Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={4}>
                {/* <InputGroup before='Product'>
                    <Input
                        placeholder='Product'
                        onChange={(value) => {
                            setFilters({ ...filters, Key_Search: value.target.value ?? '' })
                        }}
                    />
                </InputGroup> */}
            </Col>
        </Row>

    )
}
FitleDeclaretemporaryAbsence.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func,
    onAdd: PropTypes.func,
    departments: PropTypes.array,
}

FitleDeclaretemporaryAbsence.defaultProps = {
    filters: {},
    onChange: () => { },
    onAdd: () => { },
    departments: [],
}
export default FitleDeclaretemporaryAbsence