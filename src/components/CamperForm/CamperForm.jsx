import css from "./CamperForm.module.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";

import { formSchema } from "../../helpers";
import Button from "../../particles/Button";

export default function CamperForm({ addContact }) {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const bookingDateId = useId();
  const commentField = useId();

  const initialValues = {
    name: "",
    email: "",
    bookingDate: null,
  };

  const handleSubmit = (values, actions) => {
    addContact({ ...values, id: nanoid() });
    actions.resetForm();
  };

  return (
    <div className={css["form-container"]}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.description}>Stay connected! We are always ready to help you.</p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={formSchema}
      >
        <Form className={css["formik-container"]}>
          <div className={css["fields-container"]}>
            <div className={css["name-field-container"]}>
              <label className={css.label} htmlFor={nameFieldId}>
                Name*
              </label>
              <Field
                className={css.field}
                type="text"
                name="name"
                id={nameFieldId}
              />
              <ErrorMessage
                className={css.error}
                name="name"
                component="span"
              />
            </div>

            <div className={css["name-field-container"]}>
              <label className={css.label} htmlFor={emailFieldId}>
                Email*
              </label>
              <Field
                className={css.field}
                type="text"
                name="email"
                id={emailFieldId}
              />
              <ErrorMessage
                className={css.error}
                name="email"
                component="span"
              />
            </div>

            <div className={css["name-field-container"]}>
              <label className={css.label} htmlFor={bookingDateId}>
                Booking date*
              </label>
              <Field
                className={css.field}
                type="text"
                name="booking-date"
                id={bookingDateId}
              />
              <ErrorMessage
                className={css.error}
                name="booking-date"
                component="span"
              />
            </div>

            <div className={css["comment-field-container"]}>
              <label className={css.label} htmlFor={commentField}>
                Comment
              </label>
              <Field
                className={css["comment-field"]}
                type="text"
                name="comment"
                id={commentField}
              />
              <ErrorMessage
                className={css.error}
                name="comment"
                component="span"
              />
            </div>
          </div>

          <Button className={css["submit-button"]}type="submit">Add contact</Button>
        </Form>
      </Formik>
    </div>
  );
}
