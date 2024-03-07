import * as Yup from "yup";
import { FormValues, FormProps } from "./types";
import instance from "../../api/api_instance";
import { withFormik } from "formik";
import Form from "./components/form";
import { useEffect, useState } from "react";

const TweetSchema = Yup.object().shape({
  tweet: Yup.string()
    .required("Belum input!")
    .max(50, "sudah lebih dari 50 karakter"),
});

interface Tweets {
  id: number;
  tweet: string;
}

export default function TweetForm() {
  const [tweet, setTweet] = useState<Tweets>();
  const tweeting = async (props: FormValues) => {
    const {tweet} = props
    await instance.post("tweet", {
      tweet,
    });
  };
  // tidak perlu manggil id 
  const fetchTweet = async () => {
    const { data } = await instance.get(`tweet`);
    setTweet(data);
  };

  useEffect(() => {
    fetchTweet();
  },[]);

  const FormTweet = withFormik<FormProps, FormValues>({
    mapPropsToValues: (props) => ({
      tweet: props.initialTweet || tweet?.tweet || "",
    }),
    validationSchema: TweetSchema,
    enableReinitialize: true,
    handleSubmit({ tweet }: FormValues, { resetForm }) {
      tweeting({ tweet });
      resetForm();
    },
  })(Form);

  return (
    <>
      <FormTweet />
    </>
  );
}
