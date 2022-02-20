import { nanoid } from 'nanoid';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import './style.css';

const Patient = ({ patient, onDelete, onSelect }) => {
	const { _id, name, email, whatsapp, created_at } = patient;
	const [isDeleting, setIsDeleting] = useState(false);

	const handleDeletePatient = e => {
		e.stopPropagation();
		setIsDeleting(true);
		setTimeout(() => onDelete(id), 1000);
	};

	return (
		<tr
			key={nanoid()}
			className={`patient-container ${isDeleting ? 'fading-out' : ''}`}
			onClick={() => onSelect(patient)}
		>
			<td>
				<span>{_id}</span>
			</td>
			<td>
				<span>{name}</span>
			</td>
			<td>
				<span>{email}</span>
			</td>
			<td>
				<span>{whatsapp}</span>
			</td>
			<td>
				<span>{created_at}</span>
			</td>
			<td>
				<span onClick={handleDeletePatient}>
					<FaTrash />
				</span>
			</td>
		</tr>
	);
};

export default Patient;
