import { CameraOutlined } from '@ant-design/icons'
import { Button, Modal, Select } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import Webcam from 'react-webcam'
import apiUtil from '../../utils/apiUtil'

const { Option } = Select

// function CameraView(props) {
//     const { isCameraConnected, onCapture } = props

//     const webcamRef = useRef(null)

//     const [devices, setDevices] = useState([])
//     const [selectedDeviceId, setSelectedDeviceId] = useState(null)
//     const [isLoading, setIsLoading] = useState(false)
//     const [capabilitie, setCapabilitie] = useState(null)
//     const [isGetCapa, setIsGetCapa] = useState(false)
//     const [isUploadFile, setIsUploadFile] = useState(false)

//     const loadVideoConstraints = async () => {
//         setIsGetCapa(true)

//         const stream = await navigator.mediaDevices.getUserMedia({ video: true })
//         const track = stream.getVideoTracks()[0]
//         const capabilities = track.getCapabilities()
//         if (capabilities.width && capabilities.height) {
//             const capa = {
//                 width: capabilities.width.max > capabilities.height.max ? capabilities.height.max : capabilities.width.max,
//                 height: capabilities.width.max > capabilities.height.max ? capabilities.width.max : capabilities.height.max,
//             }
//             setCapabilitie(capa)
//             setIsGetCapa(false)
//         }

//     }

//     useEffect(() => {
//         if (isCameraConnected && selectedDeviceId) {
//             loadVideoConstraints()
//         }
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [selectedDeviceId])

//     const getEnumerateDevices = async () => {
//         const deviceList = await navigator.mediaDevices.enumerateDevices()
//         const videoDevices = deviceList.filter((device) => device.kind === 'videoinput')
//         setDevices(videoDevices)
//         setSelectedDeviceId(videoDevices[0]?.deviceId || '')
//     }

//     useEffect(() => {
//         if (isCameraConnected) {
//             const getDevices = async () => {
//                 setIsLoading(true)
//                 try {
//                     const intervalGetDevice = setInterval(() => {
//                         if (typeof navigator.mediaDevices.enumerateDevices() !== 'undefined') {
//                             navigator.mediaDevices.enumerateDevices()
//                         }
//                         //alert(JSON.stringify(webcamRef))
//                         if (webcamRef?.current?.state?.hasUserMedia) {
//                             clearInterval(intervalGetDevice)
//                             getEnumerateDevices()
//                             setIsLoading(false)
//                         }
//                     }, 500)
//                 } catch (error) {
//                     Modal.error({
//                         title: 'Thông báo',
//                         content: (
//                             <p>
//                                 Trình duyệt chưa cho phép sử dụng Camera. Vui lòng bật tính năng này bằng cách:
//                                 <br />
//                                 <br />
//                                 Bước 1: Truy cập <br /> <b>edge://flags/#unsafely-treat-insecure-origin-as-secure</b>
//                                 <br />
//                                 <br />
//                                 Bước 2: <b>Enable</b> tính năng <br /> <b>Insecure origins treated as secure</b>
//                                 <br />
//                                 <br />
//                                 Bước 3: Nhập đường dẫn <br /> <b>{window.location.origin}</b>
//                                 <br />
//                                 <br />
//                                 Bước 4: Bấm nút <b>Restart</b> lại trình duyệt
//                             </p>
//                         ),
//                     })
//                 } finally {
//                     setIsLoading(false)
//                 }
//             }
//             getDevices()
//         }
//     }, [isCameraConnected])

//     const getScreenshot = useCallback(
//         (capabilitie) => {
//             const imageSrc = webcamRef.current.getScreenshot({
//                 width: capabilitie.width,
//                 height: capabilitie.height,
//             })
//             return imageSrc
//         },
//         [webcamRef]
//     )

//     // eslint-disable-next-line no-unused-vars
//     const onClickCaptureImage = async () => {
//         setIsUploadFile(true)
//         const imageSrc = await getScreenshot(capabilitie)
//         apiUtil.auth
//             .uploadImage(imageSrc)
//             .then((res) => {
//                 if (!res.IsSuccess) {
//                     Modal.error({ title: 'Thông báo', content: `Có sự cố xảy ra trong quá trình tải ảnh: ${res.Message}` })
//                     return
//                 } else {
//                     onCapture(res)
//                 }
//             })
//             .finally(() => setIsUploadFile(false))
//             .catch((err) => {
//                 Modal.error({ title: 'Thông báo', content: `Có sự cố xảy ra khi upload ảnh: ${err.message}` })
//             })
//     }

//     return (
//         <div>
//             <Select
//                 onChange={(value) => {
//                     setSelectedDeviceId(value)
//                 }}
//                 value={selectedDeviceId}
//                 className='w-100'
//             >
//                 {devices.map((device) => (
//                     <Option key={device.deviceId} value={device.deviceId}>
//                         {device.label}
//                     </Option>
//                 ))}
//             </Select>
//             {isCameraConnected && !isGetCapa ? (
//                 <>
//                     <Spin spinning={isLoading}>
//                         <Webcam
//                             audio={false}
//                             videoConstraints={{ width: capabilitie?.width, height: capabilitie?.height, deviceId: selectedDeviceId }}
//                             ref={webcamRef}
//                             screenshotFormat='image/jpeg'
//                             style={{
//                                 width: '100%',
//                                 marginTop: 6,
//                             }}
//                         />
//                     </Spin>
//                     <Button loading={isUploadFile} block type='primary' onClick={onClickCaptureImage}>
//                         <CameraOutlined />
//                         Chụp ảnh
//                     </Button>
//                 </>
//             ) : null}
//         </div>
//     )
// }

function CameraView(props) {
    const { isCameraConnected, width = '100%', height = 400, onCapture } = props

    const webcamRef = useRef(null)
    const [devices, setDevices] = useState([])
    const [selectedDeviceId, setSelectedDeviceId] = useState('')
    const [capabilitie, setCapabilitie] = useState({ width: 720, height: 1280 })
    const [cameraAccess, setCameraAccess] = useState(false)
    const [isUploadFile, setIsUploadFile] = useState(false)

    useEffect(() => {
        const getDevices = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true })
                setCameraAccess(true)
                stream.getTracks().forEach((track) => track.stop())
                const track = stream.getVideoTracks()[0]
                const capabilities = track.getCapabilities()
                if (capabilities.width && capabilities.height) {
                    const capa = {
                        width: capabilities.width.max > capabilities.height.max ? capabilities.height.max : capabilities.width.max,
                        height: capabilities.width.max > capabilities.height.max ? capabilities.width.max : capabilities.height.max,
                    }
                    setCapabilitie(capa)
                }
            } catch (error) {
                console.error('Error enumerating devices:', error)
            }
        }
        getDevices()
    }, [])

    useEffect(() => {
        const getDeviceList = async () => {
            const deviceList = await navigator.mediaDevices.enumerateDevices()
            const videoDevices = deviceList.filter((device) => device.kind === 'videoinput')
            setDevices(videoDevices)
            setSelectedDeviceId(videoDevices[0]?.deviceId || '')
        }
        if (cameraAccess) {
            getDeviceList()
        } else {
            setDevices([])
            setSelectedDeviceId(null)
        }
    }, [cameraAccess])

    const handleDeviceChange = (value) => {
        setSelectedDeviceId(value)
    }

    const captureImage = () => {
        setIsUploadFile(true)
        const imageSrc = webcamRef.current.getScreenshot({
            width: capabilitie?.width,
            height: capabilitie?.height,
        })
        apiUtil.auth
            .uploadImage(imageSrc)
            .then((res) => {
                if (!res.IsSuccess) {
                    Modal.error({ title: 'Thông báo', content: `Có sự cố xảy ra trong quá trình tải ảnh: ${res.Message}` })
                    return
                } else {
                    onCapture(res)
                    
                }
            })
            .finally(() => setIsUploadFile(false))
            .catch((err) => {
                Modal.error({ title: 'Thông báo', content: `Có sự cố xảy ra khi upload ảnh: ${err.message}` })
            })
    }

    return (
        <>
            {isCameraConnected ? (
                <div>
                    <div>
                        <Select onChange={handleDeviceChange} value={selectedDeviceId} className='w-100'>
                            {devices.map((device) => (
                                <Option key={device.deviceId} value={device.deviceId}>
                                    {device.label}
                                </Option>
                            ))}
                        </Select>
                        <div className='d-flex justify-content-center align-items-center' style={{ position: 'relative', backgroundColor: '#000', minHeight: height }}>
                            <p style={{ position: 'absolute', top: '50%', zIndex: 1 }} className='text-danger'>
                                Đang kết nối camera...
                            </p>
                            <Webcam style={{ width: width, zIndex: 2 }} audio={false} ref={webcamRef} videoConstraints={{ width: capabilitie?.width, height: capabilitie?.height, deviceId: selectedDeviceId }} />
                        </div>
                    </div>
                    <Button className='mt-2' loading={isUploadFile} block type='primary' size='large' onClick={captureImage}>
                        <CameraOutlined />
                        Chụp ảnh
                    </Button>
                </div>
            ) : null}
        </>
    )
}

export default CameraView
