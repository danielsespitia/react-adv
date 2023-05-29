import { ErrorMessage, useField } from 'formik';

interface IProps {
  label: string;
  name: string;
  [x: string]: any;
}

export const Checkbox = ({ label, ...props }: IProps) => {
  const [field] = useField({ ...props, type: 'checkbox' });

  return (
    <>
      <label>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};
