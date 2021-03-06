import { Formik } from 'formik';
import { useEffect } from 'react';

const AddPatientForm = ({ addPatient, isSavingPatient }) => {
	useEffect(() => {
		console.log(isSavingPatient);
	}, [isSavingPatient]);
	return (
		<Formik
			initialValues={{ name: '', email: '', whatsapp: '' }}
			onSubmit={(values, { isSubmitting }) => {
				addPatient({ ...values });
			}}
		>
			{formikCtx => {
				const {
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
					setSubmitting,
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

						<label>Whatsapp</label>
						<input
							type="whatsapp"
							name="whatsapp"
							value={values.whatsapp}
							onChange={handleChange}
						/>

						<button disabled={isSavingPatient}>Salvar</button>
					</form>
				);
			}}
		</Formik>
	);
};

export default AddPatientForm;
