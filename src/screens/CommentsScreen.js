import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useQuery, useMutation } from "react-query";
import CommentCard from "../components/Comment/CommentCard";
import axios from "axios";

const Container = styled.section`
  width: 100%;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  @media only screen and (min-width: 1000px) {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 800px;
  }
`;

const SubContainer = styled.div`
  max-width: 100%;
  padding-left: 20px;
  border-left: 2px solid #9999a1;
  margin-left: 0;
  @media only screen and (min-width: 1000px) {
    margin-left: 40px;
  }
`;

const CommentsScreen = () => {
  const [comments, setComments] = useState([]);

  const { data: currentUser } = useQuery("currentUser", async () => {
    const result = await axios.get(
      "https://raw.githubusercontent.com/alifdes/comments/main/public/data.json"
    );
    return result.data.currentUser;
  });

  const { isLoading } = useQuery(
    "comments",
    async () => {
      const result = await axios.get(
        "https://raw.githubusercontent.com/alifdes/comments/main/public/data.json"
      );
      return result.data.comments;
    },
    {
      onSuccess: (data) => {
        setComments(data);
      },
    }
  );

  return (
    <Container>
      {comments.map((comment) => (
        <>
          <CommentCard data={comment} currentUser={currentUser} />
          {comment.replies.length > 0 && (
            <SubContainer>
              {comment.replies.map((reply) => (
                <CommentCard data={reply} currentUser={currentUser} />
              ))}
            </SubContainer>
          )}
        </>
      ))}
    </Container>
  );
};
export default CommentsScreen;
