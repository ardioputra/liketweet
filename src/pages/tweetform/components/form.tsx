import { FormikProps } from "formik";
import { FormValues } from "../types";

export default function Form(props: FormikProps<FormValues>) {
  const { values, errors, touched, handleChange, handleSubmit, isSubmitting } =
    props;
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <textarea
          id="message"
          name="tweet"
          type="text"
          onChange={handleChange}
          value={values.tweet}
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>

        {/* <label htmlFor="Tweet">What are you gonna tweet today?</label>
        <input

          placeholder="masukan tweet anda!"
        /> */}
        {touched.tweet && errors.tweet && <span>{errors.tweet}</span>}
        <button type="submit" disabled={isSubmitting}>
          Tweet
        </button>
      </form>
    </>
  );
}
