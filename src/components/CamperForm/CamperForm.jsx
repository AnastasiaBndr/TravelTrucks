import toast, { Toaster } from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import { useSelector } from "react-redux";

import Button from "../../particles/Button";
import { formSchema } from "../../helpers";
import { selectCamper } from "../../redux/selectors";

import "react-datepicker/dist/react-datepicker.css";
import "./CustomDateRangePicker.css";
import css from "./CamperForm.module.css";

export default function CamperForm() {
  const camper = useSelector(selectCamper);

  const initialValues = {
    name: "",
    email: "",
    bookingDate: null,
    comment: "",
  };

  const handleSubmit = (values, actions) => {
    toast.success(
      `Successful! Your ${camper.name} on ${values.bookingDate.toLocaleDateString(
        "en-GB",
        { day: "numeric", month: "long", year: "numeric" }
      )} is almost ready!`,
      { duration: 4000 }
    );
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <div className={css["form-container"]}>
      <h3 className={css["title"]}>Book your campervan now</h3>
      <p className={css["description"]}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={formSchema}
      >
        {({ values, setFieldValue, touched, errors }) => (
          <Form className={css["formik-container"]}>
            <div className={css["fields-container"]}>
              <div>
                <Field
                  className={css.field}
                  type="text"
                  name="name"
                  placeholder="Name*"
                />
                <ErrorMessage
                  className={css.error}
                  name="name"
                  component="span"
                />
              </div>

              <div>
                <Field
                  className={css.field}
                  type="email"
                  name="email"
                  placeholder="Email*"
                />
                <ErrorMessage
                  className={css.error}
                  name="email"
                  component="span"
                />
              </div>

              <div>
                <DatePicker
                  selected={values.bookingDate}
                  onChange={(date) => setFieldValue("bookingDate", date)}
                  placeholderText="Booking date*"
                  className={css.field}
                  dateFormat="dd/MM/yyyy"
                />
                {touched.bookingDate && errors.bookingDate && (
                  <span className={css.error}>{errors.bookingDate}</span>
                )}
              </div>

              <div>
                <Field
                  className={css["comment-field"]}
                  name="comment"
                  placeholder="Comment*"
                  as="textarea"
                />
                <ErrorMessage
                  className="error"
                  name="comment"
                  component="span"
                />
              </div>
            </div>

            <Button type="submit" className={css["submit-button"]}>
              Submit
            </Button>
            <Toaster />
          </Form>
        )}
      </Formik>
    </div>
  );
}
