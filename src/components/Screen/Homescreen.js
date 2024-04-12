import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CategoriesBar from '../../components/CategoriesBar/CategoriesBar'
import Video from '../../components/Video/Video'

const Homescreen = () => {
  return (
    <Container>
        <CategoriesBar/>
            <Row>
                {
                    [...new Array(20)].map(()=>(
                        <Col lg={3} md={4}>
                                <Video/>
                    </Col>))}
                
            </Row>


    </Container>
  )
}

export default Homescreen