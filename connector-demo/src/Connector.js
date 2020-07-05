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

// Icons
import { FaChevronRight } from 'react-icons/fa';

// Components
import AddBank from './ConnectorLifecycle/AddBank';
import BankLogin from './ConnectorLifecycle/BankLogin';
import AcceptCredentials from './ConnectorLifecycle//AcceptCredentials';
import RejectCredentials from './ConnectorLifecycle//RejectCredentials';

const Connector = (props) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [modalPage, setModalPage] = useState(1);
	const setFirst = () => setModalPage(1);
	const setSecond = () => setModalPage(2);
	const setThird = () => setModalPage(3);
	const setFourth = () => setModalPage(4);

	return (
		<Fragment>
			<Button variant='primary' onClick={handleShow}>
				Add Bank
			</Button>

			<Modal
				show={show}
				onHide={handleClose}
				backdrop='static'
				keyboard={false}
				centered
			>
				{modalPage == 1 ? (
					<AddBank handleSelect={setSecond} />
				) : modalPage == 2 ? (
					<BankLogin
						handleBack={setFirst}
						handleValid={setThird}
						handleInValid={setFourth}
					/>
				) : modalPage == 3 ? (
					<AcceptCredentials handleContinue={handleClose} />
				) : modalPage == 4 ? (
					<RejectCredentials handleRetry={setFirst} />
				) : (
					<p>ERROR</p>
				)}
			</Modal>
		</Fragment>
	);
};

Connector.propTypes = {};

export default Connector;
