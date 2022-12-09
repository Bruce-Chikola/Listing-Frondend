import * as yup from 'yup'

export const basicSchema = yup.object().shape({
    email: yup.string().required("Username is required!"),
    password: yup.string().min(5).required("Password is required")
})