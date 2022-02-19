import { nanoid } from "@reduxjs/toolkit";

const AddPatientForm = ({ addPatient }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputEls = Array.from(e.target.children).filter(
      (el) => el.tagName === "INPUT"
    );

    const formData = inputEls.reduce(
      (acc, input) => {
        acc[input.name] = input.value;
        return acc;
      },
      { id: nanoid() }
    );

    addPatient(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Registrar paciente</h3>

      <label>Nome</label>
      <input type="text" name="name" />

      <label>Email</label>
      <input type="email" name="email" />

      <button>Salvar</button>
    </form>
  );
};

export default AddPatientForm;
