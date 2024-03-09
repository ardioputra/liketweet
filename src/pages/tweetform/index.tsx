import * as Yup from "yup";
import { FormValues, FormProps } from "./types";
import instance from "../../api/api_instance";
import { withFormik } from "formik";
import Form from "./components/form";
import { useEffect, useState } from "react";

const TweetSchema = Yup.object().shape({
  name: Yup.string().required("Perlu masukan nama!"),
  tweet: Yup.string()
    .required("Belum input!")
    .max(50, "sudah lebih dari 50 karakter"),
});

interface Tweets {
  id: number;
  name: string;
  tweet: string;
}

export default function TweetForm() {
  const [tweet, setTweet] = useState<Tweets>();
  const tweeting = async (props: FormValues) => {
    const { name, tweet } = props;
    await instance.post("tweets", {
      name,
      tweet,
    });
  };
  // tidak perlu manggil id
  const fetchTweet = async () => {
    const { data } = await instance.get(`tweets`);
    setTweet(data);
  };

  useEffect(() => {
    fetchTweet();
  }, []);

  const FormTweet = withFormik<FormProps, FormValues>({
    mapPropsToValues: (props) => ({
      name: props.initialName || tweet?.name || "",
      tweet: props.initialTweet || tweet?.tweet || "",
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
