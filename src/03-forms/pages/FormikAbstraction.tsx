import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';
import { TextInputField, SelectField, Checkbox } from '../components';

export const FormikAbstractionPage = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={(values) => {}}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must have 15 characters or less')
            .required('Required'),
          lastName: Yup.string().required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          terms: Yup.boolean().oneOf(
            [true],
            'You have to accept the terms and conditions'
          ),
          jobType: Yup.string()
            .notOneOf(['it-jr'], 'You cannot choose this option')
            .required('Required'),
        })}
      >
        {(formik) => (
          <Form>
            <TextInputField
              label="First Name"
              name="firstName"
              placeholder="Daniel"
            />
            <TextInputField
              label="Last Name"
              name="lastName"
              placeholder="Espitia"
            />
            <TextInputField
              label="Email"
              name="email"
              placeholder="daniel@testing.com"
            />

            <SelectField label="Job Type" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Junior</option>
            </SelectField>

            <Checkbox label="Terms and Conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
