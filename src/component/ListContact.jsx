import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import styles from "./ListContact.module.css";
function ListContact({ removeItem, contact }) {
  const [nullList, setNullList] = useState(true);
  useEffect(() => {
    if (contact.length === 0) {
      setNullList(true);
    } else {
      setNullList(false);
    }
  }, [contact]);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.listContactLabel}>Contact List</div>
        {nullList && (
          <div className={styles.nullListContact}>No Contact Yet!</div>
        )}
        <div className={styles.listContainer}>
          {contact.map((item, index) => (
            <div className={styles.listContact} key={index}>
              <p>{item.name}</p>
              <p>{item.lastName}</p>
              <p>{item.email}</p>
              <p>{item.phone}</p>
              <button
                onClick={() => removeItem(index)}
                className={styles.trashIcon}
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ListContact;
