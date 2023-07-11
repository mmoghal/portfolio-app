import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, message);
    // Clear the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </label>
        <label>
          Message:
          <textarea value={message} onChange={(event) => setMessage(event.target.value)} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
