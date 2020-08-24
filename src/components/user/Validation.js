import * as yup from 'yup'

const loginFormSchema = yup.object().shape({
    username: yup.string()
        .min(2, "Must be at least two characters.")
        .required('Name is required'),
    password: yup.string()
      .required("Please provide a password.")
  });

  export default loginFormSchema;