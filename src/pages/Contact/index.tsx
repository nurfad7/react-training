import { FC } from "react";
import axios from "axios";
import {
  Field,
  Formik,
  Form,
  FormikHelpers,
} from "formik";
import * as Yup from "yup"
import { Mail } from "../../types/mail";

const About: FC = () => {
  const initialValues: Mail = {
    id: "",
    name: "",
    email: "",
    subject: "",
    message: "",
  }

  const handleAddMail = async (values: Mail, formikHelpers: FormikHelpers<Mail>) => {
    console.log("Adding mail");
    
    const { status } = await axios.post("http://localhost:3000/mails", values);
    if (status !== 201) {
      console.error("Failed to add mail");
    }
    
    formikHelpers.resetForm();
    alert("Mail added successfully");
    return;
  }
  
  const validationSchema = Yup.object({
    name: Yup.string().required("Your name is required"),
    email: Yup.string().required("Email is required").email("Please enter a valid email"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string()
      .max(500, "Your message has exceeded the 500 character limit")
      .required("Message is required"),
  });

  return (
    <div className="flex w-full pt-32 pb-20 px-16">
      <div className="w-1/2 flex flex-col gap-6">
        <img
          className="w-96 mb-8"
          src="./src/assets/imgs/user-profile.svg"
          alt="user photo"
        />
        <div className="text-lg text-dark-grey">Contact Details</div>
        <div className="text-3xl">ayush.barnwal@brightscout.com</div>
        <div className="text-3xl mb-6">+91 8651447521</div>
        <div className="text-lg text-dark-grey">Social</div>
        <a className="text-3xl" href="linkedin.com" target="_blank">
          LinkedIn
        </a>
        <a className="text-3xl" href="instagram.com" target="_blank">
          Instagram
        </a>
        <a className="text-3xl" href="x.com" target="_blank">
          Twitter
        </a>
        <a className="text-3xl" href="webflow.com" target="_blank">
          Webflow
        </a>
        <a className="text-3xl" href="figma.com" target="_blank">
          Figma
        </a>
      </div>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleAddMail}>
      {({ errors, touched }) => (
        <Form className="w-1/2 flex flex-col gap-10">
          <div className="text-6xl font-medium mb-5">
            Let’s build something cool together
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg font-medium">
              Name
            </label>
            <Field
              className="text-3xl border-b border-dark-grey p-5"
              type="text"
              name="name"
              placeholder="James Robert"
            />
            {touched && errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-medium">
              Email
            </label>
            <Field
              className="text-3xl border-b border-dark-grey p-5"
              type="email"
              name="email"
              placeholder="ayush.barnwal@brightscout.com"
            />
            {touched && errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="subject" className="text-lg font-medium">
              Subject
            </label>
            <Field
              className="text-3xl border-b border-dark-grey p-5"
              type="text"
              name="subject"
              placeholder="For web design work Enquire"
            />
            {touched && errors.subject && <span className="text-xs text-red-500">{errors.subject}</span>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-lg font-medium">
              Message
            </label>
            <Field
              className="text-3xl border-b border-dark-grey p-5"
              name="message"
              components="textarea"
              rows="4" cols="50"
              placeholder="Type your Message"
            />
            {touched && errors.message && <span className="text-xs text-red-500">{errors.message}</span>}
          </div>
          <button type="submit"
            className="h-[4.5rem] w-48 flex justify-center items-center 
                      bg-black text-white rounded-full cursor-pointer"
          >
            <span className="font-medium text-lg">Submit</span>
          </button>
        </Form>
        )}
      </Formik>
    </div>
  );
};

export default About;