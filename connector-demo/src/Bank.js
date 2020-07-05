import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Ripples from 'react-ripples';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Icons
import { FaChevronRight } from 'react-icons/fa';

const Bank = (props) => {
	return (
		<Fragment>
			<a style={{ cursor: 'pointer' }}>
				<Card
					style={{ flex: 1, marginTop: 5, marginBottom: 5 }}
					className='shadow-sm'
				>
					<Ripples
						onClick={() => {
							props.handleSelect();
						}}
					>
						<Row style={{ marginLeft: 5, marginRight: 5 }}>
							<Col
								style={{
									marginTop: 'auto',
									marginBottom: 'auto',
									marginLeft: 'auto',
									marginRight: 'auto',
									fontSize: 20,
									textAlign: 'center',
								}}
								md={2}
							>
								<Card.Img variant='top' src={props.bankIcon} />
							</Col>
							<Col
								style={{
									marginTop: 'auto',
									marginBottom: 'auto',
									marginLeft: 'auto',
									marginRight: 'auto',
									fontSize: 20,
									textAlign: 'left',
								}}
								md={8}
							>
								<Card.Body>
									<Card.Text style={{ fontWeight: 'bold' }}>
										{props.bankTitle}
									</Card.Text>
								</Card.Body>
							</Col>
							<Col
								style={{
									marginTop: 'auto',
									marginBottom: 'auto',
									marginLeft: 'auto',
									marginRight: 'auto',
									fontSize: 20,
									textAlign: 'center',
								}}
								md={2}
							>
								<Card.Body>
									<Card.Text style={{ fontWeight: 'bold' }}>
										<FaChevronRight size={30} />
									</Card.Text>
								</Card.Body>
							</Col>
						</Row>
					</Ripples>
				</Card>
			</a>
		</Fragment>
	);
};

Bank.propTypes = {};

export default Bank;
