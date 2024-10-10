import React, { useState } from "react";
import styles from "./AddContact.module.css";

function AddContact({ onAddContact }) {
  const [dataError, setDataError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const getDataHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const submitHandler = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{11}$/;
    if (
      contact.name &&
      contact.lastName !== "" &&
      emailRegex.test(contact.email) &&
      phoneRegex.test(contact.phone)
    ) {
      const newContact = {
        name: contact.name,
        lastName: contact.lastName,
        email: contact.email,
        phone: contact.phone,
      };
      onAddContact(newContact);
      setContact({
        name: "",
        lastName: "",
        email: "",
        phone: "",
      });
    } else if (
      contact.name &&
      contact.lastName &&
      contact.phone !== "" &&
      !emailRegex.test(contact.email)
    ) {
      setEmailError((emailError) => !emailError);
    } else {
      setDataError((dataError) => !dataError);
    }
  };
  return (
    <>
      <div className={styles.addContact}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Name"
            onChange={getDataHandler}
            value={contact.name}
            name="name"
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={getDataHandler}
            value={contact.lastName}
            name="lastName"
          />
          <input
            type="e-mail"
            placeholder="Email"
            onChange={getDataHandler}
            value={contact.email}
            name="email"
          />
          <input
            type="number"
            placeholder="Phone"
            onChange={getDataHandler}
            value={contact.phone}
            name="phone"
          />
        </div>
        <div>
          <button onClick={submitHandler}>Add Contact</button>
        </div>
      </div>
      {dataError && (
        <div className={styles.error}>
          <p>The information is incomplete, please complete it !!!</p>
        </div>
      )}
      {emailError && (
        <div className={styles.emailError}>
          <p>The email format is incorrect</p>
        </div>
      )}
    </>
  );
}

export default AddContact;
