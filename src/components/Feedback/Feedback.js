import React from 'react';
import { Accordion, Carousel, Col, Container, Row } from 'react-bootstrap';

const Feedback = () => {
    return (
        <div className="mt-5 mb-5">
            <Container>
                <Row>
                    <Col sm={12} lg={6}>
                        <div className="text-center mb-5">
                            <h4 className="text-danger">Read What Says Our</h4>
                            <h2>HAPPY PATIENTS</h2>
                            <Carousel>
                                <Carousel.Item interval={1000}>
                                    <img
                                        className="d-block w-100"
                                        src="https://i.ibb.co/5vhwwTc/patient-doctor-gauze-mask-dark-red-blue-background-emotion-calm-tranquility-healthcare-respiratory-i.jpg"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3 className=" bg-primary rounded-3">Ashraful Alam</h3>
                                        <h6>Always helpful and always available. The folks at (IC) are my insurance people, for everything…cars, boats, houses and that makes my life easier. Peace of mind would be enough, but their bundled rates beat everyone else I’ve used before too..</h6>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={1000}>
                                    <img
                                        className="d-block w-100"
                                        src="https://i.ibb.co/wdbt85Z/ovarian-cancer-featured-image.jpg"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3 className=" bg-primary rounded-3">Zakia Hossain</h3>
                                        <h6>This agency does a fantastic job finding me the right coverage and insurance company at a very competitive price every time my insurance renews. Very happy with them as my agent!!</h6>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={1000}>
                                    <img
                                        className="d-block w-100"
                                        src="https://i.ibb.co/Wxt3xFY/drugseeking.jpg"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3 className=" bg-primary rounded-3">Shuvo Ahmed</h3>
                                        <h6>This agency does a fantastic job finding me the right coverage and insurance company at a very competitive price every time my insurance renews. Very happy with them as my agent!!</h6>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>
                        </div>
                    </Col>

                    <Col sm={12} lg={6}>
                        <div className="">
                            <div className="text-center"> <h4 className="text-danger">Feel Free For</h4>
                                <h2>ANY FAQ’S</h2></div>

                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header> <h6>What is the link between cholesterol and heart disease?</h6> </Accordion.Header>
                                    <Accordion.Body>
                                        Many years of scientific studies have shown a close relationship between cardiovascular disease and cholesterol levels. Your doctor may request a lipid profile—a test that shows the levels of LDL (bad cholesterol), HDL (good cholesterol), and triglycerides in your blood—to assess your risk for developing heart disease.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header> <h6>If my body makes its own cholesterol, why does my diet matter?</h6> </Accordion.Header>
                                    <Accordion.Body>
                                        When we measure cholesterol levels in your blood, what we see is a combination of what your body makes and what you eat. Because you cannot control how much cholesterol your body produces, other than with medications, restricting saturated fat in your diet can have a major impact on lowering your cholesterol.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header> <h6>Should I focus on lowering my dietary cholesterol or saturated fat?</h6> </Accordion.Header>
                                    <Accordion.Body>
                                        Limiting saturated and trans fats in your diet has the biggest impact on lowering your cholesterol. Restricting fatty meats, choosing low-fat or nonfat dairy products, and avoiding butter and margarine play a major role in helping to maintain healthy cholesterol levels.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header> <h6> After you have a heart attack, is it too late to benefit from cholesterol-lowering drugs?</h6> </Accordion.Header>
                                    <Accordion.Body>
                                        No, it’s never too late to benefit from cholesterol-lowering drugs. After you’ve had a heart attack, using cholesterol-lowering drugs such as statins may significantly lower your chances of having another heart attack or stroke. If you have not had a heart attack, but are at increased risk of heart disease or show early evidence of plaque in your arteries, a cholesterol-lowering drug may help prevent a heart attack or stroke.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Col>
                </Row>


            </Container>
        </div>
    );
};

export default Feedback;