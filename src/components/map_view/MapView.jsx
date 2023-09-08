/* eslint-disable no-useless-escape */
import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet'

function convertDMSToDD(dmsString, direction) {
    const parts = dmsString.split(/[°'"]/).map((part) => part.trim())
    const degrees = parseFloat(parts[0])
    const minutes = parseFloat(parts[1])
    const seconds = parseFloat(parts[2])
    const decimal = degrees + minutes / 60 + seconds / 3600
    if (direction === 'S' || direction === 'W') {
        return -decimal
    }
    return decimal
}

// function isValidLatLng(str) {
//     const regexExp = /^((\-?|\+?)?\d+(\.\d+)?),\s*((\-?|\+?)?\d+(\.\d+)?)$/gi
//     return regexExp.test(str)
// }

function isValidLatLng(lat, lng) {
    //The latitude must be a number between -90 and 90 and the longitude between -180 and 180.
    if (!isNaN(lat) && !isNaN(lng) && lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180) {
        return true
    } else {
        return false
    }
}

const defaultCenter = [10.957602332568278, 106.84236237520275]
const defaultZoom = 7
const southWest = [12.178964957906539, 108.76464843750001]
const northEast = [8.374561985472765, 104.45800781250001]
const bounds = [southWest, northEast]

function MapView(props) {
    const { lat, lng, height = 100, width = '100%', isEdit = false, isAllowOperateMap = false, onEdit } = props
    const [coordinates, setCoordinates] = useState(null)
    const [map, setMap] = useState(null)

    useEffect(() => {
        if (lat && lng) {
            //If lat,lng is DMS: Convert DMS to DD
            const latConvert = lat.indexOf('°') >= 0 ? convertDMSToDD(lat, 'N') : lat
            const lngConvert = lng.indexOf('°') >= 0 ? convertDMSToDD(lng, 'E') : lng
            //Check valid LatLng
            if (isValidLatLng(latConvert, lngConvert)) {
                setCoordinates({ lat: latConvert, lng: lngConvert })
            } else {
                setCoordinates(null)
            }
        } else {
            setCoordinates(null)
        }
    }, [lat, lng])

    useEffect(() => {
        if (map && coordinates) {
            map.flyTo([coordinates.lat, coordinates.lng], 18)
        }
    }, [map, coordinates])

    function LocationMarker(props) {
        const { setCoordinates, isAllowOperateMap } = props
        const map = useMapEvents({
            click(e) {
                setCoordinates(e.latlng)
                onEdit(e.latlng)
            },
        })
        if (isAllowOperateMap === true) {
            map.zoomControl.remove() // Loại dấu "+" "-" bên trái bản đồ
            map.dragging.disable() // Không cho kéo map
            map.touchZoom.disable() // Không cho phép chạm để zoom
            map.doubleClickZoom.disable() // Không có double-click để zoom
        }
        return null
    }

    return (
        <MapContainer
            center={coordinates ? [coordinates.lat, coordinates.lng] : defaultCenter}
            zoom={coordinates ? 1 : defaultZoom}
            scrollWheelZoom={true}
            style={{ height: height, width: width }}
            attributionControl={false}
            minZoom={7}
            maxZoom={18}
            maxBoundsViscosity={1.0}
            maxBounds={bounds}
            whenCreated={setMap}
        >
            {coordinates ? null : <p className='map-alter'>Tọa độ không hợp lệ</p>}
            <TileLayer attribution='&copy; <a href="https://iotsoftvn.com/">IOTSOFTVN</a> contributors' url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            {isEdit ? <LocationMarker setCoordinates={setCoordinates} isAllowOperateMap={isAllowOperateMap} /> : null}
            {coordinates ? <Marker key={`marker`} position={[coordinates.lat, coordinates.lng]}></Marker> : null}
        </MapContainer>
    )
}

export default MapView
