import React, { Fragment } from 'react';
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
import Bank from '../Bank';

const AddBank = (props) => {
	return (
		<Fragment>
			<Modal.Header closeButton>
				<Modal.Title>Find a bank</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Container className='overflow-auto' style={{ maxHeight: '300px' }}>
					<Row style={{ marginTop: 10, marginBottom: 10 }}>
						<Col>
							<Bank
								bankIcon={'https://i.dlpng.com/static/png/477448_preview.png'}
								bankTitle={'DBS Bank'}
								handleSelect={props.handleSelect}
							/>
							<Bank
								bankIcon={
									'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwULnR7mwe4UmVUDs64TIofU8qt9tcbSRrGA&usqp=CAU'
								}
								bankTitle={'OCBC Bank'}
							/>
							<Bank
								bankIcon={
									'https://graphic.sg/thumbs/uob-logo-16eee2a1f8c8e33135111582896c9f05.jpg'
								}
								bankTitle={'United Overseas Bank'}
							/>
							<Bank
								bankIcon={
									'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSovJglbnWRHMpb1shehJltd-YcxCAvVocBZw&usqp=CAU'
								}
								bankTitle={'MayBank'}
							/>
							<Bank
								bankIcon={
									'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRArhnRC8dRckHrmiRm9_ltFARCiN2FiCksbQ&usqp=CAU'
								}
								bankTitle={'CIMB'}
							/>
							<Bank
								bankIcon={
									'https://3.bp.blogspot.com/-APb8JZxI0mo/T9jSErlmYBI/AAAAAAAAADQ/S7N0xa3D8d4/s1600/public%2Bbank.jpg'
								}
								bankTitle={'Public Bank Berhad'}
							/>
							<Bank
								bankIcon={
									'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3potPCVTjx-2EvVtp8eCmjIpuaVpBOtyIrQ&usqp=CAU'
								}
								bankTitle={'Siam Commercial Bank'}
							/>
						</Col>
					</Row>
				</Container>
			</Modal.Body>
		</Fragment>
	);
};

AddBank.propTypes = {};

export default AddBank;
