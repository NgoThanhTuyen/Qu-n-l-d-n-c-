import React from 'react'
import PropTypes from 'prop-types'

function InputGroup(props) {
    const { before, after, children } = props

    const isBefore = () => before !== '' && before !== undefined 

    const isAfter = () => after !== '' || after !== undefined

    const renderClass = () => {
        let className = 'ant-input-group-wrapper'
        if (isBefore) {
            className += ' addon-text-border-radius-left-0'
        }
        if (isAfter) {
            className += ' addon-text-border-radius-right-0'
        }
        return className
    }

    const renderBefore = () => {
        if (before === '' || before === undefined) return ''
        else return <span className='ant-input-group-addon'>{before}</span>
    }

    const renderAfter = () => {
        if (after === '' || after === undefined) return ''
        else return <span className='ant-input-group-addon'>{after}</span>
    }

    return (
        <div className={renderClass()}>
            <div className='ant-input-wrapper ant-input-group'>
                {renderBefore()}
                {children}
                {renderAfter()}
            </div>
        </div>
    )
}

InputGroup.propTypes = {
    before: PropTypes.string,
    after: PropTypes.string,
}

InputGroup.defaultProps = {
    before: '',
    after: '',
}

export default InputGroup
