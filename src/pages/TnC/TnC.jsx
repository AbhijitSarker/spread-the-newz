import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TnC = () => {
    return (
        <Container className="terms-container">
            <Row>
                <Col>
                    <h2>Terms and Conditions of Use for [News Website Name]</h2>
                    <p>
                        These terms and conditions ("Terms") govern your use of [News Website Name] ("Website"), owned and operated by [Company Name]. By accessing or using the Website, you agree to be bound by these Terms. If you do not agree with these Terms, please do not use the Website.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>1. Acceptable Use</h3>
                    <p>
                        You agree to use the Website for lawful purposes only. You shall not engage in any activity that may disrupt the functionality, security, or accessibility of the Website. This includes, but is not limited to, unauthorized access to the Website, distribution of harmful content, and any form of data mining or harvesting.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>2. Intellectual Property</h3>
                    <p>
                        All content on the Website, including articles, images, videos, graphics, and logos, are the intellectual property of [Company Name] or its licensors. You may not reproduce, distribute, modify, or create derivative works based on this content without explicit permission from [Company Name].
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>3. User Contributions</h3>
                    <p>
                        By submitting any content (comments, reviews, etc.) to the Website, you grant [Company Name] a non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, and display that content on the Website and related platforms. You are solely responsible for the accuracy and legality of the content you submit.
                    </p>
                </Col>
            </Row>
            {/* Continue adding sections using similar structure */}
            <Row>
                <Col>
                    <p>
                        For any questions or concerns regarding these Terms, please contact us at [Contact Email].
                    </p>
                    <p>Last updated: [Date]</p>
                </Col>
            </Row>
            <Link to='/register'><Button variant="danger"> <FaArrowLeft></FaArrowLeft> Go Back Registration</Button></Link>
        </Container>


    );
};

export default TnC;