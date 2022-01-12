import { ErrorMessage, useField } from "formik";

export const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className="fs-5" htmlFor={field.name}>
        {label}
      </label>
      <input
        className={`form-control mb-3 ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
      />
      <ErrorMessage
        component="div"
        className="fs-6 text-danger my-2"
        name={field.name}
      />
    </>
  );
};
