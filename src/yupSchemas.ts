import * as yup from "yup";

yup.setLocale({
  mixed: {
    required: "This field is required",
  },
});

export const validationSchema = yup.object({
  file: yup
    .mixed()
    .test("fileType", "Only JPG or PNG files are allowed", (value) => {
      if (!value) return true;
      if (!(value instanceof File)) return true;
      return ["image/jpeg", "image/png"].includes(value.type);
    })
    .test("fileSize", "File must be less than 500MB", (value) => {
      if (!value) return true;
      if (!(value instanceof File)) return true;
      const maxSize = 500 * 1024 * 1024;
      return value.size <= maxSize;
    })
    .test("fileRequired", "A file is required", (value) => {
      return value instanceof File;
    }),
  name: yup
    .string()
    .required()
    .min(5, "Full name must be at least 5 characters"),
  email: yup.string().email("Invalid email format").required(),
  username: yup.string().max(30).required(),
});
