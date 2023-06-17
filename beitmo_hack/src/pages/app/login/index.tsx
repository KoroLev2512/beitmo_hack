import {ErrorMessage, Field, Form, Formik} from "formik";
import {object, string} from "yup";
import {useUserStore} from "../../../lib/store/userStore";


export const LoginPage = () => {
    const login = useUserStore(state => state.login)
    const handleSubmit = (values: { email: string; password: string; }, {setSubmitting}: {
        setSubmitting: (value: boolean) => void
    }) => {
        login(values);
        setSubmitting(false);
    };

    const loginSchema = object().shape({
        password: string()
            .min(8, "Too Short!")
            .max(50, "Too Long!")
            .required("Required"),
        email: string().email("Invalid email").required("Required")
    });

    return (
        <Formik
            initialValues={{email: "", password: ""}}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
        >
            {({isSubmitting}) => {
                return (
                    <Form>
                        <label>
                            Email: <Field type="email" name="email"/>
                            <ErrorMessage name="email" component="div"/>
                        </label>
                        <label>
                            Password:
                            <Field type="password" name="password"/>
                            <ErrorMessage name="password" component="div"/>
                        </label>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                );
            }}
        </Formik>
    );
};
