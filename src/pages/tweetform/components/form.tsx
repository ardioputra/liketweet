import { FormikProps } from "formik";
import { FormValues } from "../types";

export default function Form(props: FormikProps<FormValues>) {
  const { values, errors, touched, handleChange, handleSubmit, isSubmitting } =
    props;

  // Fungsi untuk menghitung jumlah karakter
  const countCharacters = (text: string) => {
    return text.length;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="textAreaInput"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your Name
        </label>
        <input
          type="text"
          name="name"
          id="inputInput"
          onChange={handleChange}
          value={values.name}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your name"
        />
        {touched.name && errors.name && <span>{errors.name}</span>}
        <label
          htmlFor="textAreaInput"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <textarea
          id="textAreaInput"
          name="tweet"
          onChange={handleChange}
          value={values.tweet}
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
        {touched.tweet && errors.tweet && <span>{errors.tweet}</span>}
        <div>Character Count: {countCharacters(values.tweet)} / 50</div>
        <button type="submit" disabled={isSubmitting}>
          Tweet
        </button>
        <div></div>
      </form>
    </>
  );
}
