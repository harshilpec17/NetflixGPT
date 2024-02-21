import React from "react";
import { useSelector } from "react-redux";

const ContactUs = () => {
  const user = useSelector((store) => store.user);
  return <div>ContactUs</div>;
};

export default ContactUs;
