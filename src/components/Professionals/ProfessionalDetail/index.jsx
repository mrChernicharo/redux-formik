import { useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import AvailabilityTable from './AvailabilityTable';
import './style.css';

const ProfessionalDetail = ({
	professional,
	onClose,
	fetchProfessionalAvailability,
}) => {
	const { _id, name, email, whatsapp, availability } = professional;

	useEffect(() => {
		fetchProfessionalAvailability(_id);
	}, []);

	return (
		<div className="professional-detail-container">
			<span onClick={onClose}>
				<MdClose />
			</span>

			<h3>{name}</h3>
			<p>
				email: {email}, whatsapp: {whatsapp}
			</p>

			<AvailabilityTable
				professionalId={_id}
				availability={availability}
			/>
		</div>
	);
};

export default ProfessionalDetail;
