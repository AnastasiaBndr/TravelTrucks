import * as Yup from "yup";

export const formSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Too short!")
        .max(50, "Too long!")
        .required("Required"),
    email: Yup.string()
        .min(4, "Too short!")
        .max(50, "Too long!")
        .required("Required"),
    bookingDate: Yup.string().required("Required!"),
    comment: Yup.string().max(500, "Too long!").min(0, "Write anything!")
});