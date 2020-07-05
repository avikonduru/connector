import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Bootstrap
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';

// Icons
import { FaCheck } from 'react-icons/fa';

const AcceptCredentials = (props) => {
	return (
		<Fragment>
			<Modal.Header
				style={{
					backgroundColor: '#234099',
					borderColor: '#234099',
					color: 'white',
				}}
			>
				<Modal.Title></Modal.Title>
			</Modal.Header>
			<Modal.Body style={{ backgroundColor: '#234099', color: 'white' }}>
				<Container style={{ maxHeight: '300px' }}>
					<Row style={{ marginTop: 10, marginBottom: 10 }}>
						<Col style={{ textAlign: 'center' }}>
							<FaCheck size={50} />
						</Col>
					</Row>
					<Row style={{ marginTop: 10, marginBottom: 10 }}>
						<Col>
							<p style={{ textAlign: 'center', fontWeight: 'bold' }}>
								Your account was successfully linked to My Test App
							</p>
						</Col>
					</Row>
				</Container>
			</Modal.Body>
			<Modal.Footer
				style={{
					backgroundColor: '#234099',
					borderColor: '#234099',
					color: 'white',
				}}
			>
				<Button
					variant='primary'
					onClick={() => {
						props.handleContinue();
					}}
					style={{
						backgroundColor: '#4d5ca9',
						borderColor: '#4d5ca9',
						height: 50,
					}}
					className='shadow-sm btn-block'
				>
					Continue
				</Button>
			</Modal.Footer>
		</Fragment>
	);
};

AcceptCredentials.propTypes = {};

export default AcceptCredentials;
