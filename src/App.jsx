import React from "react";
import { useState } from "react";
import ListContact from "./component/ListContact";
import AddContact from "./component/AddContact";
import Banner from "./component/Banner";
import style from "./App.module.css";

function App() {
  const [contact, setContact] = useState([]);

  const handleAddContact = (newContact) => {
    setContact((contact) => [...contact, newContact]);
  };
  const removeItem = (indexToRemove) => {
    const updatedList = contact.filter(
      (item, index) => index !== indexToRemove
    );
    setContact(updatedList);
  };
  return (
    <>
      <div className="Container">
        <Banner />
        <AddContact onAddContact={handleAddContact} />
        <ListContact removeItem={removeItem} contact={contact} />
      </div>
    </>
  );
}

export default App;
