import React from "react";
import { Toast, ToastBody, ToastHeader } from "reactstrap";

const Footer = props => {
  return (
    <div>
      <div className="p-3 bg-dark my-2 rounded">
        <Toast>
          <ToastHeader>Book Barn</ToastHeader>
          <ToastBody>
            Thank you for visiting this site! Have a wonderful day!
          </ToastBody>
        </Toast>
      </div>
    </div>
  );
};

export default Footer;
