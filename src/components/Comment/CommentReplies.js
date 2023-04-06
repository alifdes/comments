import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CommentInput, Comments, ReplayButton } from "../../styles/CommentStyles";
import axios from "axios";
import { useMutation } from "react-query";

const CommentReplies = ({setShowReply,data }) => {

  return (
    <Comments>
      <img
        src={data.image.webp}
        style={{ width: "30px", height: "30px", margin: "12px" }}
      />
      <CommentInput/>
      <ReplayButton onClick={() => {setShowReply(false)}}>Reply</ReplayButton>
    </Comments>
  );
};

export default CommentReplies;
