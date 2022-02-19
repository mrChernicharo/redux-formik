import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import "./style.css";

const Patient = ({ patient, onDelete }) => {
  const { id, name, email } = patient;
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeletePatient = () => {
    setIsDeleting(true);
    setTimeout(() => onDelete(id), 1000);
  };

  return (
    <tr key={id} className={isDeleting ? "fading-out" : ""}>
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
