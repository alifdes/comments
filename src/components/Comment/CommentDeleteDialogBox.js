import React, { useState } from "react";
import styled from "styled-components";
import { ReplayButton } from "../../styles/CommentStyles";

const Button = styled(ReplayButton)`
height: 50px;
width: 100%;
position: relative;
`;
const Wrapper = styled.div`
  .delete-message-dialog {
    width: 80%;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 0 2000px rgba(0, 0, 0, 0.5);
    padding: 20px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    @media only screen and (min-width: 750px) {
      width: 300px;
    }
  }

  .delete-message-dialog h2 {
    font-size: 1.2em;
    margin: 0 0 10px;
  }

  .delete-message-dialog p {
    margin: 0 0 20px;
  }

  .delete-message-dialog-buttons {
    display: flex;
  }
`;

function CommentDeleteDialogBox({ setShowDialog, message, heading }) {
  const handleDelete = () => {
    // Perform delete action here
    console.log("Comment deleted!");
    setShowDialog(false);
  };

  const handleCancel = () => {
    setShowDialog(false);
  };

  return (
    <Wrapper>
      <div className="delete-message-dialog">
        <h2>{heading}</h2>
        <p>{message}</p>
        <div className="delete-message-dialog-buttons">
          <Button
            onClick={handleCancel}
            style={{ background: "#919299" }}
          >
            NO,CANCEL
          </Button>
          <Button
            onClick={handleDelete}
            style={{ background: "red" }}
          >
            YES, DELETE
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}

export default CommentDeleteDialogBox;
