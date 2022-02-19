import { nanoid } from "@reduxjs/toolkit";
import { Formik } from "formik";

const AddPatientForm = ({ addPatient }) => {
  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      onSubmit={(values, { isSubmitting }) => {
        // console.log(values);
        addPatient({ id: nanoid(), ...values });
      }}
    >
      {(formikCtx) => {
        const {
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        } = formikCtx;

        return (
          <form onSubmit={handleSubmit}>
            <h3>Registrar paciente</h3>

            <label>Nome</label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />

            <button>Salvar</button>
          </form>
        );
      }}
    </Formik>
  );
};

export default AddPatientForm;
