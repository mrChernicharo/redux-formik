import Patient from './Patient';
import './style.css';

const PatientsTable = ({ patients, deletePatient, selectPatient }) => {
	const handlePatientDelete = id => {
		deletePatient(id);
	};

	const handlePatientClick = patient => {
		selectPatient(patient);
	};

	return (
		<>
			<table>
				<thead>
					<tr>
						{patients[0] &&
							Object.keys(patients[0]).map(attr => (
								<th key={attr}>{attr}</th>
							))}
					</tr>
				</thead>
				<tbody>
					{patients.map(patient => (
						<div>
							<Patient
								key={patient.id}
								patient={patient}
								onDelete={handlePatientDelete}
								onClick={handlePatientClick}
							/>
						</div>
					))}
				</tbody>
			</table>
		</>
	);
};

export default PatientsTable;
