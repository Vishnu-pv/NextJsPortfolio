import React from "react";


const EmailTemplate = ({ email, message }) => (
    <div>
        <h1>Welcome, {email}!</h1>
        <h1>Message - , {message}!</h1>
    </div>
);

export default EmailTemplate;
