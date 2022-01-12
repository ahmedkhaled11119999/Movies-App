import { Formik, Form } from "formik";
import { Input } from "../components/Input";
import * as Yup from "yup";

const Register = () => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  const validate = Yup.object({
    firstName: Yup.string()
      .min(3, "First Name must be at least 3 characters")
      .required("First name is required"),
    lastName: Yup.string()
      .min(3, "Last Name must be at least 3 characters")
      .required("Last name is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(
        8,
        "Your password MUST Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => console.log(values)}
    >
      {(formik) => (
        <div className="container-fluid">
          <div className="row">
            <div className="offset-2 col-8 offset-2">
              <h1 className="my-5">
                Register you account for
                <span className="text-danger"> free</span> !
              </h1>
              <Form>
                <Input label="First Name" name="firstName" type="text" />
                <Input label="Last Name" name="lastName" type="text" />
                <Input label="Email" name="email" type="email" />
                <Input label="Password" name="password" type="password" />
                <Input
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                />
                <button
                  className="btn btn-dark me-2 mt-2"
                  name="submit"
                  type="submit"
                >
                  Submit
                </button>
                <button
                  className="btn btn-danger mt-2"
                  name="reset"
                  type="reset"
                >
                  Reset
                </button>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Register;
