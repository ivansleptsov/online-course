import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import star2 from '../assets/star2.png'

const DevicePage = () => {
  const device = {
    id: 1,
    name: '12 pro',
    price: 100000,
    rating: 5,
    img: 'https://img.mvideo.ru/Pdb/30059050b.jpg',
  }
  const description = [
    { id: 1, tittle: 'Оперативная память', description: ' 5 Гб' },
    { id: 2, tittle: 'Камера', description: ' 12 мп' },
    { id: 3, tittle: 'Процессор', description: ' i9' },
    { id: 4, tittle: 'Кол-во ядер', description: ' 2' },
    { id: 5, tittle: 'Аккумулятор', description: ' 4000' },
  ]
  return (
    <Container className="mt-3">
      <Row>
        <Col xs={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col xs={4}>
          <Row>
            <h2 className="d-flex align-items-center justify-content-center">
              {device.name}
            </h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ fontSize: 64 }} // не работает бэкграунд
            >
              <Image width={64} height={64} src={star2} />
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col xs={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontsize: 32,
              border: '5px solid lightgray',
            }}
          >
            <h3>от {device.price} руб.</h3>
            <Button variant="outline-dark">Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        {description.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? 'lightgray' : 'transparent',
              padding: 10,
            }}
          >
            {info.tittle}:{info.description}
          </Row>
        ))}
      </Row>
    </Container>
  )
}

export default DevicePage
