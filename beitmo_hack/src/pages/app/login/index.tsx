import {ErrorMessage, Field, Form, Formik} from "formik";
import {object, string} from "yup";
import {useUserStore} from "../../../lib/store/userStore";


const LoginPage = () => {
	const login = useUserStore(state => state.login);
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
					<Form style={{ display: "flex", flexDirection: "column", height: "100vh", alignItems: "center", justifyContent: "center"}}>
						<label style={{ marginBottom: 24, display: "flex", flexDirection: "column", alignItems: "start" }}>
                            Email: <Field type="email" name="email"/>
							<ErrorMessage name="email" component="div"/>
						</label>
						<label style={{ marginBottom: 24, display: "flex", flexDirection: "column", alignItems: "start" }}>
                            Password:
							<Field type="password" name="password"/>
							<ErrorMessage name="password" component="div"/>
						</label>
						<button type="submit" style={{ background: "#0750ff", border: "none", borderRadius: 14, color: "white", padding: "10px 24px" }} disabled={isSubmitting}>
                            Войти
						</button>
					</Form>
				);
			}}
		</Formik>
	);
};

export default LoginPage;
