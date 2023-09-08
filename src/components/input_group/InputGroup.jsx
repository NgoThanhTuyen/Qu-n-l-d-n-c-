import React from 'react'
import PropTypes from 'prop-types'

function InputGroup(props) {
    const { textBefore, textAfter, children } = props

    const isBefore = () => textBefore !== '' && textBefore !== undefined 

    const isAfter = () => textAfter !== '' || textAfter !== undefined

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
        if (textBefore === '' || textBefore === undefined) return ''
        else return <span className='ant-input-group-addon'>{textBefore}</span>
    }

    const renderAfter = () => {
        if (textAfter === '' || textAfter === undefined) return ''
        else return <span className='ant-input-group-addon'>{textAfter}</span>
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
    textBefore: PropTypes.string,
    textAfter: PropTypes.string,
}

InputGroup.defaultProps = {
    textBefore: '',
    textAfter: '',
}

export default InputGroup
