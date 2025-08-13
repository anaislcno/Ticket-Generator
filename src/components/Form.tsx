import { Formik, Form, Field, ErrorMessage } from "formik";
import DragNDrop from "./DragNDrop";
import { validationSchema } from "../yupSchemas";

const HtmlForm = () => {
  const currentYear = new Date().getFullYear();
  const inputStyle = "border border-neutral-700 rounded-xl p-6 w-[500px]";

  return (
    <div className="m-auto flex max-w-[1156px] flex-col gap-36 items-center justify-between rounded-lg pt-36 pb-36">
      <div className="flex flex-col items-center gap-24">
        <h1 className="text-6xl font-bold text-center">
          Your Journey to Coding Conf {currentYear} Starts Here!
        </h1>
        <p className="text-center text-2xl text-neutral-300">
          Secure your spot at next year's biggest coding conference
        </p>
      </div>

      <Formik
        initialValues={{
          file: undefined as File | undefined,
          name: "",
          email: "",
          username: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ setFieldValue, setFieldTouched }) => (
          <Form className="flex flex-col gap-24" noValidate>
            <DragNDrop
              onFileSelect={(file) => setFieldValue("file", file)}
              onFileTouched={() => setFieldTouched("file", true)}
            />
            <div className="flex flex-col gap-12">
              <label htmlFor="name">Full Name</label>
              <Field className={inputStyle} type="text" id="name" name="name" />
              <ErrorMessage
                name="name"
                component="p"
                className="text-red-500"
              />
            </div>
            <div className="flex flex-col gap-12">
              <label htmlFor="email">Email Address</label>
              <Field
                className={inputStyle}
                type="email"
                id="email"
                name="email"
                placeholder="example@email.com"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500"
              />
            </div>
            <div className="flex flex-col gap-12">
              <label htmlFor="username">GitHub Username</label>
              <Field
                className={inputStyle}
                type="text"
                id="username"
                name="username"
                placeholder="@yourusername"
              />
              <ErrorMessage
                name="username"
                component="p"
                className="text-red-500"
              />
            </div>
            <button
              className="bg-orange-500 p-12 rounded-2xl text-neutral-800 font-bold w-[500px] cursor-pointer"
              type="submit"
            >
              Generate my ticket
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default HtmlForm;
