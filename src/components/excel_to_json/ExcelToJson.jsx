import PropTypes from 'prop-types'
import React, { Fragment, useRef } from 'react'
import apiUtil from '../../utils/apiUtil'

const maxSizeInByte = 5_242_880 // 5MB

function ExcelToJson(props) {
    const { children, onStart, onEnd, onCompleted } = props

    const fileInput = useRef(null)

    const handleTrigger = () => {
        fileInput.current.click()
    }

    const handleUpload = (e) => {
        const files = e.target.files
        if (files.length !== 0) {
            const file = files[0]
            const name = file.name
            const sizeInByte = file.size
            if (sizeInByte > maxSizeInByte) {
                return
            }
            const formData = new FormData()
            formData.append('formFile', file)
            formData.append('fileName', name)
            onStart()
            apiUtil.any
                .excelToJson(formData)
                .then((data) => {
                    onCompleted(data)
                })
                .finally(() => {
                    fileInput.current.value = null
                    onEnd()
                })
        }
    }

    const childrenWithProps = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { onClick: handleTrigger })
        }
        return child
    })

    return (
        <Fragment>
            <input
                style={{ display: 'none' }}
                type='file'
                accept='.xlsx'
                ref={fileInput}
                onChange={handleUpload}
            />
            {childrenWithProps}
        </Fragment>
    )
}

ExcelToJson.propTypes = {
    onStart: PropTypes.func,
    onEnd: PropTypes.func,
    onCompleted: PropTypes.func,
}

ExcelToJson.defaultProps = {
    onStart: () => { },
    onEnd: () => { },
    onCompleted: () => { },
}

export default ExcelToJson
