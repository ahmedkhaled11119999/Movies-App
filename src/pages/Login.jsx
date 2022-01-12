import { Formik, Form } from "formik";
import { Input } from "../components/Input";
import * as Yup from "yup";

const Login = () => {
  const validate = Yup.object({
    emailAddress: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <Formik
      initialValues={{
        emailAddress: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => console.log(values)}
    >
      {(formik) => (
        <div className="container-fluid">
          <div className="row">
            <div className="offset-2 col-8 offset-2">
              <h1 className="my-5">Login to your account</h1>
              <Form>
                <Input label="Email" name="emailAddress" type="email" />
                <Input label="Password" name="password" type="password" />
                <button
                  className="btn btn-danger me-2 mt-2"
                  name="login"
                  type="submit"
                >
                  Login
                </button>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Login;
