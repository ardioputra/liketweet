import * as Yup from "yup";
import { FormValues, FormProps } from "./types";
import instance from "../../api/api_instance";
import { withFormik } from "formik";
import Form from "./components/form";
import { useEffect, useState } from "react";
import { Tweets } from "./types";
import { set } from "../../redux/tweet";
import { useAppDispatch } from "../../redux/hooks";

const TweetSchema = Yup.object().shape({
  name: Yup.string().required("Perlu masukan nama!"),
  tweet: Yup.string()
    .required("Belum input!")
    .max(50, "sudah lebih dari 50 karakter"),
});

export default function TweetForm() {
  const dispatch = useAppDispatch();

  const tweeting = async (props: FormValues) => {
    const { name, tweet } = props;
    await instance.post("tweets", {
      name,
      tweet,
    });
    await fetchTweet();
  };
  // tidak perlu manggil id
  const fetchTweet = async () => {
    const { data } = await instance.get(`tweets`);
    dispatch(set(data));
  };

  const FormTweet = withFormik<FormProps, FormValues>({
    mapPropsToValues: (props) => ({
      name: props.initialName || "",
      tweet: props.initialTweet || "",
    }),
    validationSchema: TweetSchema,
    enableReinitialize: true,
    handleSubmit({ name, tweet }: FormValues, { resetForm }) {
      tweeting({ name, tweet });
      resetForm();
    },
  })(Form);

  return (
    <>
      <FormTweet />
    </>
  );
}
