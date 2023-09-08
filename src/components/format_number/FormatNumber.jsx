import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

function FormatNumber(props) {
    const { children, maxDigit } = props

    return (
        <Fragment>{Number(children).toLocaleString('vi-VN', { maximumFractionDigits: maxDigit })}</Fragment>
    )
}

FormatNumber.propTypes = {
    children: PropTypes.number,
    maxDigit: PropTypes.number,
}

FormatNumber.defaultProps = {
    children: 0,
    maxDigit: 0,
}

export default FormatNumber
