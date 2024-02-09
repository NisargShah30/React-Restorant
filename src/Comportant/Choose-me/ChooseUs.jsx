import React from 'react'
import './Choose-us.css'
import { Container, Row, Col } from 'reactstrap'
import PastaImg from '../../assets/images/pasta.png'

const ChooseUs = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <img src={PastaImg} alt='' className='w-100' />
                    </Col>
                    <Col lg='6' md='6'>
                        <div className='choose_content'>
                            <h4>Who we Are?</h4>
                            <h2>Take a look at the Benifits we Offer you</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                        <div className='fetures mt-4'>
                        {/* 1 row */}
                            <div className='feture1  d-flex align-items-center gap-5'>
                                <div className='silgle_feture'>
                                    <span><i className='ri-truck-line'></i></span>
                                    <h6>Free Home Delivery</h6>
                                    <p>It is a long established fact.</p>
                                </div>
                                <div className='silgle_feture'>
                                    <span className='feture_icon-two'><i className='ri-money-dollar-circle-line'></i></span>
                                    <h6>Return & Refund</h6>
                                    <p>It is a long established fact.</p>
                                </div>
                            </div>
                            {/* 2 row */}
                            <div className='feture1 mt-3  d-flex align-items-center gap-5'>
                                <div className='silgle_feture'>
                                    <span className='feture_icon-3'><i className='ri-secure-payment-line'></i></span>
                                    <h6>secure payment</h6>
                                    <p>It is a long established fact.</p>
                                </div>
                                <div className='silgle_feture'>
                                    <span className='feture_icon-4'><i className='ri-24-hours-line'></i></span>
                                    <h6>24/7 Hours Support</h6>
                                    <p>It is a long established fact.</p>
                                </div>
                            </div>
                            {/* row end  */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ChooseUs
//ChooseUs ne pages na home ma import kairu che // 
