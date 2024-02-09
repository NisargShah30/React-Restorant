import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

const footerQuickLinks = [
    {
        display: "Terms & Conditions",
        url: "#",
    },
    {
        display: "Privacy Policy",
        url: "#",
    },
    {
        display: "Return & Refund",
        url: "#",
    },
    {
        display: "Payment Method",
        url: "#",
    },
];

const footerLinks = [
    {
        display: "About Us",
        url: "#",
    },
    {
        display: "Menu",
        url: "#",
    },
    {
        display: "Recipes",
        url: "#",
    },
    {
        display: "Contact",
        url: "#",
    },
];
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <Container>
                    <Row>
                        <Col lg="4" md="4" sm="6">
                            <div className="logo">
                                <h2 className="d-flex align-items-center gap-1 mb-4">
                                    <span>
                                    <i class="ri-restaurant-2-fill" style={{color:'orange'}}></i>
                                    </span>
                                    Chef Food
                                </h2>
                                <p>
                                    Lorem ipsum is placeholder text commonly used in the
                                    graphic.Lorem ipsum is placeholder text commonly used in the
                                    graphic.Lorem ipsum is placeholder text commonly used in the
                                    graphic.
                                </p>
                            </div>
                        </Col>
                        <Col lg="3" md="4" sm="6">
                            <h5 className="footer_link-title">Info Links</h5>
                            <ListGroup>
                                {
                                    footerQuickLinks.map((item,index)=>(
                                        <ListGroupItem key={index} className="link_item">
                                            <a href={item.url}>{item.display}</a>
                                        </ListGroupItem>
                                    ))
                                }
                                

                            </ListGroup>
                        </Col>
                        <Col lg="2" md="4" sm="6">
                            <h5 className="footer_link-title">Quick Links</h5>
                            <ListGroup>
                                {
                                    footerLinks.map((item,index)=>(
                                        <ListGroupItem key={index} className="link_item">
                                            <a href={item.url}>{item.display}</a>
                                        </ListGroupItem>
                                    ))
                                }
                            </ListGroup>
                        </Col>
                        <Col lg='3' md='4' sm='6'>
                            <h5 className="footer_link-title">Contact</h5>
                            <ListGroup>
                                <ListGroupItem className="link_item d-flex align-items-center gap-3">
                                    <i className="ri-map-pin-line"></i>Vadodra,Gujrat,India
                                </ListGroupItem>
                                <ListGroupItem className="link_item d-flex align-items-center gap-3">
                                    <i className="ri-mail-line"></i>Nisarg006@Gmail.com
                                </ListGroupItem>
                                <ListGroupItem className="link_item d-flex align-items-center gap-3">
                                    <i className="ri-phone-line"></i> +91 6352370017
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="footer_bottom">
                <Container>
                    <Row>
                        <Col lg='12'>
                            <p>Copyright 2024, Devloped By Nisarg Shah. All right reserved</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;
//Footer ne pages na home ma import kairu che //
