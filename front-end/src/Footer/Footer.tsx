import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; 2025 Your Company Name. All rights reserved.</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <a href="#privacy" className="text-white mx-2">Privacy Policy</a>
            <a href="#terms" className="text-white mx-2">Terms of Service</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;