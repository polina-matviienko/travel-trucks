"use client";

import { Formik, Form, ErrorMessage, FormikHelpers } from "formik";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BookingSchema } from "@/lib/validators";
import { postBooking } from "@/lib/campersApi";
import { AppButton } from "@/components/UI/Button/Button";
import { Input } from "@/components/UI/Input/Input";
import css from "./BookingForm.module.css";

interface BookingFormValues {
  name: string;
  email: string;
}

interface BookingFormProps {
  camperId: string;
}

export default function BookingForm({ camperId }: BookingFormProps) {
  const [loading, setLoading] = useState(false);

  const initialValues: BookingFormValues = {
    name: "",
    email: "",
  };

  const handleSubmit = async (
    values: BookingFormValues,
    { resetForm }: FormikHelpers<BookingFormValues>,
  ) => {
    try {
      setLoading(true);
      const toSend = { ...values, camperId };
      const response = await postBooking(toSend);

      toast.success(response.message || "Success!");
      resetForm();
    } catch {
      toast.error("Something went wrong, please try later");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={css.formContainer}>
      <Toaster position="top-right" />

      <div className={css.formHeader}>
        <h3 className={css.title}>Book your campervan now</h3>
        <p className={css.text}>
          Stay connected! We are always ready to help you.
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={BookingSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className={css.form} noValidate>
            <div className={css.inputsWrapper}>
              <div className={css.inputGroup}>
                <Input
                  name="name"
                  placeholder="Name*"
                  className={errors.name && touched.name ? css.errorBorder : ""}
                />
                <ErrorMessage
                  name="name"
                  component="span"
                  className={css.errorMsg}
                />
              </div>

              <div className={css.inputGroup}>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email*"
                  className={
                    errors.email && touched.email ? css.errorBorder : ""
                  }
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className={css.errorMsg}
                />
              </div>
            </div>

            <AppButton
              type="submit"
              disabled={loading}
              className={css.submitBtn}
            >
              {loading ? "Sending..." : "Send"}
            </AppButton>
          </Form>
        )}
      </Formik>
    </section>
  );
}
