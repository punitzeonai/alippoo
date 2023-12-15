import React from "react";
import { useState } from "react";
import "./UserData.css";
import { Modal } from "./Modal";
import { createPortal } from "react-dom";

const UserData = ({ users }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleButtonClick = (value) => {
    setModalOpen(false);
    setMessage(value);
  };

  return (
    <>
      {users.map((curUser) => {
        const { name, age, city, pinCode } = curUser;
        return (
          <>
            <tr className="myClass" key={name}>
              <td>{name}</td>
              <td>{age}</td>
              <td> {city} </td>
              <td> {pinCode}</td>
              <td
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  padding: "4px",
                }}
              >
                <button
                  className="btn btn-open"
                  onClick={() => setModalOpen(true)}
                >
                  EDIT
                </button>

                <button
                  className="btn btn-open"
                >
                  Delete
                </button>

                {modalOpen &&
                  createPortal(
                    <Modal
                      onSubmit={handleButtonClick}
                      onBtnCancel={handleButtonClick}
                      OnXclose={handleButtonClick}
                    >
                      <h2>Edit Data</h2>
                      <input type="text" placeholder="enter the data to edit" />
                    </Modal>,
                    document.body
                  )}
              </td>
            </tr>
          </>
        );
      })}
      {message}
    </>
  );
};

export default UserData;
