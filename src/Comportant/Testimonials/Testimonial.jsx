import React from 'react'
import './testimonial.css'
import { Container, Row, Col } from 'reactstrap'
import TestimonialImg from '../../assets/images/review1.png'
import Slider from 'react-slick'
const Testimonial = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000
    }
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='8' sm='12' md='12' className='m-auto'>
                        <div className='slider_wrapper d-flex align-items-center gap-5'>
                            <div className='slider_contennt w-50'>

                                <h2 className='mb-4'>What Our Customers Are Saying</h2>
                                <Slider {...settings}>
                                    <div>
                                        <div className='single_testimonial'>
                                            <p className='review_content'>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus
                                            </p>
                                            <h6>Nisarg Shah</h6>
                                            <p>Web Devloper</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='single_testimonial'>
                                            <p className='review_content'>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus
                                            </p>
                                            <h6>Nisarg Shah</h6>
                                            <p>Web Devloper</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='single_testimonial'>
                                            <p className='review_content'>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus
                                            </p>
                                            <h6>Nisarg Shah</h6>
                                            <p>Web Devloper</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='single_testimonial'>
                                            <p className='review_content'>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus
                                            </p>
                                            <h6>Nisarg Shah</h6>
                                            <p>Web Devloper</p>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                            <div className='slider_img w-50'>
                            <img src={TestimonialImg} alt='' />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Testimonial
// Testimonial ne pages na App.js ma import kairu che // 
