import React from "react";


const EmailTemplate = ({ email, message }) => (
    <div>
        <h3>From -  {email}!</h3>
        <p>Message -  {message}!</p>
    </div>
);

export default EmailTemplate;
