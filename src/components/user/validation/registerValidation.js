import * as yup from 'yup'

const registerFormSchema = yup.object().shape({
    // username: yup.string()
    //     .min(2, "Must be at least two characters.")
    //     .required('Name is required'),
    password: yup.string()
      .required("Please provide a password.")
      .min(6, "Password must be at least six characters."),
    firstName: yup.string()
        .required("Please provide a first name."),
    lastName: yup.string()
        .required("Please provide a last name."),
    email: yup.string()
        .required("Please provide an email name."),

    // terms: yup.boolean()
    //     .required("Terms must be checked.")
    //     .oneOf([true], "You must accept the terms and conditions")

  });

  export default registerFormSchema;