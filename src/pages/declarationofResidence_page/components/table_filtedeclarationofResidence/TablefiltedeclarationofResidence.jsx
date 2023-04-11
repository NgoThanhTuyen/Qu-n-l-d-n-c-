import { Button, Col, Row, Space } from 'antd'
import React from 'react'

function TablefiltedeclarationofResidence(props) {

  return (
    <Row gutter={[12, 12]}>
      <Col xs={24} sm={12} md={12} lg={6} xl={5} xxl={4}>
        <Space size='small' className='mb-2'>
          <Button className='text-center mb-0 ps-4 pe-4 pt-1 pb-5'>
            Số lượng User <br /> <span className='text-success fw-bold'>{100}</span>
          </Button>
          <Button className='text-center mb-0 ps-3 pe-2 pt-1 pb-5'>
            User đang online <br /> <span className='text-success fw-bold'>{100}</span>
          </Button>
          <Button className='text-center mb-0 ps-3 pe-3 pt-1 pb-5'>
            Tổng nhân sự <br /> <span className='text-success fw-bold'>{100}</span>
          </Button>
        </Space>
        <Space size='small'>
          <Button className='text-center mb-0 ps-3 pe-3 pt-1 pb-5'>
            Tổng phòng ban<br /> <span className='text-success fw-bold'>{100}</span>
          </Button>
          <Button className='text-center mb-0 ps-3 pe-3 pt-1 pb-5'>
            Tổng công nhân<br /> <span className='text-success fw-bold'>{100}</span>
          </Button>
          <Button className='text-center mb-0 ps-3 pe-3 pt-1 pb-5'>
            Tổng Section <br /> <span className='text-success fw-bold'>{100}</span>
          </Button>
        </Space>
      </Col>
    </Row>
  )
}

export default TablefiltedeclarationofResidence
