import Patient from './Patient';
import './style.css';

const PatientsTable = ({ patients, deletePatient, selectPatient }) => {
	const handlePatientDelete = id => {
		deletePatient(id);
	};

	return (
		<>
			<table>
				<thead>
					<tr>
						{patients[0] &&
							[...Object.keys(patients[0]), ' '].map(attr => (
								<th key={attr}>{attr}</th>
							))}
					</tr>
				</thead>
				<tbody>
					{patients.map(patient => (
						<Patient
							key={patient._id}
							patient={patient}
							onDelete={handlePatientDelete}
							onSelect={selectPatient}
						/>
					))}
				</tbody>
			</table>
		</>
	);
};

export default PatientsTable;
