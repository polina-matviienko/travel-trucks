import * as Yup from "yup";

export const BookingSchema = Yup.object().shape({
  name: Yup.string().min(2, "Name is too short").required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});
