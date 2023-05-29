import { useField, ErrorMessage } from 'formik';

interface IProps {
  label: string;
  name: string;
  placeholder?: string;
  [x: string]: any;
}

export const SelectField = ({ label, ...props }: IProps) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};
