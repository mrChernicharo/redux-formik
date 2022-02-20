import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import './style.css';

const Patient = ({ patient, onDelete, onClick }) => {
	const { id, name, email } = patient;
	const [isDeleting, setIsDeleting] = useState(false);

	const handleDeletePatient = () => {
		setIsDeleting(true);
		setTimeout(() => onDelete(id), 1000);
	};

	const handlePatientClick = patient => {
		console.log(patient);
		onClick(patient);
	};

	return (
		<tr
			key={id}
			className={`patient-container ${isDeleting ? 'fading-out' : ''}`}
			onClick={() => handlePatientClick(patient)}
		>
			<td>
				<span>{id}</span>
			</td>
			<td>
				<span>{name}</span>
			</td>
			<td>
				<span>{email}</span>
				<span onClick={handleDeletePatient}>
					<FaTrash />
				</span>
			</td>
		</tr>
	);
};

export default Patient;
