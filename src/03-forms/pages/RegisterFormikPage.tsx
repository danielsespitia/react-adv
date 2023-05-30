import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const RegisterFormikPage = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Must have 2 characters or more')
      .max(15, 'Must have 15 characters or less')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .min(6, 'Must have 6 characters or more')
      .required('Password is required'),
    repassword: Yup.string()
      .required('Must repeat password')
      .oneOf([Yup.ref('password')], 'Passwords must match'),
  });

  return (
    <div>
      <h1>Formik Components</h1>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          repassword: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {({ handleReset }) => (
          <Form>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="span" />

            <label htmlFor="email">Email</label>
            <Field name="email" type="text" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="password">Password</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="span" />

            <label htmlFor="repassword">Confirm password</label>
            <Field name="repassword" type="password" />
            <ErrorMessage name="repassword" component="span" />

            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
