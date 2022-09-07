import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const useEmail = () => {
  const [status, setStatus] = useState("pending");
  const formRef = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStatus("success");
        },
        (error) => {
          setStatus("fail");
        }
      );
  };

  return { formRef, sendEmail, status, setStatus };
};

export default useEmail;
