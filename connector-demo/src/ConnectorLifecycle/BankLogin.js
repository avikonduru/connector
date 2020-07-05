import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Ripples from 'react-ripples';

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
import { FaAngleLeft } from 'react-icons/fa';

const BankLogin = (props) => {
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});

	const { username, password } = formData;

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = async (e) => {
		username == 'user_good' && password == 'pass_good'
			? props.handleValid()
			: props.handleInValid();
	};

	return (
		<Fragment>
			<Modal.Header
				style={{
					backgroundColor: '#234099',
					borderColor: '#234099',
					color: 'white',
				}}
			>
				<Modal.Title>
					<FaAngleLeft
						size={20}
						style={{ cursor: 'pointer' }}
						onClick={() => {
							props.handleBack();
						}}
					/>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body style={{ backgroundColor: '#234099', color: 'white' }}>
				<Container style={{ maxHeight: '300px' }}>
					<Row
						style={{ marginBottom: 10 }}
						className='justify-content-md-center'
					>
						<Col>
							<Image
								src='https://logos-download.com/wp-content/uploads/2016/12/DBS_Bank_logo_logotype.png'
								fluid
								className='rounded mx-auto d-block'
								style={{
									maxWidth: 150,
								}}
							/>
						</Col>
					</Row>
					<Row style={{ marginTop: 10 }}>
						<Col>
							<p style={{ textAlign: 'center', fontWeight: 'bold' }}>
								Enter your credentials
							</p>
						</Col>
					</Row>
					<Row style={{ marginBottom: 10 }}>
						<Col>
							<Form>
								<Form.Group controlId='formBasicEmail'>
									<Form.Control
										placeholder='Username'
										name='username'
										value={username}
										onChange={(e) => onChange(e)}
										style={{ height: 50 }}
										className='shadow-sm'
										required
									/>
								</Form.Group>
								<Form.Group controlId='formBasicPassword'>
									<Form.Control
										type='password'
										placeholder='Password'
										name='password'
										value={password}
										onChange={(e) => onChange(e)}
										style={{ height: 50 }}
										className='shadow-sm'
										required
									/>
								</Form.Group>
								<Button
									variant='primary'
									onClick={(e) => onSubmit(e)}
									style={{
										backgroundColor: '#4d5ca9',
										borderColor: '#4d5ca9',
										height: 50,
									}}
									className='shadow-sm btn-block'
								>
									Submit
								</Button>
							</Form>
						</Col>
					</Row>
				</Container>
			</Modal.Body>
		</Fragment>
	);
};

BankLogin.propTypes = {};

export default BankLogin;
