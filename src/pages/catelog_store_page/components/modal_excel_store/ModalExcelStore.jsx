import { CloseOutlined, DownloadOutlined, FileExcelOutlined, SaveOutlined } from '@ant-design/icons'
import { Button, Modal, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { ExcelToJson } from './../../../../components'
import apiUtil from './../../../../utils/apiUtil'
import TableExcelStore from './component/TableExcelStore'

const ModalExcelStore = (props) => {
    const { isShow, onCancel, data, setData } = props
    const [isDownloadingTemplate, setIsDownloadingTemplate] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isBusy, setIsBusy] = useState(false)
    const [shouldReset, setShouldReset] = useState(false)

    useEffect(() => {
        if (isShow) {
            setShouldReset(false)
        }
    }, [isShow])

    const handleModalClose = () => {
        setShouldReset(true)
        onCancel()
    }

    const handleModalSubmit = () => {
        // if (data.length === 0) {
        //     message.info('Vui lòng chọn file Excel')
        //     return
        // }
        // const isValid = data.some((item) => !item.IS_VALID)

        // if (isValid) {
        //     message.error('Có dữ liệu không hợp lệ')
        //     return
        // }
        setIsBusy(true)
        // apiUtil.auth
        // .execute({
        //     name: 'STORE_IMPORT',
        //     param: {},
        //     data: data,
        // })
        // .then((data) => {
        //     if (data.IsSuccess) {
        //         message.success('Import dữ liệu thành công')
        //         onCancel()
        //         onSubmit()
        //     }
        // })
        // .finally(() => setIsBusy(false))
    }

    return (
        <Modal
            open={isShow}
            onCancel={handleModalClose}
            title='Import cửa hàng'
            footer={[
                <Button type='default' key='back' onClick={handleModalClose} icon={<CloseOutlined />} tabIndex={-1}>
                    Đóng
                </Button>,
                <Button
                    type='default'
                    key='download-template'
                    style={{ marginRight: 8 }}
                    onClick={() => {
                        setIsDownloadingTemplate(true)
                        apiUtil.any.downloadSampleTemplate('MAU_IMPORT_CUA_HANG.xlsx', () => {
                            setIsDownloadingTemplate(false)
                        })
                    }}
                    loading={isDownloadingTemplate}
                    icon={<DownloadOutlined />}
                    tabIndex={-1}
                >
                    Tải mẫu import
                </Button>,
                <ExcelToJson
                    key='select-template'
                    onStart={() => {
                        setIsLoading(true)
                    }}
                    onCompleted={(response) => {
                        if (response.IsSuccess) {
                            if (response.Result.length === 0) {
                                message.info('File excel không có dữ liệu!')
                                return
                            }
                            const list = response.Result.map((item, index) => {
                                let isValid = true
                                let errMsg = ''
                                if (!item.A || !item.B || !item.C || !item.D) {
                                    isValid = false
                                    errMsg = 'Có dữ liệu không hợp lệ!'
                                }
                                return {
                                    PROVINCE_CODE: item.A,
                                    STORE_CODE: item.B,
                                    STORE_NAME: item.C,
                                    STORE_TYPE_NAME: item.D,
                                    STORE_PHONE: item.E,
                                    STORE_EMAIL: item.F,
                                    STORE_ADDRESS: item.G,
                                    SALE_PARTNER_NAME: item.H,
                                    STORE_DES: item.I,
                                    IS_VALID: isValid,
                                    ERROR_MSG: errMsg,
                                }
                            })
                            setData(list)
                        }
                    }}
                    onEnd={() => {
                        setIsLoading(false)
                    }}
                >
                    <Button type='default' loading={isLoading} key='excel' icon={<FileExcelOutlined />} tabIndex={-1}>
                        Chọn file excel
                    </Button>
                </ExcelToJson>,
                <Button type='primary' key='submit' onClick={handleModalSubmit} icon={<SaveOutlined />} loading={isBusy}>
                    Lưu
                </Button>,
            ]}
            destroyOnClose={true}
            maskClosable={false}
            afterClose={() => {
                if (shouldReset) {
                    // setData([])
                }
            }}
            width={1500}
            bodyStyle={{ padding: 0 }}
        >
            <TableExcelStore data={data} isLoading={isLoading} setData={setData} bordered />
        </Modal>
    )
}
export default ModalExcelStore
