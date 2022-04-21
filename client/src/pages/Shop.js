import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BrandBar from '../components/BrandBar'
import DeviceList from '../components/DeviceList'
import TypeBar from '../components/TypeBar'
const Shop = () => {
  return (
    <Container>
      <Row className="mt-2">
        <Col xs={3}>
          <TypeBar />
        </Col>
        <Col xs={9}>
          <BrandBar />
          <DeviceList />
          fdsf
        </Col>
      </Row>
    </Container>
  )
}

export default Shop
