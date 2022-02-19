import { FaTrash } from "react-icons/fa";

const Patient = ({ patient, onDelete }) => {
  const { id, name, email } = patient;

  const handleDeletePatient = () => {
    onDelete(id);
  };
  return (
    <tr key={id}>
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
