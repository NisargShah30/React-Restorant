import React from 'react'
import './Download.css'
import appImg from '../../assets/images/app.png'
import { Container, Row, Col } from 'reactstrap'
const Download = () => {
    return (
        <section>
            <Container className='app_cointiner'>
                <Row>
                    <Col lg='6' md='6'>
                        <div className='app_img'>
                            <img src={appImg} alt='' />
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className='app_contennt'>
                            <h5>Download Our App</h5>
                            <h2 className='mb-4'>Never Feel Hungry! Download Our Mobile App order Delicious Food</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                            <div className='app_btn btn_apple d-flex align-items-center gap-5 mt-4'>
                                {/* 2 button */}
                                <button className='btn_apple d-flex align-items-center gap-3'>
                                    <i className='ri-apple-line'></i>
                                    <a href=''>Apple Store</a>
                                </button>
                                {/* 2 button */}
                                <button className='btn_google  d-flex align-items-center gap-3'>
                                    <i className='ri-google-play-line'></i>
                                    <a href=''>Google Play</a>
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Download
// Download ne pages na Home.js ma import kairu che // 
