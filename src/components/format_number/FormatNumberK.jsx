import React, { Fragment } from 'react'

function FormatNumberK(props) {
    const { children } = props

    const kFormatter = (num) => {
        if (isNaN(num)) {
            return 0
        } else {
            return Math.abs(num) > 999
                ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + ' K'
                : Math.sign(num) * Math.abs(num)
        }
    }

    return <Fragment>{kFormatter(children)}</Fragment>
}

export default FormatNumberK
