import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import './style.css';

const ProfessionalDetail = ({ professional, onClose }) => {
	const { _id, name, email, whatsapp } = professional;

	const [isAvailabilityTableOpen, setIsAvailabilityTableOpen] =
		useState(false);

	return (
		<div className="professional-detail-container">
			<span onClick={onClose}>
				<MdClose />
			</span>

			<h3>{name}</h3>
			<p>
				email: {email}, whatsapp: {whatsapp}
			</p>

			<button
				onClick={() =>
					setIsAvailabilityTableOpen(!isAvailabilityTableOpen)
				}
			>
				{isAvailabilityTableOpen ? (
					<MdClose />
				) : (
					<span>{'availability'}</span>
				)}
			</button>

			{isAvailabilityTableOpen && <div>Table</div>}
		</div>
	);
};

export default ProfessionalDetail;
