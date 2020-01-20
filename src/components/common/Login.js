import React, { Fragment } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';

const Login = (props) => {
  const { children, description, image, title } = props;

  return (
    <Fragment>
      <Row className="h-75">
        <Col md={{ size: 6, offset: 3 }} className="text-center my-5 my-md-auto">
          <Card body className="login">
            <CardBody>
              { image.src && <CardImg className="mb-4" style={image.style} src={image.src} alt={image.alt} /> }
              <CardTitle>
                <h2 className="mb-4">{title}</h2>
              </CardTitle>
              <CardSubtitle>
                <h5 className="text-secondary font-weight-normal mb-4">{description}</h5>
              </CardSubtitle>
              { children }
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

Login.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    style: PropTypes.objectOf(PropTypes.any).isRequired,
  }),
  children: PropTypes.node.isRequired,
};

Login.defaultProps = {
  image: {
    src: '',
    alt: 'Hyralinx',
    style: { width: '16rem', height: '3.5rem' },
  },
};

export default Login;
